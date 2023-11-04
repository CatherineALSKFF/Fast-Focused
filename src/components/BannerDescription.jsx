import React from 'react'

const BannerDescription = () => {
  return (
<div className="container my-4 flex justify-center align-items-center">
  <div className="row flex flex-wrap justify-center align-items-center">
    <div className=" p-3 flex-shrink-0 align-center">
      <img
        src="/fillout.jpeg"
        alt=""
        className="w-[350px] max-w-full p-3"
      />
    </div>
    <div className=" description-texts p-3 flex-grow align-items-center align-center justify-center   ">
      <ul className="font-semibold text-[30px] w-[350px] p-3" >
        <li className=" ">MEAL PLANS CONSISTENT WITH HUMAN EVOLUTION</li>
        <li className="mt-3 ">TRAINING WHICH ACTUALLY ACCOUNTS FOR “NATTY STATUS”</li>
      </ul>
    </div>
  </div>
</div>

  
  

  )
}

export default BannerDescription