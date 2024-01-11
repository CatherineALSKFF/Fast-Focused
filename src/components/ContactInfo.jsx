import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const ContactInfo = () => {
  const [isVisible, setIsVisible] = useState(false);

  const checkScroll = () => {
    const element = document.querySelector('.contact-info');
    if (element) {
      const elementPosition = element.getBoundingClientRect().top;
      const viewportHeight = window.innerHeight || document.documentElement.clientHeight;
  
      // Change the threshold here
      const visible = elementPosition < viewportHeight * 3 / 4; // 75% of the viewport height
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
           
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="hover-tooltip absolute top-0 left-0 h-9 w-9 text-[#D9D9D9] mt-3 ml-3"
                fill="currentColor"
                viewBox="0 0 24 24"
                style={{ marginTop: '-1rem', marginLeft: '-1rem' }}>
                <path
                  d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
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
