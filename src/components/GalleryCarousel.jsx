"use client";
import React, { useState, useEffect } from 'react';

const GalleryCarousel = () => {
  // CAROUSEL
  const scrollRef = React.useRef(null);

  const scroll = (direction) => {
    const { current } = scrollRef;
    const scrollAmount = 400; // Adjust as needed

    if (direction === 'left') {
      current.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    } else {
      current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };




  // TEXT
  const [isVisible, setIsVisible] = useState(false);
  const [imageSrc, setImageSrc] = useState('/before-pic.jpeg');
  const [textContent, setTextContent] = useState(["NO MORE", "“BULKING AND CUTTING”"]);
  const [textAnimation, setTextAnimation] = useState('');

  const checkScroll = () => {
    const element = document.querySelector('.banner-description');
    if (element) {
      const elementPosition = element.getBoundingClientRect().top;
      const viewportHeight = window.innerHeight || document.documentElement.clientHeight;
      const visible = elementPosition < viewportHeight / 2;
      setIsVisible(visible);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', checkScroll);
    checkScroll();
    return () => {
      window.removeEventListener('scroll', checkScroll);
    };
  }, []);

  useEffect(() => {
    let imageTimeout, textTimeout;
    if (isVisible) {
      imageTimeout = setTimeout(() => {
        setImageSrc('/after-pic.JPG');
      }, 2000);
      textTimeout = setTimeout(() => {
        setTextContent(["LEARN", "“INFINITY BULKING”"]);
        setTextAnimation('slide-right'); // Trigger sliding animation
      }, 2000);
    }
    return () => {
      clearTimeout(imageTimeout);
      clearTimeout(textTimeout);
    };
  }, [isVisible]);




  return (
    <div className="container mx-auto my-4  gap-2 justify-center items-center banner-description">
      {/* TEXT */}
      <div className={`mb-3 flex justify-center items-center transition-all duration-500 ease-in-out ${isVisible ? 'visible' : 'fadeInOnScroll'} text-[#CCC]`}>
        <ul className={`font-semibold text-[56px] p-3 text-center transition-transform duration-500 ${textAnimation} text-[#CCC]`}>
          <li>{textContent[0]}</li>
          <li className="mt-3">{textContent[1]}</li>
        </ul>
      </div>




      <div className='gallery px-6 '>

        {/* CAROUSEL */}
        <div className="gallery-images">
          <div className="images-container" ref={scrollRef} alt='before and after pictures'>
            {['/n-1.png', '/n-2.png', '/n-3.png', '/n-4.png', '/n-5.png', '/n-6.png'].map((image, index) => (
              <div className="image-card" key={`gallery_image-${index + 1}`}>
                <img src={image} alt={`gallery_image-${index + 1}`} />
              </div>
            ))}
          </div>

          <div className="images-navigation">
            <button onClick={() => scroll('left')} className='arrow-icon flex items-center justify-center p-2 rounded-full bg-[#C2FFD3] hover:bg-[#5C5E5EA2]'>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill='white' className='rounded-full'><path d="M15.293 3.293 6.586 12l8.707 8.707 1.414-1.414L9.414 12l7.293-7.293-1.414-1.414z" /></svg>
            </button>
            <button onClick={() => scroll('right')} className='arrow-icon flex items-center justify-center p-2 rounded-full bg-[#C2FFD3] hover:bg-[#5C5E5EA2]'>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill='white' className='rounded-full'><path d="M7.293 4.707 14.586 12l-7.293 7.293 1.414 1.414L17.414 12 8.707 3.293 7.293 4.707z" /></svg>
            </button>
          </div>


        </div>
      </div>
    </div>
  );
}

export default GalleryCarousel;
