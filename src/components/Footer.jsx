import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-[#444646] text-white inter-font">
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row justify-between py-6">
          <div className="flex flex-col items-center mb-4 md:mb-0 md:w-1/3 mt-4">
            <Link href='/'>
            <Image src="/logo.png" className="footer-logo h-16 w-16" alt="" width={100}
              height={50} />
              </Link>
          </div>

          <div className="flex flex-col items-center mb-4 md:mb-0 md:w-1/3 mt-4">
            <ul className="flex flex-col items-center md:flex-row justify-center gap-4">
              <li className="text-center"><Link href="/termsandconditions">TERMS & CONDITIONS</Link></li>
              <li className="text-center"><Link href="/contact">CONTACT</Link></li>
              <li className="text-center"><Link href="/privacypolicy">PRIVACY POLICY</Link></li>
            </ul>
          </div>


          <div className="flex flex-col items-center md:w-1/3 mt-4">
            <div className="flex flex-row justify-center gap-4">
              {/* gmail  */}
              <Link href="mailto:support@fastingfocused.com">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className=" h-6 w-6  "
                fill="currentColor"
                viewBox="0 0 24 24">
                <path d="M22.288 21h-20.576c-.945 0-1.712-.767-1.712-1.712v-13.576c0-.945.767-1.712 1.712-1.712h20.576c.945 0 1.712.767 1.712 1.712v13.576c0 .945-.767 1.712-1.712 1.712zm-10.288-6.086l-9.342-6.483-.02 11.569h18.684v-11.569l-9.322 6.483zm8.869-9.914h-17.789l8.92 6.229s6.252-4.406 8.869-6.229z" />
              </svg>
              </Link>
              {/* Instagram  */}
              <Link href="https://www.instagram.com/ChristianEverdeen">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="currentColor"
                viewBox="0 0 24 24">
                <path
                  d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
              </Link>
              {/* TikTok  */}
              <Link href="mailto:support@fastingfocused.com">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
                className="h-5 w-5">
                <path
                  fill="currentColor"
                  d="M448,209.91a210.06,210.06,0,0,1-122.77-39.25V349.38A162.55,162.55,0,1,1,185,188.31V278.2a74.62,74.62,0,1,0,52.23,71.18V0l88,0a121.18,121.18,0,0,0,1.86,22.17h0A122.18,122.18,0,0,0,381,102.39a121.43,121.43,0,0,0,67,20.14Z" />
              </svg> 
              </Link>           
              {/* Youtube  */}
              <Link href="mailto:support@fastingfocused.com"></Link>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="currentColor"
                viewBox="0 0 24 24">
                <path
                  d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
              </svg>
            </div>
          </div>
        </div>
         {/* New section for the "powered by" line */}
         <div className="text-center mt-4">
          <p className="text-sm">
            Website powered by 
            <Link href="https://catherinaalskaff.com/" passHref  className="text-[#C2FFD3] hover:underline ml-1" target="_blank" rel="noopener noreferrer">
              Catherina Al Skaff
            </Link>
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer;





















