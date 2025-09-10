import './App.css'
import Navbar from './Navbar'
import Footer from './Footer'
import Men from './Men'
import Copyright from './Copyright'
import { Routes, Route } from 'react-router-dom'
import Home from './Home'
import Women from './Women'
import Kids from './Kids'
import Accessories from './Accessories/Accessories'
import Bags from './Bags/Bags'
import Signin from './Sign/Signin'
import MoreSection from './Women-component/More'
import Wishlist from "./Wishlist"; 
import { WishlistProvider } from "./WishlistContext";
import Cart from './Cart'
import Checkout from "./Checkout";
function App() {
  return (
    <WishlistProvider>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/men' element={<Men />} />
        <Route path='/women' element={<Women />} />
        <Route path='/kids' element={<Kids />} />
        <Route path='/accessories' element={<Accessories />} />
        <Route path='/bags' element={<Bags />} />
        <Route path='/signin' element={<Signin />} />
        <Route path='/more' element={<MoreSection />} />
        <Route path='/wishlist' element={<Wishlist />} />
        <Route path='/cart' element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
      </Routes>
      <Footer />
      <Copyright/> 
    </WishlistProvider>
  )
}

export default App
