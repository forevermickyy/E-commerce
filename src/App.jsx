import React from 'react'
import Footer from './components/Footer'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import TopNav from './components/TopNav'
import Home from './Pages/Home'
import Products from './Pages/Products'
import Contact from './Pages/Contact'
import Auth from './Pages/Auth'

const App = () => {
  return (
    
      <main className='overflow-x-hidden text-gray-900'> 
        <BrowserRouter>
        <TopNav/>
        <Navbar/>
        <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/products" element={<Products/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/auth" element={<Auth/>}/>
        </Routes>
        <Footer />
        </BrowserRouter>
        
      </main>
    
  )
}

export default App