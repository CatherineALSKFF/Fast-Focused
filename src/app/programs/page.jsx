'use client'
import axios from "axios"
import { useState, useEffect } from "react"
import Banner from "@/components/Banner"
import ProgDescription from "@/components/ProgDescription"
import ProgListings from "@/components/ProgListings"
import ProgramsDetails from "@/components/ProgramsDetails"


export default function Programs() {
  const [prices, setPrices] = useState([]);

  useEffect(() => {
    fetchPrices()
  }, [])


  const fetchPrices = async () => {
    const { data } = await axios.get('/api/getprograms')
    setPrices(data)
    // console.log(data)
      // Assuming data is an array of prices
      const sortedData = data.sort((a, b) => a.unit_amount - b.unit_amount);
      setPrices(sortedData)
  }
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Banner />

      {/* <ProgListings /> */}
      <div className="container my-4 programs-container flex justify-center items-center flex-wrap gap-5px">
      {prices && prices.map((price) => (
        <ProgListings price={price} key={price.id} />
      ))}
      </div>

      <ProgDescription />
      <ProgramsDetails/>



    </main>
  )
}