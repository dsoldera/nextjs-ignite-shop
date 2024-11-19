import { GetStaticProps } from "next"
import Image from "next/image"
import Link from "next/link"
import Stripe from "stripe"
import { stripe } from "../lib/stripe"

interface HomeProps {
  products: {
    id: string
    name: string
    imageUrl: string
    price: string
  }[]
}

export default function Home({ products }: HomeProps) {
  return (
    <>
     {products.map(product => {
        return (
          <Link href={`/product/${product.id}`} key={product.id} prefetch={false}>
            <Image src={product.imageUrl} width={200} height={200} alt="" />
          </Link>
        )
      })}
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const response = await stripe.products.list({
    expand: ['data.default_price']
  });
  const products = response.data.map(product => {
    const price = product.default_price as Stripe.Price;

    return {
      id: product.id,
      name: product.name,
      imageUrl: product.images[0],
      price: new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL'
      }).format(price.unit_amount! / 100),
    }
  })

  return {
    props: {
      products
    },
    revalidate: 60 * 60 * 2 // 2 hours,
  }
}
