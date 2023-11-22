import Link from 'next/link'
import React from 'react'
import axios from 'axios'
import { IoCheckmarkCircleSharp } from "react-icons/io5";


const ProgListings = ({ price }) => {


  const DynamicDescription = (price) => {

  if (price.nickname === "Standard") {
      return <div className="text-[#B7B7B7] font-bold text-center font-semibold">
        <div className='flex space-x-3'>
        <IoCheckmarkCircleSharp className="h-5 w-5 flex-shrink-0 text-[#C2FFD3] ml-2" aria-hidden="true"/>
            <h2 className='text-sm text-gray-500'>Customized program tailored to you specifically</h2>
            </div>
        <div className='border'></div>
        <div className='flex space-x-3'>
        <IoCheckmarkCircleSharp className="h-5 w-5 flex-shrink-0 text-[#C2FFD3] ml-2" aria-hidden="true"/>
            <h2 className='text-sm text-gray-500'>Customized meal plan</h2>
            </div>
        <div className='border'></div>
        <div className='flex space-x-3'>
        <IoCheckmarkCircleSharp className="h-5 w-5 flex-shrink-0 text-[#C2FFD3] ml-2" aria-hidden="true"/>
            <h2 className='text-sm text-gray-500'>Full breakdown of program + meal-plan with detailed explanation of method for moving forward</h2>
            </div>
        <div className='border'></div>
        <div className='flex space-x-3 '>
        <IoCheckmarkCircleSharp className="h-5 w-5 flex-shrink-0 text-[#C2FFD3] ml-2" aria-hidden="true"/>
            <h2 className='text-sm text-gray-500'>Monthly program adjustment and consulting</h2>
            </div>
        <div className='border'></div>
        
        
        
        
      </div>
    } else {
      return <div className="text-[#B7B7B7] font-bold text-center font-semibold">
        <div className='flex space-x-3'>
          <IoCheckmarkCircleSharp className="h-5 w-5 flex-shrink-0 text-[#C2FFD3] ml-2" aria-hidden="true"/>
            <h2 className='text-sm text-gray-500'>1 on 1 coaching with me</h2>
            </div>
        <div className='border'></div>
        <div className='flex space-x-3'>
        <IoCheckmarkCircleSharp className="h-5 w-5 flex-shrink-0 text-[#C2FFD3] ml-2" aria-hidden="true"/>
            <h2 className='text-sm text-gray-500'>Fluid customized program tailored to you specifically</h2>
            </div>
        <div className='border'></div>
        <div className='flex space-x-3'>
        <IoCheckmarkCircleSharp className="h-5 w-5 flex-shrink-0 text-[#C2FFD3] ml-2" aria-hidden="true"/>
            <h2 className='text-sm text-gray-500'>Fluid customized meal plan</h2>
            </div>
        <div className='border'></div>
        <div className='flex space-x-3'>
        <IoCheckmarkCircleSharp className="h-5 w-5 flex-shrink-0 text-[#C2FFD3] ml-2" aria-hidden="true"/>
            <h2 className='text-sm text-gray-500'>Daily consulting via WhatsApp to follow progress/make alterations</h2>
            </div>
        <div className='border'></div>
        <div className='flex space-x-3'>
        <IoCheckmarkCircleSharp className="h-5 w-5 flex-shrink-0 text-[#C2FFD3] ml-2" aria-hidden="true"/>
            <h2 className='text-sm text-gray-500'>Teaching exactly the method for your future independence</h2>
            </div>
        <div className='border'></div>
        
        
        
        
      </div>
    }
  }


  // POST request 
const handleSubscription = async (e) => {
  e.preventDefault();
  const { data } = await axios.post('/api/payment',
  {
    priceId: price.id
  },
  {
    headers: {
      "Content-Type": "application/json",
    },
  }
  );
  window.location.assign(data)
}


  return (

    <div className="w-full md:w-1/2 px-2 mt-3 mx-3 text-center flex flex-col justify-center items-center py-3 px-4 text-[20px] min-h-[300px] max-w-[400px]  border-[#C2FFD3] rounded-[30px] h-[400px] shadow-lg border-style  ">
      <h1 className="text-center text-black font-extrabold mb-3 text-[35px]">{price.nickname}</h1>
      <p className='text-white'> {DynamicDescription(price)}</p>
      <div className="mt-3 price-button-container text-center">
        <span className="block text-[#353535] font-bold mt-7 text-[18px]">{(price.unit_amount / 100).toLocaleString('en-US', {
          style: 'currency',
          currency: 'USD'
        })}/month</span>

        
        <button className="btn bg-[#C2FFD3] hover:bg-[#B3F0C465] text-black font-bold py-2 px-4 rounded-[30px] px-10 mt-2" 
        onClick={handleSubscription} >
         JOIN NOW
        </button>



        {/* Button */}
        {/* <Link href="/programs">
          <button
            type="button"
            href="/programs"
            className="btn bg-[#C2FFD3] hover:bg-[#B3F0C465] text-black font-bold py-2 px-4 rounded-[30px] px-10 mt-2"
          >
            JOIN NOW
          </button>
        </Link> */}
      </div>
    </div>



  )
}

export default ProgListings