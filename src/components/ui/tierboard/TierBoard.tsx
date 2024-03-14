import React from 'react'
import TierRow from './TierRow'

function TierBoard() {
  return (
    <div className='flex flex-col justify-center items-center text-center mt-10 gap-1 lg:gap- mx-10'>
      <TierRow  title="Dynasty" status="Dynasty"/>
      <TierRow  title="Tier A" status="TierA"/>
      <TierRow  title="Tier B" status="TierB"/>
      <TierRow  title="Tier C" status="TierC"/>
      <TierRow  title="Tier D" status="TierD"/>
      <TierRow  title="Tier E" status="TierE"/>
      <TierRow  title="Tier F" status="TierF"/>
    </div>
  )
}

export default TierBoard