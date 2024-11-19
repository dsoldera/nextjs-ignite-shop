import { useState } from "react";

export default function Product2 () {
  const [data, setData] = useState();
  
  const fetchData = async () => {
    await new Promise(resolve => setTimeout(resolve, 10000))
    const response = await fetch('https://dummyjson.com/products/2', {
      cache: "no-store"
    })
      const result = await response.json()
      setData(result)
      //console.log(result);
    }
    fetchData()

  return (
    <>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </>
  )

}