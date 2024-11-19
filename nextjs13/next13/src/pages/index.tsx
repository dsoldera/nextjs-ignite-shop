//import { Inter } from 'next/font/google'
//const inter = Inter({ subsets: ['latin'] })

import Link from "next/link";


export default function Home() {

  return (
    <>
    <h1 className="text-3xl font-bold">Hellow Next 13</h1>
    <Link href='/dani'>LInk to Dani</Link>
    </>
  )
}
