import React, { useEffect } from 'react';
import { usePathname } from 'next/navigation';

const Banner = () => {
  const pathname = usePathname();

  const getTitle = (path) => {
    switch (path) {
      case '/programs':
        return 'PROGRAMS';
      case '/contact':
        return 'CONTACT';
      case '/about':
        return 'ABOUT';
      case '/privacypolicy':
        return 'PRIVACY POLICY';
      case '/termsandconditions':
        return 'TERMS AND CONDITIONS';
      default:
        return 'FASTING FOCUSED';
    }
  };

  // We can log the pathname to check if it's being captured correctly
  useEffect(() => {
    // console.log('Current Path:', pathname);
  }, [pathname]);

  return (
    <div className="flex justify-center items-center">
      <div className="text-black container pb-2 text-center">
        <h1 className="titleheader mt-4 mb-2 text-4xl font-bold text-center">
          {getTitle(pathname)}
        </h1>
        <img src="/logo.png" alt="" className="headerlogo pb-3 w-[100px] mx-auto" />
      </div>
    </div>
  );
};

export default Banner;
