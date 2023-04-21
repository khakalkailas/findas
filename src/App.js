import React from 'react';
import Header from './Components/Header';
import Home from './Components/Home';
import Contact from './Components/Contact';
import About from './Components/About';
import Footer from './Components/Footer';
import {BrowserRouter, createBrowserRouter,Route,RouterProvider, Routes} from "react-router-dom";

export default function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/About" element={<About/>}/>
        <Route path="/Contact" element={<Contact/>}/>
      </Routes>
      <Footer/>
        
    </BrowserRouter>
      
    
  )


}


