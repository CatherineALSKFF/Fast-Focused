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

  const handleCloseButtonClick = (e) => {
    e.stopPropagation(); // Prevent the modal close event from firing when the close button is clicked
    setIsModalOpen(false); // Close the modal
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
          onClick={() => setIsModalOpen(false)}> {/* Close modal when overlay is clicked */}

          <iframe
            src="https://player.vimeo.com/video/929158930?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479&amp;autoplay=1&amp;loop=1&amp;controls=0" // Replace with your video ID
            frameBorder="0"
            allow="autoplay; fullscreen"
            style={{
              width: '80%',
              height: '80%',
              borderRadius: '20px'
            }}
          ></iframe>

          {/* Close button */}
          <button onClick={handleCloseButtonClick} 
            style={{
              position: 'absolute',
              top: 'calc(10% - 20px)', 
              left: '50%',
              transform: 'translateX(-50%)',
              cursor: 'pointer',
              zIndex: 110, 
              backgroundColor: '#C2FFD3', 
              borderRadius: '30px',
              padding: '10px',
            }}
            className='bg-[#C2FFD3] rounded-[30px] p-3'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="white" width="24" height="24" viewBox="0 0 24 24"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></svg>
          </button>
        </div>
      )}
    </div>
  );
};

    

export default BannerVideo;































