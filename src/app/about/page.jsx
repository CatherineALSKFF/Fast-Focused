"use client"
import Banner from "@/components/Banner.jsx"
import AboutDetails from "@/components/AboutDetails.jsx"
import AboutImage from "@/components/AboutImage.jsx"
import AboutDescription from "@/components/AboutDescription.jsx"
export default function About() {



  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Banner/>
      <AboutDetails/>
      <AboutImage/>
      <AboutDescription/>


  

      
    </main>
  );

}
