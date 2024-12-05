import React, { useState } from 'react'
import VideoPlayer from './VideoPlayer';
import { BsTypeH2 } from 'react-icons/bs';

function VideoBlock() {
    const [playVideo,setPlayVideo]=useState(false);
    const [videoId,setVideoID]=useState("");
    const vidData=[{thumbnail:"https://images.pexels.com/photos/243757/pexels-photo-243757.jpeg?auto=compress&cs=tinysrgb&w=600",
        url:"https://youtu.be/ysynaVNKr0I?si=BvOdQAki8ic5gqbW"
},{thumbnail:"https://images.pexels.com/photos/243757/pexels-photo-243757.jpeg?auto=compress&cs=tinysrgb&w=600",
  url:"https://youtu.be/ysynaVNKr0I?si=BvOdQAki8ic5gqbW"
},{thumbnail:"https://images.pexels.com/photos/243757/pexels-photo-243757.jpeg?auto=compress&cs=tinysrgb&w=600",
  url:"https://youtu.be/ysynaVNKr0I?si=BvOdQAki8ic5gqbW"
},{thumbnail:"https://images.pexels.com/photos/243757/pexels-photo-243757.jpeg?auto=compress&cs=tinysrgb&w=600",
  url:"https://youtu.be/ysynaVNKr0I?si=BvOdQAki8ic5gqbW"
},{thumbnail:"https://images.pexels.com/photos/243757/pexels-photo-243757.jpeg?auto=compress&cs=tinysrgb&w=600",
  url:"https://youtu.be/ysynaVNKr0I?si=BvOdQAki8ic5gqbW"
},{thumbnail:"https://images.pexels.com/photos/243757/pexels-photo-243757.jpeg?auto=compress&cs=tinysrgb&w=600",
  url:"https://youtu.be/ysynaVNKr0I?si=BvOdQAki8ic5gqbW"
}]
const handleClick = (url) => {
    setVideoID(url);
   
   setPlayVideo(true);

}
  return (
   <>
    {
     playVideo ? 
  < VideoPlayer url={videoId} setPlayVideo={setPlayVideo} playVideo={playVideo}/>: 
    <div className='flex w-[100vw] lg:flex-wrap lg:justify-center  flex-col lg:flex-row lg:gap-0 items-center gap-7'> {vidData.map((vid) => (<div className='flex   flex-col justify-between items-center'><img className='lg:h-[40vh] lg:w-[32vw] object-center' src={`${vid.thumbnail}`}  onClick={()=>{handleClick(vid.url)}} /><h2 className='text-white mt-5 font-thin text-xs tracking-widest lg:mt-3 lg:text-sm lg:mb-5'>DJI - RS3 LAUNCH FILM</h2></div>))} </div> 
     }
    </>
  )
}

export default VideoBlock