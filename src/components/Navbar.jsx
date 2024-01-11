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
      const { data } = await axios.post('api/create-customer-portal-session',
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







  // // Hashing Function
  // const hashData = (data) => {
  //   return CryptoJS.SHA256(data).toString(CryptoJS.enc.Hex);
  // };

  // // Function to Send Meta Event
  // const sendMetaEvent = async (metaEventData) => {
  //   const apiUrl = `https://graph.facebook.com/v14.0/${process.env.NEXT_PUBLIC_META_PIXELS_ID}/events?access_token=${process.env.NEXT_PUBLIC_META_PIXELS_ACCESS_TOKEN}`;

  //   try {
  //     const payload = {
  //       data: [metaEventData]
  //     };

  //     const response = await axios.post(apiUrl, payload, {
  //       headers: { 'Content-Type': 'application/json' }
  //     });
  //     console.log('Meta event sent successfully:', response.data);
  //   } catch (error) {
  //     console.error('Error sending Meta event:', error);
  //   }
  // };




  
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

    await sendMetaEvent(viewContentEventData);
    // Redirect logic...
  };













  return (
    <nav className="bg-[#444646] inter-font ">
      <div className="container mx-auto py-4">
        <div className="flex justify-between">
          <div className="flex items-center">
            <a className="flex items-center text-white" href="/">
              <Image src="/logo.png" alt="Bootstrap" className="h-[50px] w-[50px] ml-3" width={100}   height={50}/>
            </a>
          </div>

          {isScreenWidthLessThan600px ? (
            <svg
              className="block h-9 w-9 m-4 cursor-pointer border-2 border-white rounded-full p-1"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              aria-hidden="true"
              onClick={() => setIsNavbarMenuOpen(!isNavbarMenuOpen)}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
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
                <Link className="text-white hover:text-gray-300" href="/programs"   onClick={handleLearnMoreClick}>
                  PROGRAMS
                </Link>
                </li>
             {user || user?.email?(
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
                      <Link className="text-white hover:text-gray-300" href="/api/auth/logout">
                    LOGOUT
                  </Link>
                </li></>
)
:
                (
                   <li className=" btn bg-[#C2FFD3] hover:bg-[#5C5E5EA2] text-black font-bold  px-4  rounded-[30px] mx-3 ">
                      <Link className=" hover:text-gray-300  " href="/api/auth/login" onClick={handleJoinNowClick}>
                        JOIN NOW
                      </Link>
                    </li>

                    



                )}

            </ul>
          )}

          <div
            className={`absolute top-[80px] right-0 left-0 bg-[#1c1c24] z-10 shadow-secondary py-4 gap-3 ${
              !isNavbarMenuOpen ? '-translate-y-[100vh]' : 'translate-y-0 bg-[#444646]  '
            } transition-all duration-700`}
          >
            <ul className="flex justify-end px-4 my-3 font-bold">
              <li className="mx-2">
                <Link className="text-white hover:text-gray-300" href="/about">
                  ABOUT
                </Link>
              </li>
              <li className="mx-2">
                <Link className="text-white hover:text-gray-300" href="/contact">
                  CONTACT
                </Link>
              </li>
              <li className="mx-2">
                <Link className="text-white hover:text-gray-300" href="/programs"   onClick={handleLearnMoreClick}>
                  PROGRAMS
                </Link>
              </li>
              {user || user?.email?(
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
                      <Link className="text-white hover:text-gray-300" href="/api/auth/logout">
                    LOGOUT
                  </Link>
                </li></>
)
:
               ( 

                   <li className=" btn bg-[#C2FFD3] hover:bg-[#5C5E5EA2] text-black font-bold  px-4  rounded-[30px] mx-3 ">
                      <Link className=" hover:text-gray-300  " href="/api/auth/login" onClick={handleJoinNowClick}>
                        JOIN NOW
                      </Link>
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
