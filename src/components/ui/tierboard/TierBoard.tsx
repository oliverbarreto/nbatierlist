"use client"

import React from 'react'
import TierRow from './TierRow'

import {useTierlistStore} from "@/store/store"


function TierBoard() {

  const handleReset = useTierlistStore(state => state.resetTeamsTier)
  const handleResetTeams = () => {
    handleReset()
  }

  return (
    <div className='flex flex-col justify-center items-center text-center mt-10 gap-1 lg:gap- mx-10'>
      <TierRow  title="Dynasty" tier="Dynasty"/>
      <TierRow  title="Tier A" tier="TierA"/>
      <TierRow  title="Tier B" tier="TierB"/>
      <TierRow  title="Tier C" tier="TierC"/>
      <TierRow  title="Tier D" tier="TierD"/>
      <TierRow  title="Tier E" tier="TierE"/>
      <TierRow  title="Tier F" tier="TierF"/>
      <TierRow  title="All Teams" tier="None"/>
      <button onClick={handleResetTeams} className='m-3 px-4 py-2 text-white rounded-lg bg-primary-purple'>
        Reset Teams
      </button>
    </div>
  )
}

export default TierBoard