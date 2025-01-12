import type { AppProps } from 'next/app'
import Image from "next/image"
import Link from 'next/link'
import { useRouter } from 'next/router'
import logoImg from "../assets/logo.svg"
import { CartWrapper } from '../components/cartWrapper'
import { HeaderIgniteShop } from '../components/headerApp'
import CartPanelContext from '../contexts/CartPanelContext'
import { globalStyles } from '../styles/globals'
import { Container, Header } from '../styles/pages/app'

globalStyles()

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter()
  const url = router.pathname;
  const customer = pageProps.customerName
    
  return(
    <CartPanelContext>
     <CartWrapper />
    <Container>
      <Header>
        { url !== '/success' ? <HeaderIgniteShop /> : 
        <div style={{'textAlign': 'center', 'flex': '1'}}>
          <Link href={`/`}>
            <Image src={logoImg} alt="Ignite Shop" />
          </Link>
        </div>
        }
      </Header>
      <Component {...pageProps} />
    </Container>
    </CartPanelContext>
  ) 
}

