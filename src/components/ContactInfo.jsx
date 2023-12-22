import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const ContactInfo = () => {
  const [isVisible, setIsVisible] = useState(false);

  const checkScroll = () => {
    const element = document.querySelector('.contact-info');
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
    <div className={`font-bold text-[25px] flex flex-col items-center justify-center text-center my-[100px] relative contact-info ${isVisible ? 'visible' : 'fadeInOnScroll'}`}>
      <div className='flex flex-col md:flex-row items-center justify-center w-full'>
        <div className='relative'>
          <Link href="https://www.instagram.com/ChristianEverdeen" className='hover-trigger'>
            <img src="/insta-contact.png" className='rounded-[30px] w-[300px] h-[300px] object-cover cursor-pointer' alt="Instagram" />
            <span className="hover-tooltip">@ChristianEverdeen</span>
            <svg
            xmlns="http://www.w3.org/2000/svg"
            className="absolute top-0 left-0 h-7 w-7 text-[#D9D9D9] mt-3 ml-3"
            fill="currentColor"
            viewBox="0 0 24 24"
            style={{ marginTop: '-1rem', marginLeft: '-1rem' }}
          >
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 ... (rest of the path data)" />
          </svg>
          </Link>
         
        </div>
        <div className='mt-4 md:mt-0 md:ml-4 mx-4 w-[300px] h-[300px] text-[40px]'>
          <p>OR REACH OUT TO ME PERSONALLY ON MY INSTAGRAM</p>
        </div>
      </div>
    </div>
  );
}

export default ContactInfo;
