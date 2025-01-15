import './App.css'
function App() {

  console.log(import.meta.env.VITE_APPWRITE_URL);
  return (
    <>
     <h1 className='bg-black text-white rounded-3xl border-solid'>BLOG APP WITH APPWRITE</h1> 
    </>
  )
}

export default App
