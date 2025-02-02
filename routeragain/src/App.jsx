import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <h1 className='text-bold text-3xl bg-red-500 text-cyan-300'>HI THERE HOW ARE YOU DOING ?</h1>
      </div>
    </>
  )
}

export default App
