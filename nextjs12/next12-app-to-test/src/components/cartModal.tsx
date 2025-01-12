import axios from "axios"
import { useRouter } from "next/router"
import { X } from 'phosphor-react'
import { useState } from "react"
import { useShoppingCart } from "use-shopping-cart"
import { CartModalContainer, CartProductInfo, CheckoutButton, CloseButton, Qtd, Total } from "../styles/pages/cartModal"
import { CartEntry } from "./cartEntry"

export interface Entry {
  id: string,
  name: string,
  sku: string,
  imageUrl: string,
  price: number,
  currency: string,
  description: string
  priceInCurrency: string,
  defaultPriceId: string,
  quantity: number,
  price_data: object
}

export const CartModal = () => {
  const cart  = useShoppingCart()
  const { handleCartClick, totalPrice, cartCount, formattedTotalPrice, redirectToCheckout  } = useShoppingCart();
  const { removeItem, cartDetails } = cart
  const [isCreatingCheckoutSession, setIsCreatingCheckoutSession] = useState(false);
  const { isFallback } = useRouter()
  console.log('cartDetails', cartDetails)
  
  const handleCheckout = async () => {
    const cartList = Object.values(cartDetails ?? {}).map((cardItem) => cardItem);
    const productsToCheckout = cartList.map((product) => {
      return {
        price: product.defaultPriceId,
        quantity: product.quantity
      };
    });
    console.log('productsToCheckout', productsToCheckout)

    if (isFallback) return <p>Loading...</p>

    try {
      setIsCreatingCheckoutSession(true)

      const response = await axios.post("/api/checkout", {
        products: productsToCheckout
      });

      const { checkoutUrl } = response.data;
      window.location.href = checkoutUrl;

    } catch(err) {
      setIsCreatingCheckoutSession(false);
      alert('falha no carregamento do Checkout')
    }
  }

  return (
    <CartModalContainer>
      <div>
        <CloseButton className='close-button' onClick={() => handleCartClick()}>
          <X size={20} color={'#8D8D99'}/>
        </CloseButton>
        <h2>Sacola de compras</h2>
        {cartCount === 0 && 'Sua sacola está vazia'}
        {cartDetails && Object.values(cartDetails).map((entry) => {
          return (
            <CartEntry key={entry.id} entry={entry} removeItem={removeItem} />
          )})}
      </div>
      <div>
        <p>
          {cartCount !== 0 && (
            <CartProductInfo>
              <Qtd>Quantidade 
                <span>{ cartCount ?? 0 } 
                {(cartCount ?? 0) === 1 && ' item'}
                {(cartCount ?? 0) > 1 && ' itens'}
                </span>
              </Qtd>
              <Total>Valor Total 
                <span>{formattedTotalPrice}</span>
              </Total>
            </CartProductInfo>
          )}
        </p>
        <CheckoutButton
          disabled={isCreatingCheckoutSession} 
          onClick={handleCheckout}>
        Finalizar Compra
        </CheckoutButton>
      </div>
    </CartModalContainer>
  )
}