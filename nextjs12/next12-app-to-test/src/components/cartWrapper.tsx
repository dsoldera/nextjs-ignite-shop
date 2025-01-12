import { useShoppingCart } from "use-shopping-cart"
import { CartModal } from "./cartModal"

export const CartWrapper = () => {
  const { shouldDisplayCart } = useShoppingCart()
  
  return (
     (shouldDisplayCart && <CartModal />)
  )
}