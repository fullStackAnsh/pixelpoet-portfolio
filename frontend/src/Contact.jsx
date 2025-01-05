import React from 'react'

function Contact() {
  return (
   <>
   <div className='w-full flex flex-col items-center lg:flex-row-reverse '>
    <div className='w-[100%] lg:h-[90vh] lg:w-1/2'><img className='w-[100%] lg:h-[90vh] object-cover' src="/contact.webp" alt="" /></div>
    <div className='w-[100%] flex flex-col items-center  font-medium mt-12 p-9 gap-9 lg:w-1/2 lg:h-[90vh] bg-[#1F353E] lg:mt-0 lg:p-20'><h1 className='font-hero text-white text-4xl lg:text-3xl lg:mt-10 lg:mb-8'>ABOUT</h1>
        <p className='text-white font-second font-extralight text-base '>Reilín Joey is a young dutch-english Filmmaker & Director with a passion for dynamic visuals & authentic storytelling, always aiming for high-end results with an energetic yet minimalistic approach to working on set. </p>
        <p  className='text-white font-second font-extralight text-base'>Born in Amsterdam, Reilín grew up in Berlin. There he started his self taught career as an all-round filmmaker: directing, shooting and editing. He’s now embarked on a journey to travel the world, in search for new stories.</p>
        <p  className='text-white font-second font-extralight text-base'>So far, Reilín has had the pleasure of working with a list of high-end clients such as: Ferrari, Sony, Audi Netherlands, Dji, Apple Music, Google FitBit, Emirates & many more.</p>
    </div>
   </div>
   <div className='w-full bg-[#0E232D] p-6'>
    <h1 className='font-hero text-white  font-semibold text-center text-4xl mt-5 lg:mt-14'>GET IN TOUCH</h1>
    <div className='flex flex-col items-center lg:flex-col-reverse '>
      <div className='w-[90%] text-white  font-second font-extralight text-center text-[1rem] p-6 leading-7 lg:text-2xl lg:leading-loose'>
        <div >EMAIL - INFO@REILINJOEY.COM</div>
        <div>INSTAGRAM - @REILIN</div>
        <div>YOUTUBE - REILIN JOEY</div>
        <div>LINKEDIN - REILIN JOEY</div>
      </div>
      <div className='text-white font-second font-extralight text-center lg:mt-5'>Don't hesitate to reach out,<br />if you'd like to work togetheror <br /> if you have any other questions x</div>
    </div>
   </div>
   </>
  )
}

export default Contact