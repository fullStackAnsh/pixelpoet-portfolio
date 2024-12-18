import React, { useState } from 'react'
import Navbar from './components/Navbar'
import Home from './Home';
import Photo from './Photo';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Route,Routes } from 'react-router';
gsap.registerPlugin(ScrollTrigger);
function App() {
   
  return (
      
      <div className='overflow-hidden w-[100vw] min-h-[100vh] bg-[#0E232D]'>
      <Navbar />
     <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/photos' element={<Photo />} />
     </Routes>
      </div>
      
    
  )
}

export default App