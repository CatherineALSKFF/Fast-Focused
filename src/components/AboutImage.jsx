import React, { useState, useEffect } from 'react';

const AboutImage = () => {
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
    checkScroll(); // Call on initial render
    return () => {
      window.removeEventListener('scroll', checkScroll);
    };
  }, []);

  return (
    <div className="mt-[100px] p-3 flex-shrink-0 align-center about-image">
      <img
        src="/fillout.jpeg"
        alt="Fillout"
        className={`w-[800px] rounded-[30px] h-[250px] max-w-full p-3 ${isVisible ? 'visible' : 'fadeInOnScroll'}`}
      />
    </div>
  );
};

export default AboutImage;

