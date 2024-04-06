'use client';
import React, { useState, useEffect } from 'react';

const BannerDescription = () => {
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
    <div className="container mx-auto my-4 grid grid-cols-1 md:grid-cols-2 gap-2 justify-center items-center banner-description">
      <div className={`flex justify-center items-center transition-all duration-500 ease-in-out ${isVisible ? 'visible' : 'fadeInOnScroll'}`}>
        <img
          src={imageSrc}
          alt="Transformation"
          className="rounded-[20px] w-[350px] max-w-full p-3 transition-opacity duration-500 ease-in-out"
          style={{ opacity: isVisible ? 1 : 0 }} // Fade transition
        />
      </div>

      <div className={`flex justify-center items-center transition-all duration-500 ease-in-out ${isVisible ? 'visible' : 'fadeInOnScroll'} text-[#CCC]`}>
        <ul className={`font-semibold text-[56px] p-3 text-center transition-transform duration-500 ${textAnimation} text-[#CCC]`}>
          <li>{textContent[0]}</li>
          <li className="mt-3">{textContent[1]}</li>
        </ul>
      </div>
    </div>
  );
};

export default BannerDescription;















// import React, { useState, useEffect } from 'react';

// const BannerDescription = () => {
//   const [isVisible, setIsVisible] = useState(false);
//   const [imageSrc, setImageSrc] = useState('/before-pic.jpeg');
//   const [textContent, setTextContent] = useState(["NO MORE", "“BULKING AND CUTTING”"]);

//   const checkScroll = () => {
//     const element = document.querySelector('.banner-description');
//     if (element) {
//       const elementPosition = element.getBoundingClientRect().top;
//       const viewportHeight = window.innerHeight || document.documentElement.clientHeight;
//       const visible = elementPosition < viewportHeight / 2;
//       setIsVisible(visible);
//     }
//   };

//   useEffect(() => {
//     window.addEventListener('scroll', checkScroll);
//     checkScroll();
//     return () => {
//       window.removeEventListener('scroll', checkScroll);
//     };
//   }, []);

//   useEffect(() => {
//     let timeout;
//     if (isVisible) {
//       timeout = setTimeout(() => {
//         setImageSrc('/after-pic.JPG');
//         setTextContent(["LEARN", "'INFINITY BULKING'"]);
//       }, 2000);
//     }
//     return () => clearTimeout(timeout);
//   }, [isVisible]);

//   return (
//     <div className="container mx-auto my-4 grid grid-cols-1 md:grid-cols-2 gap-4 justify-center items-center banner-description">
//       <div className={`flex justify-center items-center transition-all duration-500 ${isVisible ? 'visible' : 'fadeInOnScroll'}`}>
//         <img
//           src={imageSrc}
//           alt="Transformation"
//           className="rounded-[20px] w-[350px] max-w-full p-3"
//         />
//       </div>

//       <div className={`flex justify-center items-center transition-all duration-500 ${isVisible ? 'visible' : 'fadeInOnScroll'}`}>
//         <ul className="font-semibold text-[56px] p-3 text-center">
//           <li>{textContent[0]}</li>
//           <li className="mt-3">{textContent[1]}</li>
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default BannerDescription;




