import { GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";
import Image from "next/image";
import Stripe from "stripe";
import { useShoppingCart } from "use-shopping-cart";
import { stripe } from "../../lib/stripe";
import { ImageContainer, ProductContainer, ProductDetails } from "../../styles/pages/product";

interface ProductProps {
  product: {
    id: string
    sku: string
    name: string
    imageUrl: string
    price: number
    currency: string
    description: string
    defaultPriceId: string
    formattedPrice: number
  }
}

export default function Product({ product }: ProductProps) { 
  const cart = useShoppingCart()
  const { addItem } = cart
   
  return(
    <>
      <Head>
        <title>{product.name} | Ignite Shop</title>
      </Head>
      <ProductContainer>

        <ImageContainer key={product.id}>
          <Image src={product.imageUrl} width={400} height={400} alt="" />
        </ImageContainer>
        
        <ProductDetails>
          <h1>{product.name}</h1>
          <span>R$ {(product.price / 100).toFixed(2)}</span>
          
          <p>{product.description}</p>
          
          <button 
            onClick={() => addItem(product)}>
            Colocar na Sacola
          </button>
        </ProductDetails>
      </ProductContainer>
    </>
  )
}

// A method that returns the Ids that I can generate the static page
// So I can pass the most visited products
export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [
      {
        params: { id: 'prod_REbIEmSA8rSe8t' }
      }
    ],
    fallback: true,
    // fallback: "blocking",
  }
}

export const getStaticProps: GetStaticProps<any, { id: string }> = async ({ params }) => {
  const productId = params!.id

  const product = await stripe.products.retrieve(productId, {
    expand: ['default_price']
  })

  const price = product.default_price as Stripe.Price;

  return {
    props: {
      product: {
        sku: product.id,
        id: product.id,
        name: product.name,
        imageUrl: product.images[0],
        price: price.unit_amount,
        formattedPrice: price.unit_amount!,
        currency: 'BRL',
        description: product.description,
        defaultPriceId: price.id
      }
    },
    revalidate: 60 * 60 * 1 // 1 hour
  }
}
