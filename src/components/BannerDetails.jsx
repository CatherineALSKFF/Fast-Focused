'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const BannerDetails = () => {
  const [fontSize, setFontSize] = useState(35); // Initialize font size to 35

  const checkScroll = () => {
    const element = document.querySelector('.description-texts');
    if (element) {
      const elementPosition = element.getBoundingClientRect().top;
      const elementHeight = element.getBoundingClientRect().height;
      const viewportHeight = window.innerHeight || document.documentElement.clientHeight;

      // Calculate the middle position of the element
      const elementMiddle = elementPosition + elementHeight / 2;

      // Adjust font size only until the element's middle reaches the middle of the viewport
      if (elementMiddle > viewportHeight / 2) {
        const maxFontSize = 180;
        const minFontSize = 40;
        // Normalize scroll position between 0 and 1
        const scrollFactor = Math.min(1, (viewportHeight / 2 - elementPosition) / (viewportHeight / 2));
        const dynamicFontSize = minFontSize + (maxFontSize - minFontSize) * scrollFactor;
        setFontSize(dynamicFontSize);
      }
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
      <div className="my-4 mt-[200px] mb-[300px] px-4 py-4 description-texts ">
        <p className="mb-4 font-extrabold text-[40px]">LEARN THE UNKNOWN METHOD TO GET</p>
        <p className="mb-4 font-extrabold text-[#C2FFD3]" style={{ fontSize: `${fontSize}px` }}>LEAN, STRONG AND BIG</p>
        <p className="mb-4 font-extrabold text-[40px]">DRUG-FREE!</p>
      </div>
    </div>
  );
}

export default BannerDetails;
