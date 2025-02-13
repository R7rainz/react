import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'

function App() {
  const [products, error, loading] = CustomReactQuery('api/products')

  if (error) {
    return <h1>Something Went Wrong</h1>
  }

  if (loading) {
    return <h1>Loading...</h1>
  }

  return (
    <>
      <h1>Product List</h1>
      <h2>Number of Products: {products.length}</h2>
    </>
  )
}

export default App

function CustomReactQuery(urlPath: string) {
  const [products, setProducts] = useState([])
  const [error, setError] = useState<boolean>(false)
  const [loading, setLoading] = useState<boolean>(true)

  useEffect(() => {
    (async () => {
      try {
        setLoading(true)
        setError(false)
        const response = await axios.get(urlPath)
        console.log(response.data)
        setProducts(response.data)
        setLoading(false)
      } catch (error) {
        setError(true)
        setLoading(false)
      }
    })()
  }, [urlPath])

  return [products, error, loading] as const
}
