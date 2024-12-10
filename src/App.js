import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from './components/Home';
import { Login } from './components/login/login';
import { Register } from './components/register/register';
import { MenCategory } from './components/men-category/men-category';
import { WomenCategory } from './components/women-category/women-category';
import { Electronics } from './components/electronics/electronics';
import { Jewelery } from './components/jewelery/jewelery';
import { Cart } from './components/cart/cart';
import React, { useEffect, useState } from "react";


function App() {
  return (
   
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/Login' element={<Login/>}/>
          <Route path='/Register' element={<Register/>}/>
          <Route path='/Men' element={<MenCategory/>}/>
          <Route path='/Women' element={<WomenCategory/>}/>
          <Route path='/Electronics' element={<Electronics/>}/>
          <Route path='/Jewelery' element={<Jewelery/>}/>
          <Route path='/Cart' element={<Cart/>}/>

          
        </Routes>
  
      </BrowserRouter>
     

    </div>
  );
}

export default App;
