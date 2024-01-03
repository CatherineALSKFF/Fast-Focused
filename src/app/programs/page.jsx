'use client'
import axios from "axios"
import { useState, useEffect } from "react"
import Banner from "@/components/Banner"
import ProgDescription from "@/components/ProgDescription"
import ProgListings from "@/components/ProgListings"


export default function Programs() {
  const [prices, setPrices] = useState([]);

  useEffect(() => {
    fetchPrices()
  }, [])


  const fetchPrices = async () => {
    const { data } = await axios.get('/api/getprograms')
    setPrices(data)
    // console.log(data)
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


    </main>
  )
}