import Image from "next/image"
import cartIcon from "../assets/cart-icon.png"

export const CartIcon = () => {
  return (
    <Image src={cartIcon} alt="Carrinho" />
  )
}