
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
          {["Customized program tailored to you specifically", "Customized meal plan", "Full breakdown of program + meal-plan with detailed explanation of method for moving forward", "Monthly program adjustment and consulting"].map((item, index) => (
            <h2 key={index} className='text-sm sm:text-m text-gray-500 mt-3 '>{item}</h2>
          ))}
        </div>
      );
    } else {
      return (
        <div className="text-[#B7B7B7] font-bold text-center font-semibold">
          {/* Similar mapping for the else part */}
          {["1 on 1 coaching with me", "Fluid customized program tailored to you specifically", "Fluid customized meal plan", "Daily consulting via WhatsApp to follow progress/make alterations"].map((item, index) => (
            <h2 key={index} className='text-sm sm:text-m text-gray-500 mt-3'>{item}</h2>
          ))}
        </div>
      );
    }
  };

  const DynamicColorClass = (price) => {
    return price.nickname === "Standard" ? "standard-prog" : "comprehensive-prog";
  };




  const handleSubscription = async (e) => {
    e.preventDefault();
  
    // Check if user is logged in and has an email
    if (user && user.email) {
          // User is logged in and has an email
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
        // Add any additional data as needed
      };

      await sendMetaEvent(metaEventData);

      // Existing TikTok and payment processing logic
      // Trigger the TikTok Pixel event for InitiateCheckout
      if (window.ttq) {
        window.ttq.track('InitiateCheckout', {
          contents: [
            {
              content_id: price.id, // Use the price ID as content identifier
              content_type: 'subscription', // Adjust as needed
              content_name: price.nickname, // Program name
              price: price.unit_amount / 100 // Convert to actual amount
            }
          ],
          value: price.unit_amount / 100, // Convert to actual amount
          currency: 'USD' // Assuming USD, adjust as needed
        });
      }
  
      try {
        const { data } = await axios.post('/api/payment', { priceId: price.id }, { headers: { 'Content-Type': 'application/json' } });
        window.location.assign(data);
      } catch (error) {
        console.error('Error handling subscription:', error);
      }
    } else {
            // User is not logged in or doesn't have an email
      // Prepare event data for CompleteRegistration
      const metaEventData = {
        event_name: "CompleteRegistration",
        event_time: Math.floor(Date.now() / 1000),
        action_source: "website",
        event_source_url: window.location.href
        // No user data needed here
      };

      await sendMetaEvent(metaEventData);


      // Redirect to login if user is not logged in or doesn't have an email
      window.location.assign('/api/auth/login');
    }
  };

  return (
    <div className={`w-full sm:w-1/2 mt-3 mx-3 text-center flex flex-col justify-center items-center py-4 px-4 text-[16px] sm:text-[20px] max-w-[400px] border-[#C2FFD3] rounded-[30px] h-auto sm:h-[400px] shadow-lg bg-[#2A2A2B] ${DynamicColorClass(price)}`}>
      <h1 className="text-center text-white font-extrabold mb-3 text-[25px] sm:text-[35px] ">{price.nickname}</h1>
      {DynamicDescription(price)}
      <div className="mt-3 price-button-container text-center">
        <span className="block text-[#B7B7B7] font-bold mt-7 text-white">Only {(price.unit_amount / 100).toLocaleString('en-US', { style: 'currency', currency: 'USD' })}/month</span>
        <button className="btn bg-[#C2FFD3] hover:bg-[#B3F0C465] text-black font-bold py-2 px-4 rounded-[30px] px-10 mt-2 inter-font" onClick={handleSubscription}>
          JOIN NOW
        </button>
      </div>
    </div>
  )
}

export default ProgListings;
