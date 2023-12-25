import React, { useState, useEffect } from 'react';

const AboutDetails = () => {
  const [isVisible, setIsVisible] = useState(false);

  const checkScroll = () => {
    const element = document.querySelector('.about-details');
    if (element) {
      const elementPosition = element.getBoundingClientRect().top;
      const viewportHeight = window.innerHeight || document.documentElement.clientHeight;

      const visible = elementPosition < viewportHeight / 2;
      setIsVisible(visible);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', checkScroll);
    checkScroll(); // Initial call on render
    return () => {
      window.removeEventListener('scroll', checkScroll);
    };
  }, []);

  return (
    <div className="text-center px-3 sm:px-5 description-section mt-[150px] about-details">
      <div className={`my-4 px-2 sm:px-4 description-texts text-[24px] sm:text-[40px] ${isVisible ? 'visible' : 'fadeInOnScroll'}`}>
        <p className="mb-4 font-extrabold">WHO IS THIS FOR?</p>
        <p className="mb-4 font-semibold text-[18px] sm:text-[24px]">
          This is for you who are open-minded and wish to learn. Whether you are a full-blown bodybuilder, or just someone who wants to get in good shape, I will take your dreams head-on!
        </p>
      </div>
    </div>
  );
};

export default AboutDetails;
