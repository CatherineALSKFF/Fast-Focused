'use client';

import { useUser } from '@auth0/nextjs-auth0/client';
import Link from 'next/link'
import React from 'react'
import axios from 'axios'
import { IoCheckmarkCircleSharp } from "react-icons/io5";



const ProgListings = ({ price }) => {

  const { user, error, isLoading } = useUser();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;

  

  const DynamicDescription = (price) => {

  if (price.nickname === "Standard") {
      return <div className="text-[#B7B7B7] font-bold text-center font-semibold ">
            <h2 className='text-sm text-gray-500 '>Customized program tailored to you specifically</h2>
            <h2 className='text-sm text-gray-500 mt-3'>Customized meal plan</h2>
            <h2 className='text-sm text-gray-500 mt-3'>Full breakdown of program + meal-plan with detailed explanation of method for moving forward</h2>
            <h2 className='text-sm text-gray-500 mt-3'>Monthly program adjustment and consulting</h2>
   
      </div>
    } else {
      return <div className="text-[#B7B7B7] font-bold text-center font-semibold ">
            <h2 className='text-sm text-gray-500 '>1 on 1 coaching with me</h2>
            <h2 className='text-sm text-gray-500 mt-3'>Fluid customized program tailored to you specifically</h2>
            <h2 className='text-sm text-gray-500 mt-3'>Fluid customized meal plan</h2>
            <h2 className='text-sm text-gray-500 mt-3'>Daily consulting via WhatsApp to follow progress/make alterations</h2>
            {/* <h2 className='text-sm text-gray-500 mt-3'>Teaching exactly the method for your future independence</h2> */}
      </div>
    }
  }




  const DynamicColorClass = (price) => {

    if (price.nickname === "Standard") {
        return "standard-prog"
      } else {
        return "comprehensive-prog"
      }
    }


  // POST request 
const handleSubscription = async (e) => {
  e.preventDefault();

  if (!user || !user.email) {
    // Redirect to /api/auth/login if email is not present
    window.location.assign('/api/auth/login');
    return;
  }

  try {
    const { data } = await axios.post(
      '/api/payment',
      {
        priceId: price.id,
      },
      {
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );

    // Proceed with the existing code
    window.location.assign(data);
  } catch (error) {
    console.error('Error handling subscription:', error);
    // Handle error as needed
  }

}


  return (

    <div className={`w-full md:w-1/2 mt-3 mx-3 text-center flex flex-col justify-center items-center py-4 px-4 text-[20px] max-w-[400px] border-[#C2FFD3] rounded-[30px] h-[400px] shadow-lg bg-[#2A2A2B] ${DynamicColorClass(price)}`}>
      
      <h1 className="text-center text-white font-extrabold mb-3 text-[35px]">{price.nickname}</h1>
      {/* <p className='text-white text-center '> </p> */}
      {DynamicDescription(price)}
      <div className="mt-3 price-button-container text-center">
        <span className="block text-[#B7B7B7] font-bold mt-7 text-white">{(price.unit_amount / 100).toLocaleString('en-US', {
          style: 'currency',
          currency: 'USD'
        })}/month</span>

        
        <button className="btn bg-[#C2FFD3] hover:bg-[#B3F0C465] text-black font-bold py-2 px-4 rounded-[30px] px-10 mt-2" 
        onClick={handleSubscription} >
         JOIN NOW
        </button>

      </div>
    </div>



  )
}

export default ProgListings