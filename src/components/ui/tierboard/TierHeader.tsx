import Image from 'next/image'
import React from 'react'
import { titleFont } from "@/config/fonts";



export default function TierHeader( 
  { 
    title
  } : {
    title: String
  }
  ) {



  return (
    <div className="flex flex-row justify-center items-center pt-10 gap-5 ">
      <Image
        alt="NBA"
        src={`/images/logo-nba.svg`} 
        width={60} 
        height={60}
        className=""
      />
      <h1 className={`${titleFont.className} text-4xl text-center text-white`}>{ title }</h1>
    </div>


  )
}
