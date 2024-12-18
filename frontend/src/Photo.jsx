import React from 'react'


function Photo() {
    const images=[{url:"./src/assets/car.webp",name:"Ferrari Challenge"},
        {url:"./src/assets/women.webp",name:"Ferrari Challenge"},
        {url:"./src/assets/3rd.webp",name:"Ferrari Challenge"},
        {url:"./src/assets/4th.webp",name:"Ferrari Challenge"},
        {url:"./src/assets/5th.webp",name:"Ferrari Challenge"},
        {url:"./src/assets/6th.webp",name:"Ferrari Challenge"}
    ]
  return (
    <><div>
    {images.map((image)=> <img src={`${image.url}`} />)}
    </div>
    </>
  )
}

export default Photo