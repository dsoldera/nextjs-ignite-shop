import { ReactNode } from 'react'
import { CartProvider } from 'use-shopping-cart'

export default function CartPanelContext ({children}: { children: ReactNode } ) {

  const stripeKey = String(process.env.STRIPE_PUBLIC_KEY)

  return(
    <CartProvider
      cartMode="checkout-session"
      stripe={stripeKey}
      currency="BRL"
      shouldPersist={true}
      loading={<p aria-live="polite">Loading... </p>}
    >
      {children}
    </CartProvider>
  )
}