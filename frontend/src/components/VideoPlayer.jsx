import React from 'react'

function VideoPlayer({url}) {
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
    <> <div className='absolute bg-opacity-90 w-[100vw] min-h-[100vh] bg-[#0E232D] z-50 top-0 left-0 flex justify-center items-center'>
    <iframe  classname="  " width="560" height="315" allow="autoplay; " src={convertToEmbedUrl(url)}  ></iframe>
    </div>
    </>
  )
}

export default VideoPlayer