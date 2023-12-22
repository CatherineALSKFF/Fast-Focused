'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const BannerDetails = () => {
  const [isVisible, setIsVisible] = useState(false);

  const checkScroll = () => {
    const element = document.querySelector('.description-texts');
    if (element) {
    const elementPosition = element.getBoundingClientRect().top;
    const viewportHeight = window.innerHeight || document.documentElement.clientHeight;

    const visible = elementPosition < viewportHeight / 2; // Adjust if necessary
    setIsVisible(visible);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', checkScroll);
    checkScroll(); // Call on initial render too
    return () => {
      window.removeEventListener('scroll', checkScroll);
    };
  }, []);

  return (
    <div className="text-center my-5 py-4 px-5 description-section">
      <Link href='/programs'>
        <button type="button" className="btn bg-[#C2FFD3] hover:bg-[#5C5E5EA2] text-black font-bold py-2 px-4 rounded-[30px] px-10 ">
          JOIN NOW
        </button>
      </Link>
      <div className={`my-4 mt-[200px] mb-[300px] px-4 py-4 description-texts text-[30px] ${isVisible ? 'visible' : 'fadeInOnScroll'}`}>
        <p className="mb-4 font-extrabold">LEARN THE UNKNOWN METHOD TO GET</p>
        <p className="mb-4 font-extrabold text-[#C2FFD3]">LEAN, STRONG AND BIG</p>
        <p className="mb-4 font-extrabold">DRUG-FREE!</p>
      </div>
    </div>
  );
}

export default BannerDetails;








