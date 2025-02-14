import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'

function App() {
  const [products, error, loading, search, setSearch] = CustomReactQuery('api/products?search=')

  return (
    <>
      <h1>Product List</h1>
      <input type="text" placeholder="Search..." 
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {loading && <h1>Loading...</h1>}
      {error && <h1>Something Went Wrong</h1>}

      <h2>Number of Products: {products.length}</h2>
    </>
  )
}

export default App

function CustomReactQuery(urlPath: string) {
  const [products, setProducts] = useState([])
  const [error, setError] = useState<boolean>(false)
  const [loading, setLoading] = useState<boolean>(true)
  const [search, setSearch] = useState<string>('')

  useEffect(() => {
    const controller = new AbortController()
    ;(async () => {
      try {
        setLoading(true)
        setError(false)
        const response = await axios.get(urlPath+search, {
          signal: controller.signal
        })
        console.log(response.data)
        setProducts(response.data)
        setLoading(false)
      } catch (error) {
        if(axios.isCancel(error)) {
          console.log('Request Cancelled', error.message)
          return
        }
        setError(true)
        setLoading(false)
      }
    })()

    //cleanup code
    return () => {
      controller.abort()
    }
  }, [urlPath, search])

  return [products, error, loading, search, setSearch] as const
}
