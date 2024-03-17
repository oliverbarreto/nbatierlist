"use client"

import React from 'react'
import TierRow from './TierRow'
import TierHeader from "@/components/ui/tierboard/TierHeader";

import {useTierlistStore} from "@/store/store"

import { Team } from '@/interfaces/TeamInterface';

function TierBoard() {

  const handleReset = useTierlistStore(state => state.resetTeamsTier)
  const handleResetTeams = () => {
    console.log("reset")
    handleReset()
  }
  const shouldEnableReset = () : boolean => {
    const teams = useTierlistStore(state => state.items)
    const filtered = teams.filter(team => team.tier !== "None");
    return filtered.length !== 0;
  }

  return (
    <>
      <TierHeader title="NBA Teams Tier List"/>
      <div className='flex flex-col justify-center items-center text-center mt-10 gap-1 lg:gap- mx-3 lg:mx-10'>
        <TierRow  title="Dynasty" tier="Dynasty"/>
        <TierRow  title="Tier A" tier="TierA"/>
        <TierRow  title="Tier B" tier="TierB"/>
        <TierRow  title="Tier C" tier="TierC"/>
        <TierRow  title="Tier D" tier="TierD"/>
        <TierRow  title="Tier E" tier="TierE"/>
        <TierRow  title="Tier F" tier="TierF"/>
        <TierRow  title="All Teams" tier="None"/>
        <button 
          className={`w-full md:w-2/5 m-3 px-4 py-2 text-white rounded-lg bg-primary-purple hover:border-2 hover:border-primary-yellow hover:scale-105 transition-all duration-100 ${!shouldEnableReset() ? 'hidden' : ''}`}
          onClick={handleResetTeams} 
        >
          Reset items
        </button>
      </div>
    </>
  )
}

export default TierBoard