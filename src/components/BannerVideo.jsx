"use client";
import { BLOCKED_PAGES } from 'next/dist/shared/lib/constants';
// Import necessary hooks and components
import React, { useState, useEffect } from 'react';

const BannerVideo = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false); // State to handle modal

  useEffect(() => {
    // Load Vimeo API if needed
    const script = document.createElement('script');
    script.src = "https://player.vimeo.com/api/player.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const handlePlayButtonClick = () => {
    setIsModalOpen(true); // Open the modal when play button is clicked
  };

  return (
    <div id="video-wrapper" style={{ position: 'relative', width: '100%', height: '0', paddingBottom: '56.25%', paddingTop: '10%' }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}>
 

<iframe
      id="video-frame"
      title="Fasting Focused Video"
      src="https://player.vimeo.com/video/866793495?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479&autoplay=1&loop=1&controls=0&muted=1"
      // frameBorder="0"
      // allowFullScreen
      allow="autoplay; fullscreen; picture-in-picture"
      preload="auto"
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%'
      }}
    ></iframe>


      <button 
        onClick={handlePlayButtonClick} // Add click handler
        style={{
          // display: isHovered ? 'block' : 'none',
          display: 'block',
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          padding: '10px 20px',
          cursor: 'pointer',
          zIndex: 10,
        }}>
        <img src="/playbtn.svg" alt="Play" className='play-button w-20 h-20' />
      </button>
      <style jsx global>{`
        .play-button:hover {
          transform: scale(1.2);
        }
      `}</style>

      {/* Modal for playing video - conditionally rendered */}
      {isModalOpen && (
        <div 
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            zIndex: 100,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
           
          }}
          onClick={() => setIsModalOpen(false)} // Close modal when overlay is clicked
        >
          <iframe
            src="https://player.vimeo.com/video/929158930?autoplay=1&loop=1" // Replace with your video ID
            frameBorder="0"
            allow="autoplay; fullscreen"
            style={{
              width: '80%',
              height: '80%',
              borderRadius: '20px'
            }}
          ></iframe>
        </div>
      )}
    </div>
  );
};

export default BannerVideo;
































// first V
// import React from 'react'

// const BannerVideo = () => {
//   return (
//     <div id="video-wrapper">
//     <iframe
//       id="video-frame"
//       title="Fasting Focused Video"
//       src="https://player.vimeo.com/video/866793495?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479&autoplay=1&loop=1&controls=0&muted=1"
//       // frameBorder="0"
//       // allowFullScreen
//       allow="autoplay; fullscreen; picture-in-picture"
//       preload="auto"
//     ></iframe>
//   </div>

//   )
// }

// export default BannerVideo