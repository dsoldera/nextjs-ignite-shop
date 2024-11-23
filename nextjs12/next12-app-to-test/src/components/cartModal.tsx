import { CartModalContainer } from "../styles/pages/app"

interface Cart{
  id: string,
  name: string,
  imageUrl: string,
  price: number,
  currency: string,
  priceInCurrency: string,
  defaultPriceId: string,
  quantity: number,
  price_data: object
}

export const CartModal = () => {
  return (
    <CartModalContainer>
      <h2>Sacola de compras</h2>

    </CartModalContainer>
  )
}