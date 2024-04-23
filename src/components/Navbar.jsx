'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import axios from 'axios'


import { useUser } from '@auth0/nextjs-auth0/client';
import CryptoJS from 'crypto-js';
import useSendMetaEvent from '@/hooks/useSendMetaEvents';


const Navbar = () => {
  const [isNavbarMenuOpen, setIsNavbarMenuOpen] = useState(false);
  const [isScreenWidthLessThan600px, setIsScreenWidthLessThan600px] = useState(false);



  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;
      setIsScreenWidthLessThan600px(screenWidth < 600);

      // Close the navbar menu when screen width is greater than 600px
      if (screenWidth >= 600 && isNavbarMenuOpen) {
        setIsNavbarMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Initial check on mount

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [isNavbarMenuOpen]);



  const { user, error, isLoading } = useUser();
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;

  // Use the custom hook
  const { sendMetaEvent, hashData } = useSendMetaEvent();


  // POST request 
  const handleBillingPortalRedirect = async () => {

    try {
      const { data } = await axios.post('api/create-customer-portal-session', {},
        {
          headers: {
            'Content-Type': 'application/json',

          },
        });
      // Check if the response contains the expected data
      if (data && data.url) {
        // Redirect the user to the billing portal URL
        window.location.href = data.url;
      } else {
        console.error('Unexpected response format:', data);
        // Handle unexpected response format
      }
    } catch (error) {
      console.error('Error handling subscription:', error);
      // Handle error as needed
    }
  };





  // LOGIN BTN
  const handleJoinNowClick = async () => {
    // tiktok code
    if (window.ttq) {
      window.ttq.track('ClickButton', {
        contents: [{
          content_id: "join_now",
          content_type: "button",
          content_name: "Join Now"
        }],
        value: 0, // or relevant value
        currency: "USD" // or relevant currency
      });
    }




    // Meta event for Complete Registration
    const hashedEmail = user?.email ? hashData(user.email) : "";
    const hashedFirstName = user?.firstName ? hashData(user.firstName) : "";
    const metaEventData = {
      event_name: "CompleteRegistration",
      event_time: Math.floor(Date.now() / 1000),
      action_source: "website",
      event_source_url: window.location.href,
      user_data: {
        em: [hashedEmail],
        fn: [hashedFirstName]
      }
      // Additional parameters as needed
    };

    await sendMetaEvent(metaEventData);





    // Redirect to login page logic here (if not using Link component)
  };


  const handleLearnMoreClick = async () => {
    if (window.ttq) {
      window.ttq.track('ClickButton', {
        contents: [{
          content_id: "learn_more",
          content_type: "button",
          content_name: "Learn More"
        }],
        value: 0, // or relevant value
        currency: "USD" // or relevant currency
      });
    }



    // Meta event for View Content
    const hashedEmail = user?.email ? hashData(user.email) : "";
    const hashedFirstName = user?.firstName ? hashData(user.firstName) : "";
    const viewContentEventData = {
      event_name: "ViewContent",
      event_time: Math.floor(Date.now() / 1000),
      action_source: "website",
      event_source_url: window.location.href,
      user_data: {
        em: [hashedEmail],
        fn: [hashedFirstName]
      },
      // Additional custom data if needed
    };
    setIsNavbarMenuOpen(false)

    await sendMetaEvent(viewContentEventData);
    // Redirect logic...
  };

  const closeMenu =  () => {
    setIsNavbarMenuOpen(false)
  }



  return (
    <nav className="bg-[#444646] inter-font px-3 ">
      <div className="container mx-auto py-4">
        <div className="flex justify-between">
          <div className="flex items-center">
            <a className="flex items-center text-white" href="/">
              <Image src="/logo.png" alt="Bootstrap" className="h-[50px] w-[50px] ml-3" width={100} height={50} />
            </a>
          </div>

          {isScreenWidthLessThan600px ? (
            <div className="md:hidden flex items-center">
              <button className="outline-none mobile-menu-button" onClick={() => setIsNavbarMenuOpen(!isNavbarMenuOpen)}>
                {isNavbarMenuOpen ?
                  <svg xmlns="http://www.w3.org/2000/svg" fill='white' height="16" width="12" viewBox="0 0 384 512">
                    <path d="M376.6 84.5c11.3-13.6 9.5-33.8-4.1-45.1s-33.8-9.5-45.1 4.1L192 206 56.6 43.5C45.3 29.9 25.1 28.1 11.5 39.4S-3.9 70.9 7.4 84.5L150.3 256 7.4 427.5c-11.3 13.6-9.5 33.8 4.1 45.1s33.8 9.5 45.1-4.1L192 306 327.4 468.5c11.3 13.6 31.5 15.4 45.1 4.1s15.4-31.5 4.1-45.1L233.7 256 376.6 84.5z" /></svg>
                  :
                  <svg xmlns="http://www.w3.org/2000/svg" fill='white' height="16" width="16" viewBox="0 0 512 512"> <path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM64 256c0-17.7 14.3-32 32-32H480c17.7 0 32 14.3 32 32s-14.3 32-32 32H96c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" /></svg>}
              </button>
            </div>
          ) : (
            <ul className="flex justify-end px-4 my-3 font-bold gap-3 ">
              <li className="mx-2">
                <Link className="text-white hover:text-gray-300" href="/about">
                  ABOUT
                </Link>
              </li>
              <li className="mx-3">
                <Link className="text-white hover:text-gray-300" href="/contact">
                  CONTACT
                </Link>
              </li>
              <li className="mx-2">
                <Link className="text-white hover:text-gray-300" href="/programs" onClick={handleLearnMoreClick}>
                  PROGRAMS
                </Link>
              </li>
              {user || user?.email ? (
                <>
                  <form
                    method="POST"
                    action="/create-customer-portal-session"
                    onSubmit={(e) => {
                      e.preventDefault(); // Prevent the default form submission behavior
                      handleBillingPortalRedirect();
                    }}
                  >
                    <button type="submit">MY ACCOUNT</button>
                  </form>


                  <li className="mx-2">
                    <a className="btn bg-[#C2FFD3]  hover:bg-[#B3F0C465] text-black font-bold  px-4  rounded-[30px] mx-3" href="/api/auth/logout">
                      LOGOUT
                    </a>
                  </li></>
              )
                :
                (
                  <li className=" btn bg-[#C2FFD3] hover:bg-[#B3F0C465] text-black font-bold  px-4  rounded-[30px] mx-3 ">
                    <a className="  " href="/api/auth/login?returnTo=/programs" onClick={handleJoinNowClick}>
                      JOIN NOW
                    </a>
                  </li>





                )}

            </ul>
          )}

          <div
            className={`absolute top-[80px] right-0 left-0 bg-[#1c1c24] flex   items-center justify-center  z-10 shadow-secondary py-4 gap-3 ${!isNavbarMenuOpen ? '-translate-y-[100vh]' : 'translate-y-0 bg-[#444646]  '
              } transition-all duration-700`}
          >
                      {/* <div className={`${isNavbarMenuOpen ? 'fixed' : 'hidden'} inset-0 z-10 bg-[#444646] flex flex-col items-center justify-center` }> */}

            <ul className="flex justify-end  my-3 font-bold flex flex-col justify-between ">
              <li className="mx-2">
                <Link className="text-white hover:bg-gray-300 hover:text-black  block py-2 px-4  text-sm" onClick={closeMenu} href="/about">
                  ABOUT
                </Link>
              </li>
              <li className="mx-2">
                <Link className="text-white hover:bg-gray-300 hover:text-black  block py-2 px-4  text-sm"  onClick={closeMenu} href="/contact">
                  CONTACT
                </Link>
              </li>
              <li className="mx-2">
                <Link className="text-white hover:bg-gray-300 hover:text-black  block py-2 px-4  text-sm" href="/programs"  onClick={handleLearnMoreClick}>
                  PROGRAMS
                </Link>
              </li>
              {user || user?.email ? (
                <>
                  <form
                    method="POST"
                    action="/create-customer-portal-session"
                    onSubmit={(e) => {
                      e.preventDefault(); // Prevent the default form submission behavior
                      handleBillingPortalRedirect();
                    }}
                  >
                    <button type="submit">MANAGE</button>
                  </form>


                  <li className="mx-2">
                    <a className="btn bg-[#C2FFD3]  hover:bg-[#B3F0C465] text-black font-bold  px-4  rounded-[30px] mx-3" href="/api/auth/logout">
                      LOGOUT
                    </a>
                  </li></>
              )
                :
                (

                  <li className=" btn bg-[#C2FFD3]  hover:bg-[#B3F0C465] text-black font-bold  px-4  rounded-[30px] mx-3 ">
                    <a className=" hover:text-gray-300  " href="/api/auth/login?returnTo=/programs" onClick={handleJoinNowClick}>
                      JOIN NOW
                    </a>
                  </li>





                )}


            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
