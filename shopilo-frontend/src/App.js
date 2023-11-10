import React from 'react';
import './App.css';
import { BrowserRouter, Routes,Route} from "react-router-dom"
import Layout from './components/Layout.js';
import Home from './pages/Home.js'
import About from './pages/About.js'
import Contact from './pages/Contact.js'

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<Home/>}/>
          <Route path='about' element={<About/>}/>
          <Route path='contact' element={<Contact/>}/>
        </Route>
      </Routes>
    </BrowserRouter>


    </>
  );
}

export default App;
