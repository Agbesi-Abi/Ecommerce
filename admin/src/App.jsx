import React, { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import Sidebar from './Components/Sidebar'
import { Routes, Route } from 'react-router-dom'
import List from './pages/List'
import Orders from './pages/Orders'
import Add from './pages/add'
import Login from './Components/login'
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const backendUrl = import.meta.env.VITE_BACKEND_URL

const App = () => {

  const[token,setToken] = useState(localStorage.getItem('token')?localStorage.getItem('token'):'');

  useEffect(()=>{
    localStorage.setItem('token',token)

  },[token])


  return (
    <div className='bg-gray-50 min-h-screen'>
      <ToastContainer />
      {token ===""
      ? <Login setToken={setToken}/> 
    :   <>
    <Navbar setToken={setToken}/>
    <hr />
    <div className='flex w-full'>

      <Sidebar/>
      <div className='w-[70%] mx-auto ml-[max(5vw,25px)] my-8 text-gray-600 text-base'>
        <Routes>
          <Route path='/add' element={<Add token={token}/>} />
          <Route path='/add' element={<List token={token}/>} />
          <Route path='/add' element={<Orders token={token}/>} />
        </Routes>

      </div>

    </div>
    </>
    }
    


    </div>
  )
}

export default App
