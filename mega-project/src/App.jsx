import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <h1 className='bg-black text-white rounded-3xl border-solid'>BLOG APP WITH APPWRITE</h1> 
    </>
  )
}

export default App
