
import { useUser } from '@auth0/nextjs-auth0/client';
import Link from 'next/link';
import React from 'react';
import axios from 'axios';
import { IoCheckmarkCircleSharp } from "react-icons/io5";
import useSendMetaEvent from '@/hooks/useSendMetaEvents';

const ProgListings = ({ price }) => {
  const { sendMetaEvent, hashData } = useSendMetaEvent();
  const { user, error, isLoading } = useUser();
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;




  const DynamicDescription = (price) => {
    // console.log(price.nickname);

    if (price.nickname === "Standard") {
      return (
        <div className="text-[#B7B7B7] font-bold text-center font-semibold ">
          {/* Repeated h2 elements are replaced by a single map for cleaner code */}
          {["10 WEEKS TRAINING AND DIET PROGRAM  ", "FULL GUIDANCE IN UTILIZING THE FASTING FOCUSED METHOD", "TAILORED TO YOUR GOALS (WEIGHTLOSS, MUSCLEGAIN)"].map((item, index) => (
                  <h2 key={index} className='text-sm sm:text-m text-gray-500 mt-3 '>{item}</h2>
          ))}
        </div>
      );
    } else {
      return (
        <div className="text-[#B7B7B7] font-bold text-center font-semibold">
          <span></span>
          {["1 on 1 coaching with me", "Fluid customized program tailored to you specifically", "Fluid customized meal plan", "Daily consulting via <span style='color:#C2FFD3;'>WhatsApp</span> to follow progress/make alterations"].map((item, index) => (
            <h2 key={index} className='text-sm sm:text-m text-light mt-3' dangerouslySetInnerHTML={{ __html: item.replace('WhatsApp', `<span style="color: #C2FFD3;">WhatsApp</span>`) }}></h2>
          ))}
        </div>
      );
    }
  };





  

  const DynamicColorClass = (price) => {
    return price.nickname === "Standard" ? "standard-prog" : "comprehensive-prog";
  };

  const DynamicTitle = (price) => {
    return price.nickname === "Standard" ? "Fasting Focused System" : "Comprehensive";
  };








  const handleSubscription = async (e) => {
    e.preventDefault();
  
    // Check if user is logged in and has an email
    if (!user || !user.email) {
      // User is not logged in or doesn't have an email
      // Prepare event data for CompleteRegistration
      const metaEventData = {
        event_name: "CompleteRegistration",
        event_time: Math.floor(Date.now() / 1000),
        action_source: "website",
        event_source_url: window.location.href
      };
  
      await sendMetaEvent(metaEventData);
      // Redirect to login if user is not logged in or doesn't have an email
      window.location.assign('/api/auth/login');
      return;
    }
  
    // Prepare event data for InitiateCheckout
    const metaEventData = {
      event_name: "InitiateCheckout",
      event_time: Math.floor(Date.now() / 1000),
      action_source: "website",
      event_source_url: window.location.href,
      user_data: {
        em: [hashData(user.email)], // Hashed email
        fn: [user.firstName ? hashData(user.firstName) : ""] // Hashed first name (optional)
      }
    };
  
    await sendMetaEvent(metaEventData);
  
    // Determine if the payment should be a one-time payment or a subscription
    const paymentEndpoint = price.nickname === "Standard" ? '/api/onetimepayment' : '/api/payment';
  
    // Existing TikTok and payment processing logic
    // Trigger the TikTok Pixel event for InitiateCheckout
    if (window.ttq) {
      window.ttq.track('InitiateCheckout', {
        contents: [{
            content_id: price.id, // Use the price ID as content identifier
            content_type: price.nickname === "Standard" ? 'product' : 'subscription', // Adjust based on the program
            content_name: price.nickname, // Program name
            price: price.unit_amount / 100 // Convert to actual amount
        }],
        value: price.unit_amount / 100, // Convert to actual amount
        currency: 'USD' // Assuming USD, adjust as needed
      });
    }
  
    try {
      const response = await axios.post(paymentEndpoint, { priceId: price.id }, { headers: { 'Content-Type': 'application/json' } });
      const paymentUrl = response.data.url;
      if (paymentUrl) {
        window.location.assign(paymentUrl);
      } else {
        throw new Error("No payment URL received");
      }
    } catch (error) {
      console.error('Error handling payment:', error);
    }
  };
  










  // const handleSubscription = async (e) => {
  //   e.preventDefault();
  
  //   // Check if user is logged in and has an email
  //   if (user && user.email) {
  //         // User is logged in and has an email
  //     // Prepare event data for InitiateCheckout
  //     const metaEventData = {
  //       event_name: "InitiateCheckout",
  //       event_time: Math.floor(Date.now() / 1000),
  //       action_source: "website",
  //       event_source_url: window.location.href,
  //       user_data: {
  //         em: [hashData(user.email)], // Hashed email
  //         fn: [user.firstName ? hashData(user.firstName) : ""] // Hashed first name (optional)
  //       }
  //       // Add any additional data as needed
  //     };

  //     await sendMetaEvent(metaEventData);

  //     // Existing TikTok and payment processing logic
  //     // Trigger the TikTok Pixel event for InitiateCheckout
  //     if (window.ttq) {
  //       window.ttq.track('InitiateCheckout', {
  //         contents: [
  //           {
  //             content_id: price.id, // Use the price ID as content identifier
  //             content_type: 'subscription', // Adjust as needed
  //             content_name: price.nickname, // Program name
  //             price: price.unit_amount / 100 // Convert to actual amount
  //           }
  //         ],
  //         value: price.unit_amount / 100, // Convert to actual amount
  //         currency: 'USD' // Assuming USD, adjust as needed
  //       });
  //     }
  
  //     try {
  //       const { data } = await axios.post('/api/payment', { priceId: price.id }, { headers: { 'Content-Type': 'application/json' } });
  //       window.location.assign(data);
  //     } catch (error) {
  //       console.error('Error handling subscription:', error);
  //     }
  //   } else {
  //           // User is not logged in or doesn't have an email
  //     // Prepare event data for CompleteRegistration
  //     const metaEventData = {
  //       event_name: "CompleteRegistration",
  //       event_time: Math.floor(Date.now() / 1000),
  //       action_source: "website",
  //       event_source_url: window.location.href
  //       // No user data needed here
  //     };

  //     await sendMetaEvent(metaEventData);


  //     // Redirect to login if user is not logged in or doesn't have an email
  //     window.location.assign('/api/auth/login');
  //   }
  // };





   // Function to display the original and discounted price
  
  
   const displayPriceWithDiscount = (price) => {
    let originalPrice;
    if (price.nickname === "Standard") {
      originalPrice = "$55";
    } else {
      originalPrice = "$249";
    }
    const discountedPrice = (price.unit_amount / 100).toLocaleString('en-US', { style: 'currency', currency: 'USD' });

    return (
      <div className="block">
      <span className="text-gray-500 font-normal  line-through mr-2">{originalPrice}</span>
      <span className="text-[#B7B7B7] font-bold text-white">{discountedPrice}{price.nickname==="Comprehensive"&&"/month"}</span>
    </div>
    
    
    );
  };


  return (
    <div className={`w-full sm:w-1/2 mt-3 mx-3 text-center flex flex-col justify-center items-center py-4 px-4 text-[16px] sm:text-[20px] max-w-[400px] border-[#C2FFD3] rounded-[30px] h-auto sm:h-[400px] shadow-lg bg-[#2A2A2B] ${DynamicColorClass(price)}`}>
      <h1 className="text-center text-white font-extrabold mb-3 text-[25px] sm:text-[35px] ">{DynamicTitle(price)}</h1>
      {price.nickname=== 'Comprehensive' && (<span className='text-[#C2FFD3] italic  '>8 spots left!</span>)}
      {DynamicDescription(price)}
      <div className="mt-3 price-button-container text-center">
      {displayPriceWithDiscount(price)}

        {/* <span className="block text-[#B7B7B7] font-bold mt-7 text-white">Only {(price.unit_amount / 100).toLocaleString('en-US', { style: 'currency', currency: 'USD' })}/month</span> */}
        <button className="btn bg-[#C2FFD3] hover:bg-[#B3F0C465] text-black font-bold py-2 px-4 rounded-[30px] px-10 mt-2 inter-font" onClick={handleSubscription}>
          JOIN NOW
        </button>
      </div>
    </div>
  )
}

export default ProgListings;
