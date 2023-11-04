import React from 'react'
import Link from 'next/link'

const BannerDetails = () => {
  return (
    <div className="text-center my-3 py-4 px-5 description-section ">
      <Link href='/programs'>
  <button type="button" href='/programs' className="btn bg-[#C2FFD3] hover:bg-[#5C5E5EA2] text-black font-bold py-2 px-4 rounded-[30px] px-10 ">
    JOIN NOW
  </button>
  </Link>
  <div className="my-4 px-4 py-4 description-texts text-[20px]">
    <p className="mb-4  font-bold ">PICK THE PROGRAM THAT SUITS YOU!</p>
    <p className="mb-4  font-semibold">LET’S GET IN TOUCH AND FIND OUT EXACTLY WHAT TRAINING/DIET AND REST ROUTINE WILL GET YOU THERE.</p>
    <p className="mb-4 font-semibold">NO MORE ONE-FITS-ALL ORDINARY FITNESS PLAN!</p>
  </div>
</div>

  )
}

export default BannerDetails