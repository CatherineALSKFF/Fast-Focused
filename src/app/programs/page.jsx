import ProBanner from "@/components/ProBanner"
import ProgDescription from "@/components/ProgDescription"
import ProgListings from "@/components/ProgListings"


export default function Programs() {
    return (
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <ProBanner/>
        <ProgListings/>
        <ProgDescription/>

  
      </main>
    )
  }