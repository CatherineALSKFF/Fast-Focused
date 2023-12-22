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
    <div className={`text-center mt-[100px] text-[#CCC] font-extrabold text-[20px] min-h-[400px] prog-description ${isVisible ? 'visible' : 'fadeInOnScroll'}`}>
      <h1 className='font-extrabold text-[45px] mb-3'>WHICH TO CHOOSE</h1>
      <div className='h-[400px] w-[800px] bg-[#C2FFD3] rounded-[30px] mt-5'></div>
    </div>
  );
};

export default ProgDescription;
