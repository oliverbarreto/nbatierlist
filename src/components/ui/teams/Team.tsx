import Image from 'next/image'
import React from 'react'

export default function Team({
    team
  }:{
    team: string
  }) {

  return (
    <div className="">
      <Image
          alt={team}
          src={`/images/logo-${team}.svg`} 
          width={75} 
          height={75}
          className="cursor-move"
      />
    </div>
  )
}
