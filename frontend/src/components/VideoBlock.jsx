import React, { useState } from 'react'
import VideoPlayer from './VideoPlayer';

function VideoBlock() {
    const [playVideo,setPlayVideo]=useState(false);
    const [videoId,setVideoID]=useState("");
    const vidData=[{thumbnail:"https://images.pexels.com/photos/1701202/pexels-photo-1701202.jpeg?auto=compress&cs=tinysrgb&w=600",
        url:"https://youtu.be/ysynaVNKr0I?si=BvOdQAki8ic5gqbW"
},{thumbnail:"https://images.pexels.com/photos/1701202/pexels-photo-1701202.jpeg?auto=compress&cs=tinysrgb&w=600",
  url:"https://youtu.be/ysynaVNKr0I?si=BvOdQAki8ic5gqbW"
},{thumbnail:"https://images.pexels.com/photos/1701202/pexels-photo-1701202.jpeg?auto=compress&cs=tinysrgb&w=600",
  url:"https://youtu.be/ysynaVNKr0I?si=BvOdQAki8ic5gqbW"
},{thumbnail:"https://images.pexels.com/photos/1701202/pexels-photo-1701202.jpeg?auto=compress&cs=tinysrgb&w=600",
  url:"https://youtu.be/ysynaVNKr0I?si=BvOdQAki8ic5gqbW"
},{thumbnail:"https://images.pexels.com/photos/1701202/pexels-photo-1701202.jpeg?auto=compress&cs=tinysrgb&w=600",
  url:"https://youtu.be/ysynaVNKr0I?si=BvOdQAki8ic5gqbW"
},{thumbnail:"https://images.pexels.com/photos/1701202/pexels-photo-1701202.jpeg?auto=compress&cs=tinysrgb&w=600",
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
  < VideoPlayer url={videoId} />: 
     vidData.map((vid) => (<img src={`${vid.thumbnail}`}  onClick={()=>{handleClick(vid.url)}} />)) 
     }
    </>
  )
}

export default VideoBlock