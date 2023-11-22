
import BannerVideo from "../components/BannerVideo.jsx"
import BannerDetails from "@/components/BannerDetails.jsx"
import BannerDescription from "@/components/BannerDescription.jsx"

export default function Home() {

  return (

    <main className="flex min-h-screen flex-col items-center justify-between py-24 " >
       <div className=" text-center ">
    <div className="container pb-2 font-bold ">
        <h1 className="   mb-1 text-[#C2FFD3] font-extrabold text-[35px]">FASTING FOCUSED</h1>
        <span className="  pb-3  font-bold text-black text-[25px]">Protocol</span>
    </div>
    </div>

    <BannerVideo/>
    <BannerDetails/>
    <BannerDescription/>




    </main>

  )
};
