import React from 'react'

export default function TierRow({
  title, status
}:{
  title: string,
  status: string,
}) {

  const teams = {
    id: "12345",
    fullName: "Los Angeles Lakers",
    name: "Lakers",
    status: "DYNASTY"
  }

  const players = {
    id: "12345",
    name: "Michael Jordan",
    jersey: "23",
    status: "GOAT"
  }

  return (
    <div id="row_goat" className="w-full  bg-blue-200 p-2 h-[200px]">
        <h1 className='text-2xl lg:text-4xl'>Tier GOAT 🐐</h1>
        <p>{teams.fullName}</p>
    </div>
  )
}
