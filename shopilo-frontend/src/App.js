import React from 'react';
import './App.css';
import { BrowserRouter, Routes,Route} from "react-router-dom"
import Layout from './components/Layout.js';
import Home from './pages/Home.js'
import About from './pages/About.js'
import Contact from './pages/Contact.js'
import Store from './pages/Store.js';
import Blogs from './pages/Blogs.js';
import Compare from './pages/Compare.js';
import Wishlist from './pages/Wishlist.js';
import Login from './pages/Login.js';
import Signup from './pages/Signup.js';
import ForgotPassword from './pages/ForgotPassword.js';
import ResetPassword from './pages/ResetPassword.js';
import ProductPage from './pages/ProductPage.js';
import Cart from './pages/Cart.js';
import Checkout from './pages/Checkout.js';
function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<Home/>}/>
          <Route path='about' element={<About/>}/>
          <Route path='contact' element={<Contact/>}/>
          <Route path='store' element={<Store/>}/>
          <Route path='blogs' element={<Blogs/>}/>
          <Route path='compare-product' element={<Compare/>}/>
          <Route path='wishlist' element={<Wishlist/>}/>
          <Route path='compare-product' element={<Compare/>}/>
          <Route path='login' element={<Login/>}/>
          <Route path='forgot-password' element={<ForgotPassword/>}/>
          <Route path='reset-password' element={<ResetPassword/>}/>
          <Route path='signup' element={<Signup/>}/>
          <Route path='store/:id' element={<ProductPage/>}/>
          <Route path='cart' element={<Cart/>}/>
          <Route path='cart/checkout' element={<Checkout/>}/>
        </Route>
      </Routes>
    </BrowserRouter>


    </>
  );
}

export default App;
