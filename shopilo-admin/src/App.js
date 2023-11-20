import React from 'react';
import './App.css';
import ForgotPassword from './pages/Forgotpassword';
import Login from './pages/Login';
import ResetPassword from './pages/Resetpassword';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import MainLayout from './components/MainLayout';
import Dashboard from './pages/Dashboard';
import Signup from './pages/Signup';
import Orders from './pages/Orders';
import Customers from './pages/Customers'
import Categorylist from './pages/Categorylist'
import Addcat from './pages/Addcat'
import Productlist from './pages/Productlist'
import Addproduct from './pages/Addproduct'
import Addblog from './pages/Addblog'
import Addblogcat from './pages/Addblogcat'
import Bloglist from './pages/Bloglist';
import Blogcatlist from './pages/Blogcatlist';



function App() {
  return (
   <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/forgot-password' element={<ForgotPassword/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/reset-password' element={<ResetPassword/>}/>
        <Route path='/admin' element={<MainLayout/>}>
            <Route index element={<Dashboard/>}/>
            <Route path='orders' element={<Orders/>}/>
            <Route path="customers" element={<Customers />} />
            <Route path="category" element={<Addcat />} />
            <Route path="list-category" element={<Categorylist />} />
            <Route path="product" element={<Addproduct />} />
            <Route path="list-product" element={<Productlist />} />
            <Route path="blog" element={<Addblog />} />
            <Route path="blog-list" element={<Bloglist />} />
            <Route path="blog-category" element={<Addblogcat />} />
            <Route path="blog-category-list" element={<Blogcatlist />} />

        </Route>
      </Routes>
    </BrowserRouter>
   </>
  );
}

export default App;
