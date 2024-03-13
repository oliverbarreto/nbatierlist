import React from 'react'
import TierRow from './TierRow'

function TierBoard() {
  return (
    <div className='flex flex-col justify-center items-center text-center mt-10 gap-6 lg:gap-12'>
      <TierRow />
      <div id="row_tierA" className="w-full  bg-blue-200 p-2 h-[200px]">Tier A</div>
      <div id="row_tierB" className="w-full  bg-blue-200 p-2 h-[200px]">Tier B</div>
      <div id="row_tierC" className="w-full  bg-blue-200 p-2 h-[200px]">Tier C</div>
      <div id="row_tierD" className="w-full  bg-blue-200 p-2 h-[200px]">Tier D</div>
      <div id="row_tierE" className="w-full  bg-blue-200 p-2 h-[200px]">Tier E</div>
    </div>
  )
}

export default TierBoard