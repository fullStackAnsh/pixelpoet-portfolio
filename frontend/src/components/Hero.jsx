import React from 'react'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

function Hero() {
    useGSAP(()=>{
        gsap.to('.container .image',{
          scale:1.5,
          duration:2,
          scrollTrigger:{
            trigger:".container",
            scroller:"body",
            start:"top 0%",
            end:"top -50%",
            scrub:true
          }
        })
       })
  return (
    <div className='container w-[100%] h-[30vh] lg:h-[90vh] overflow-hidden relative'>
    <div className='absolute lg:text-[3rem] text-white z-10 font-hero  font-extrabold text-lg tracking-[0.2rem] top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>Devanshu Kumar</div>
    <div className='w-[100%] text-[0.7rem] absolute z-10 text-white font-second lg:top-[55%] top-[60%]  text-center translate-y-[-50%]'>FILMMAKER | EDITOR | CINEMATOGRAPHER</div>
   <video className='' src="https://video.wixstatic.com/video/b6108b_7e9ce484f7784fdcaccb7335e7390e97/1080p/mp4/file.mp4" loop muted autoPlay></video>
   </div>
  )
}

export default Hero