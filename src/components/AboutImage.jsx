import React, { useState, useEffect } from 'react';

const AboutImage = () => {
  const firstImage = '/aboutpic1.PNG';
  const secondImage = '/aboutpic2.PNG';
  const [isVisible, setIsVisible] = useState(false);

  const checkScroll = () => {
    const element = document.querySelector('.about-image');
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
    return () => window.removeEventListener('scroll', checkScroll);
  }, []);

  return (
    <div className="mt-[100px] p-3 flex justify-center align-center about-image">
      <img
        src={firstImage}
        alt="First"
        className={`rounded-[30px] shadow-lg transform transition duration-500 ease-in-out ${isVisible ? 'scale-100' : 'scale-0'}`}
        style={{ width: '100%', maxWidth: '400px', marginRight: '20px' }}
      />
      <img
        src={secondImage}
        alt="Second"
        className={`rounded-[30px] shadow-lg transform transition duration-500 ease-in-out ${isVisible ? 'scale-100' : 'scale-0'}`}
        style={{ width: '100%', maxWidth: '400px' }}
      />
    </div>
  );
};

export default AboutImage;




