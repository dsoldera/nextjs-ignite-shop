import { ReactNode } from 'react'

interface AppLayoutProps {
  children: ReactNode
}

export default function Layout ({ children}: AppLayoutProps)  {
  return (
    <>
      <h1>This is Layout</h1>
      { children }
    </>
  )
}