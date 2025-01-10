import Header from '/home/rainz/Documents/react/React-router/src/components/Header/Header.jsx'
import Footer from '/home/rainz/Documents/react/React-router/src/components/Footer/Footer.jsx'
import { Outlet } from 'react-router-dom'
function Layout() {
  return (
   <>
    <Header />
    <Outlet />
    <Footer />
   </> 
  )
}

export default Layout