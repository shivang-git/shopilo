import React from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
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
            <Route path="list-category" element={<Categorylist />} />
            <Route path="category" element={<Addcat />} />
            <Route path="category/:id" element={<Addcat />} />
            <Route path="list-product" element={<Productlist />} />
            <Route path="product" element={<Addproduct />} />


        </Route>
      </Routes>
    </BrowserRouter>
   </>
  );
}

export default App;
