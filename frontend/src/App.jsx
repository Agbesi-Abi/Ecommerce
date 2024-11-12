import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/home'
import Collection from './pages/collection'
import About from './pages/about'
import Cart from './pages/cart'
import Contact from './pages/contact'
import Login from './pages/login'
import Orders from './pages/Orders'
import PlaceOrder from './pages/PlaceOrder'
import Product from './pages/product'
import Navbar from './components/navbar'
import Footer from './components/Footer'
import SearchBar from './components/SearchBar'
import Signup from './pages/signup';
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios'

const App = () => {
  return (
    <div className='px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]'>
      <ToastContainer />
      <Navbar />
      <SearchBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/collection' element={<Collection />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/login' element={<Login />} />
        <Route path='/Signup' element={<Signup />} />
        <Route path='/place-order' element={<PlaceOrder />} />
        <Route path='/product/:productId' element={<Product />} />
        <Route path='/orders' element={<Orders />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/about' element={<About />} />
      </Routes>
      <Footer/>
    </div>
  )
}

export default App
