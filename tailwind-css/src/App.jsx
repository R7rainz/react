import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css';
import Card from './components/Cards'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='bg-red-400 text-black p-4 rounded-xl mb-10'>Tailwind Test</h1>
      <Card username = "hi there" btnText='Visit me '/>
      <Card username = "bro wtf" btnText='real madrid'/>
      
    </>
  )
}

export default App
