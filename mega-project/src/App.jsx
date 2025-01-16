import { useEffect, useState } from 'react'
import './App.css'
import { useDispatch } from 'react-redux';
import authService from "./appwrite/auth";
import { login, logout } from './store/authSlice.js'
import { Header, Footer } from './components/index.js';
function App() {

  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    authService.getCurrentUser()
      .then((userData) => {
        if (userData) {
          dispatch(login({ userData }))
        }
        else dispatch(logout({ userData }))
      })
      .finally(() => setLoading(false))
  })

  return !loading ? (
    <div className='min-h-screen flex flex-wrap content-between bg-gray-400'>
      <div className='w-full block'>
        <Header />
        <Footer />
      </div>
    </div>
  ) : null
}

export default App
