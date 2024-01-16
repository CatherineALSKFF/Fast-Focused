'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const BannerDetails = () => {
  const [fontSize, setFontSize] = useState(20); // Start with a smaller font size for mobile
  const [isAnotherSectionVisible, setIsAnotherSectionVisible] = useState(false);
  const [anotherSectionFontSize, setAnotherSectionFontSize] = useState(13); // Initial font size for 'ANOTHER SECTION'

  const checkScroll = () => {
    const element = document.querySelector('.description-texts');
    if (element) {
      const elementPosition = element.getBoundingClientRect().top;
      const elementHeight = element.getBoundingClientRect().height;
      const viewportHeight = window.innerHeight || document.documentElement.clientHeight;
      
      const elementMiddle = elementPosition + elementHeight / 2;
      if (elementMiddle > viewportHeight / 2) {
        const maxFontSize = 35; // Smaller maximum font size for mobile
        const minFontSize = 20; // Smaller minimum font size for mobile
        const scrollFactor = Math.min(1, (viewportHeight / 2 - elementPosition) / (viewportHeight / 2));
        const dynamicFontSize = minFontSize + (maxFontSize - minFontSize) * scrollFactor;
        setFontSize(dynamicFontSize);
      }
    }

    // 'ANOTHER SECTION' animation logic
    const anotherSection = document.querySelector('.second-section');
    if (anotherSection) {
      const position = anotherSection.getBoundingClientRect().top;
      const viewportHeight = window.innerHeight || document.documentElement.clientHeight;
      const visible = position < viewportHeight * 3 / 4;


       const maxFontSize = 20; // Max font size for 'ANOTHER SECTION'
       const minFontSize = 13; // Min font size for 'ANOTHER SECTION'
       const scrollFactor = Math.min(1, (viewportHeight - position) / viewportHeight);
       const dynamicFontSize = minFontSize + (maxFontSize - minFontSize) * scrollFactor;
      setIsAnotherSectionVisible(visible);

 
      
       setAnotherSectionFontSize(dynamicFontSize);
     }
  };

  useEffect(() => {
    window.addEventListener('scroll', checkScroll);
    checkScroll(); // Initial call to set styles
    return () => {
      window.removeEventListener('scroll', checkScroll);
    };
  }, []);

  return (
    <div className="text-center my-5 py-4 px-5 description-section">
      {/* ... existing content ... */}
      <Link href='/programs'>
         <button type="button" className="inter-font btn bg-[#C2FFD3] hover:bg-[#5C5E5EA2] text-black font-bold py-2 px-4 rounded-[30px] sm:px-10 ">
           JOIN NOW
         </button>
       </Link>

       {/* innovative fitness training," "effective workout plans," or "personalized fitness guidance." */}
       <div className="my-4 mt-[100px] sm:mt-[200px] mb-[150px] sm:mb-[300px] px-4 py-4 description-texts">
         <p className="mb-4 font-extrabold text-[20px] sm:text-[40px]">LEARN THE UNKNOWN METHOD TO GET</p>
         <p className="mb-4 font-extrabold text-[#C2FFD3]" style={{ fontSize: `${fontSize}px`,  }}>LEAN, STRONG AND BIG</p>
         <p className="mb-4 font-extrabold text-[20px] sm:text-[40px]">DRUG-FREE!</p>
</div>


      
      {/* ANOTHER SECTION */}
      <div className={`text-[#CCC] pt-[200px] my-4 mt-[100px] sm:mt-[200px] mb-[150px] sm:mb-[300px] px-4 py-4 description-texts second-section ${isAnotherSectionVisible ? 'visible' : 'fadeInOnScroll'}`}>
        <p className='mb-4 font-extrabold' style={{ fontSize: `${anotherSectionFontSize}px` }}>REAL 1ON1 COACHING UTILIZING THE <i className='text-[#C2FFD3]'>"FASTING FOCUSED METHOD"</i></p>
        <p className='mb-4 font-extrabold' style={{ fontSize: `${anotherSectionFontSize}px` }}>Complete guidance within nutrition & training</p>
      </div>
    </div>
  );
}

export default BannerDetails;


