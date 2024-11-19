import { useState } from "react";

export default function Product1 () {
  const [data, setData] = useState();
  // https://api.github.com/users/dsoldera/repos
  
  // useEffect(() => {
    const fetchData = async () => {
      await new Promise(resolve => setTimeout(resolve, 2000))
      const response = await fetch('https://dummyjson.com/products/1', {
        cache: "no-store"
      })
      const result = await response.json()
      setData(result)
      //console.log(result);
    }
    fetchData()
  // }, [])

  return (
    <>
      <h1 className="text-1xl font-bold text-red-600">This Github Data requested from Client Side Render</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </>
  )

}