import { useUser } from '@auth0/nextjs-auth0/client';
import Link from 'next/link';
import React from 'react';
import axios from 'axios';
import { IoCheckmarkCircleSharp } from "react-icons/io5";

const ProgListings = ({ price }) => {
  const { user, error, isLoading } = useUser();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;

  const DynamicDescription = (price) => {
    console.log(price.nickname);

    if (price.nickname === "Standard") {
      return (
        <div className="text-[#B7B7B7] font-bold text-center font-semibold">
          {/* Repeated h2 elements are replaced by a single map for cleaner code */}
          {["Customized program tailored to you specifically", "Customized meal plan", "Full breakdown of program + meal-plan with detailed explanation of method for moving forward", "Monthly program adjustment and consulting"].map((item, index) => (
            <h2 key={index} className='text-xs sm:text-sm text-gray-500 mt-3'>{item}</h2>
          ))}
        </div>
      );
    } else {
      return (
        <div className="text-[#B7B7B7] font-bold text-center font-semibold">
          {/* Similar mapping for the else part */}
          {["1 on 1 coaching with me", "Fluid customized program tailored to you specifically", "Fluid customized meal plan", "Daily consulting via WhatsApp to follow progress/make alterations"].map((item, index) => (
            <h2 key={index} className='text-xs sm:text-sm text-gray-500 mt-3'>{item}</h2>
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

    if (!user || !user.email) {
      window.location.assign('/api/auth/login');
      return;
    }

    try {
      const { data } = await axios.post('/api/payment', { priceId: price.id }, { headers: { 'Content-Type': 'application/json' } });
      window.location.assign(data);
    } catch (error) {
      console.error('Error handling subscription:', error);
    }
  };

  return (
    <div className={`w-full sm:w-1/2 mt-3 mx-3 text-center flex flex-col justify-center items-center py-4 px-4 text-[16px] sm:text-[20px] max-w-[400px] border-[#C2FFD3] rounded-[30px] h-auto sm:h-[400px] shadow-lg bg-[#2A2A2B] ${DynamicColorClass(price)}`}>
      <h1 className="text-center text-white font-extrabold mb-3 text-[25px] sm:text-[35px]">{price.nickname}</h1>
      {DynamicDescription(price)}
      <div className="mt-3 price-button-container text-center">
        <span className="block text-[#B7B7B7] font-bold mt-7 text-white">{(price.unit_amount / 100).toLocaleString('en-US', { style: 'currency', currency: 'USD' })}/month</span>
        <button className="btn bg-[#C2FFD3] hover:bg-[#B3F0C465] text-black font-bold py-2 px-4 rounded-[30px] px-10 mt-2" onClick={handleSubscription}>
          JOIN NOW
        </button>
      </div>
    </div>
  )
}

export default ProgListings;
