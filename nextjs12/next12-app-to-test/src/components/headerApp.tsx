import Image from "next/image"
import Link from 'next/link'
import { useShoppingCart } from "use-shopping-cart"
import logoImg from "../assets/logo.svg"
import { CartIcon } from '../components/cartIcon'
import { CartButton } from "../styles/pages/app"

export const HeaderIgniteShop = () => {
  const { handleCartClick } = useShoppingCart();
  return (
    <>
      <Link href={`/`}>
        <Image src={logoImg} alt="Ignite Shop" />
      </Link>
      <CartButton onClick={() => handleCartClick()}>
        <CartIcon />
      </CartButton>
    </>
  )
}