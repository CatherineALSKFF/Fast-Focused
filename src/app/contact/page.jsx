"use client";
import ContactInfo from "@/components/ContactInfo";
import Banner from "@/components/Banner";
import Link from "next/link";
import React from "react";

export default function Contact() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between pt-24">
      <Banner />

      <p className="mt-[45px] font-bold text-[18px] sm:text-[25px] flex justify-center items-center">
        GOT A QUESTION? REACH OUT TO US!
      </p>

      <div className="relative hover-trigger mt-6 flex justify-center">
        <Link href="mailto:support@fastingfocused.com">
          
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="inline-block pointer-events-none h-[40px] sm:h-[60px] w-[40px] sm:w-[60px] ml-2 text-[#CCCCCC]"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M22.288 21h-20.576c-.945 0-1.712-.767-1.712-1.712v-13.576c0-.945.767-1.712 1.712-1.712h20.576c.945 0 1.712.767 1.712 1.712v13.576c0 .945-.767 1.712-1.712 1.712zm-10.288-6.086l-9.342-6.483-.02 11.569h18.684v-11.569l-9.322 6.483zm8.869-9.914h-17.789l8.92 6.229s6.252-4.406 8.869-6.229z" />
            </svg>
          
        </Link>
        <span className="hover-tooltip">SEND AN EMAIL</span>
      </div>

      <ContactInfo />
    </main>
  );
}



