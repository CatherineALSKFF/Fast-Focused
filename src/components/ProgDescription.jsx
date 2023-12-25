import React, { useState, useEffect } from 'react';

const ProgDescription = () => {
  const [isVisible, setIsVisible] = useState(false);

  const checkScroll = () => {
    const element = document.querySelector('.prog-description');
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

  return (
    <div className={`text-center mt-[100px] text-[#CCC] font-extrabold text-[16px] sm:text-[20px] min-h-[400px] prog-description ${isVisible ? 'visible' : 'fadeInOnScroll'}`}>
      <h1 className='font-extrabold text-[30px] sm:text-[45px] mb-3'>WHICH TO CHOOSE?</h1>
      {/* Improved responsive width and centering */}
      <div className='mx-auto h-auto sm:h-[400px] w-full sm:w-11/12 md:w-8/12 text-[16px] sm:text-[25px] mt-5 p-4 sm:p-7'>
        <p>It depends...</p>
        <p className='my-4 sm:my-6'>do you simply want an in-depth “how to do it exactly” to go and try it yourself with a personal made program?</p>
        <p className='my-4 sm:my-6'>or</p>
        <p>Are you looking to have a coach by your side ever day during the week, guiding you in everything you do?</p>
      </div>
    </div>
  );
};

export default ProgDescription;
