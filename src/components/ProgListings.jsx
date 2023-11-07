import Link from 'next/link'
import React from 'react'

const ProgListings = () => {
  return (
    <div className="container my-4 programs-container flex justify-center items-center flex-wrap">
  {/* standard section */}
  <div className="w-full md:w-1/2 px-2 mt-3 text-center flex flex-col justify-center items-center">
    <h1 className="text-center text-[#444646] font-bold mb-3">STANDARD</h1>
    <div className="rounded-md shadow-lg bg-[#F5E7E7AB] py-6 px-6 text-[20px] min-h-[400px] max-w-[400px]">
      <div className="text-[#B7B7B7] font-bold text-center font-semibold">
        Customized program tailored to you specifically
        Customized meal plan
        Full breakdown of program + meal-plan with detailed explanation of method for moving forward
        Monthly program adjustment and consulting
      </div>
    </div>
    <div className="mt-3 price-button-container text-center">
      <span className="block text-[#353535] font-bold mt-7 text-[18px]">129$ a month</span>
      <Link href="/programs">
        <button
          type="button"
          href="/programs"
          className="btn bg-[#C2FFD3] hover:bg-[#5C5E5EA2] text-black font-bold py-2 px-4 rounded-[30px] px-10 mt-2"
        >
          JOIN NOW
        </button>
      </Link>
    </div>
  </div>
  {/* comprehensive section */}
  <div className="w-full md:w-1/2 md:mt-5 px-2 mt-3 text-center flex flex-col justify-center items-center">
    <h1 className="text-center text-[#444646] font-bold mb-3">COMPREHENSIVE</h1>
    <div className="rounded-md shadow-lg bg-[#444646] py-6 px-6  text-[20px] min-h-[400px] max-w-[400px]">
      <div className="text-[#B7B7B7] font-semibold text-center">
        1 on 1 coaching with me
        Fluid customized program tailored to you specifically
        Fluid customized meal plan
        Daily consulting via WhatsApp to follow progress/make alterations
        Teaching exactly the method for your future independence
      </div>
    </div>
    <div className="mt-3 price-button-container text-center">
      <span className="block text-[#353535] font-bold mt-7 text-[18px]">299$ a month</span>
      <Link href="/programs">
        <button
          type="button"
          href="/programs"
          className="btn bg-[#C2FFD3] hover:bg-[#5C5E5EA2] text-black font-bold py-2 px-4 rounded-[30px] px-10 mt-2"
        >
          JOIN NOW
        </button>
      </Link>
    </div>
  </div>
</div>


  )
}

export default ProgListings