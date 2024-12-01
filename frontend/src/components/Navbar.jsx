import React from 'react'
import { FaFilm } from "react-icons/fa6";
import { FaPhotoFilm } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { BsCameraReelsFill } from "react-icons/bs";
import { IoLogIn } from "react-icons/io5";
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

function Navbar() {
    useGSAP(()=>{
        gsap.from('.navLinks',{
            y:15,
            opacity:0,
            stagger:0.2,
            delay:0.5,
            duration:2
        })
    })
  return (
    <>
    <div className='bg-[#0E232D] font-second w-[100vw] text-white font-extralight flex text-[0.7rem] h-[8vh] justify-around    lg:text-[1rem] lg:h-[9vh] items-center '>
      <div className='navLinks '>FILMS</div>
      <div  className='navLinks'>PHOTOS</div>
      <div  className='navLinks'>CONTACT</div>
      <div  className='navLinks'>STORE</div>
      <div  className='navLinks'>LOGIN</div>
    </div>
    </>
  )
}

export default Navbar