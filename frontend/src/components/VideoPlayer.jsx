import React from 'react'
import { RxCross1 } from "react-icons/rx";

function VideoPlayer({url,setPlayVideo,playVideo}) {
  function convertToEmbedUrl(url) {
    
    const urlPattern = /youtu\.be\/([a-zA-Z0-9_-]+)/;
    const match = url.match(urlPattern);

    if (match && match[1]) {
        const videoId = match[1];
        return `https://www.youtube.com/embed/${videoId}?autoplay=1`;
    } else {
        throw new Error("Invalid YouTube URL format");
    }
}

  return (
    <> <div  className='absolute bg-opacity-90 w-[100vw] min-h-[100vh] bg-[#0E232D] z-50 top-0 left-0 flex flex-col justify-center items-center'>
      <RxCross1 onClick={()=>{setPlayVideo(!playVideo)}} className='text-white absolute top-0 right-0 text-3xl m-3 lg:right-5 lg:top-5 lg:text-4xl'/>   
    <iframe className='lg:w-[70vw] lg:h-[75vh]' width="380" height="200"  allow="autoplay; " src={convertToEmbedUrl(url)}  ></iframe>
    <h2 className='text-white lg:text-xl mt-10 text-2xl font-thin'>SHOWREEL 2024</h2>
    </div>
    </>
  )
}

export default VideoPlayer