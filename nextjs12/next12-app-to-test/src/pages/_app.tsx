import type { AppProps } from 'next/app'

import logoImg from "../assets/logo.svg"

import Image from "next/image"
import { globalStyles } from '../styles/globals'

globalStyles()

export default function App({ Component, pageProps }: AppProps) {
    return(
      <div>
        <div>
        <Image src={logoImg} alt="" />
        </div>

        <Component {...pageProps} />
      </div>
    ) 
      
}

