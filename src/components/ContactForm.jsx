import React from 'react'

const ContactForm = () => {
  return (
    <form className="flex flex-col justify-center items-center text-[#444646] rounded-[30px] border-2 border-[#C2FFD3] p-6">
  <input
    type="text"
    name="name"
    placeholder="Name"
    className="w-full w-[400px] p-3 my-2 rounded border border-gray-300 focus:ring-[#C2FFD3] focus:border-[#C2FFD3] bg-#D9D9D9 border-none "
  />
  <input
    type="email"
    name="email"
    placeholder="Email"
    className="w-full p-3 my-2 rounded border border-gray-300 focus:ring-[#C2FFD3] focus:border-[#C2FFD3] bg-#D9D9D9 border-none"
  />
  <textarea
    name="message"
    placeholder="Message"
    className="w-full h-[150px] p-3 my-2 rounded border border-gray-300 focus:ring-[#C2FFD3] focus:border-[#C2FFD3] bg-#D9D9D9 border-none"
  />
  <button
    type="submit"
    className="mt-3 btn bg-[#C2FFD3] hover:bg-[#5C5E5EA2] text-black font-bold py-2 px-4 rounded-[30px] px-10"
  >
  SEND MESSAGE 
  </button>
</form>





  )
}

export default ContactForm