
import Product1 from '@/components/Product1';
import dynamic from 'next/dynamic';
import { Suspense } from 'react';
 
const DynamicProduct = dynamic(() => import('@/components/product2'), {
  loading: () => <div className='text-2xl font-black bg-black'>Loading...</div>,
})

export default function Dani () {
  return (
    <>
     <h1>Dani Page</h1>
     <Suspense fallback={<div className='text-3xl'>Loading Products</div>}>
      <DynamicProduct />
     </Suspense>
    <Product1 />
    </>
  )

}