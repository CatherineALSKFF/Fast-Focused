'use client';
import React, { useState, useEffect } from 'react';

const BannerDescription = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [imageSrc, setImageSrc] = useState('/before-pic.jpeg');

  const checkScroll = () => {
    const element = document.querySelector('.banner-description');
    // Check if the element exists before trying to access its properties
    if (element) {
      const elementPosition = element.getBoundingClientRect().top;
      const viewportHeight = window.innerHeight || document.documentElement.clientHeight;
  
      const visible = elementPosition < viewportHeight / 2;
      setIsVisible(visible);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', checkScroll);
    checkScroll(); // Call on initial render
    return () => {
      window.removeEventListener('scroll', checkScroll);
    };
  }, []);

  useEffect(() => {
    let timeout;
    if (isVisible) {
      // Set a timeout to change the image after 2 seconds
      timeout = setTimeout(() => {
        setImageSrc('/after-pic.JPG');
      }, 2000);
    }
    return () => clearTimeout(timeout); // Clear the timeout if the component unmounts
  }, [isVisible]);

  return (
    <div className="container mx-auto my-4 flex flex-col md:flex-row justify-center items-center banner-description">
      {/* Image Container with Negative Margin */}
      <div className={`flex justify-center items-center w-full md:w-1/2 md:-mx-2 ${isVisible ? 'visible' : 'fadeInOnScroll'}`}>
        <img
          src={imageSrc}
          alt="Transformation"
          className="w-[350px] max-w-full p-3 transition-all duration-500" // Added transition for smooth image change
        />
      </div>

      {/* Text Container with Negative Margin */}
      <div className={`flex justify-center items-center w-full md:w-1/2 md:-mx-2 ${isVisible ? 'visible' : 'fadeInOnScroll'}`}>
        <ul className="font-semibold text-[56px] w-[350px] md:w-auto p-3 text-center">
          <li>NO MORE</li>
          <li className="mt-3">“BULKING AND CUTTING”</li>
        </ul>
      </div>
    </div>
  );
};

export default BannerDescription;



















// import React from 'react';

// const BannerDescription = () => {
//   return (
//     <div className="container mx-auto my-4 flex flex-col md:flex-row justify-center items-center">
//       {/* Image Container with Negative Margin */}
//       <div className="flex justify-center items-center w-full md:w-1/2 md:-mx-2 ">
//         <img
//           src="/fillout.jpeg"
//           alt="Fillout"
//           className="w-[350px] max-w-full p-3"
//         />
//       </div>

//       {/* Text Container with Negative Margin */}
//       <div className="flex justify-center items-center w-full md:w-1/2 md:-mx-2 ">
//         <ul className="font-semibold text-[56px] w-[350px] md:w-auto p-3 text-center">
//           <li>NO MORE</li>
//           <li className="mt-3">“BULKING AND CUTTING”</li>
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default BannerDescription;
