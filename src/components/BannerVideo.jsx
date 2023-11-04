import React from 'react'

const BannerVideo = () => {
  return (
    <div className="relative" id='video-container'>
    <iframe
    id='video-frame'
      title="vimeo-player"
      src="https://player.vimeo.com/video/866793495?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479&autoplay=1&loop=1&controls=0&muted=1"
     
      frameBorder="1"
      position="absolute"
      top="0"
      left="0"
      width="100%"
      height="100%"
      allow="autoplay; fullscreen; picture-in-picture"
    ></iframe>
  </div>
  

  )
}

export default BannerVideo