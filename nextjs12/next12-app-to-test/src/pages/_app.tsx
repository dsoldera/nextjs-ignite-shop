import type { AppProps } from 'next/app'

import logoImg from "../assets/logo.svg"

import Link from 'next/link'
import { useState } from 'react'
import { CartModal } from '../components/cartModal'
import CartPanelContext from '../contexts/CartPanelContext'
import { globalStyles } from '../styles/globals'
import { CartButton, CloseButton, Container, Header } from '../styles/pages/app'

import Image from "next/image"
import { X } from 'phosphor-react'
import { CartIcon } from '../components/cartIcon'

globalStyles()

export default function App({ Component, pageProps }: AppProps) {
  const [showCartModal, setShowCartModal] = useState<boolean>(false)

  const customer = pageProps.customerName
  console.log('customer', customer)
    
  return(
    <CartPanelContext>
      { showCartModal && <CartModal />}
      { showCartModal && 
        <CloseButton className='close-button' onClick={() => setShowCartModal(false)}>
          <X size={24} weight={'bold'} color={'#fff'}/>
        </CloseButton>
      }
    <Container>
      <Header>
        <Link href={`/`}>
          <Image src={logoImg} alt="Ignite Shop" />
        </Link>
        <CartButton onClick={() => setShowCartModal(true)}>
          <CartIcon />
        </CartButton>
      </Header>
      <Component {...pageProps} />
    </Container>
    </CartPanelContext>
  ) 
}

