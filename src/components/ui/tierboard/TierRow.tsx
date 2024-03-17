'use client'

import React, { useEffect } from 'react'

import TeamView from '../teams/TeamView'

import { useTierlistStore } from "@/store/store"
import { Tier } from '@/interfaces/TierInterface'


export default function TierRow({
  title,
  tier,
}: {
  title: string
  tier: Tier
}) {  

  // Manage Drag & Drop  
  const updateTeam = useTierlistStore(state => state.updateDraggedItem)
  const draggedTeam = useTierlistStore(state => state.draggedItem)
  const dragTeam = useTierlistStore(state => state.dragItem)

  // Handle Drag & Drop 
  const handleDroppedItem = (e:React.DragEvent<HTMLDivElement>) => {
    const draggedItemId = e.dataTransfer.getData('text/plain'); // Get the data payload
    if (!draggedTeam) return
  
    updateTeam(draggedTeam, tier)
    dragTeam(null)  // reset to null the pointer to the item being dragged
  }

  // Manage teams info
  const teams = useTierlistStore(state => state.items)
  const filteredTeams = teams.filter(team => team.tier === tier)
  
  // Manage Change Row Title
  const tierRowTitles = useTierlistStore(state => state.tierRowTitles)
  const mitierRowTitle = tierRowTitles.find(row => row.tier === tier)?.title;

  const updateTierRowTitle = useTierlistStore(state => state.updateTierRowTitle)  
  const handleTitleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    // TODO: call store update function
    console.log("VALOR DEL CAMPO ONCHANGE",e.target.value)
    updateTierRowTitle(tier, e.target.value)
  }


  // --- Server Side Rehydration with ZUSTAND LocalStorage Store Component  ---
  // --- hydrate persisted store after on mount                     ---
  useEffect(() => {
    useTierlistStore.persist.rehydrate();
  }, [])


 return (
  <>
    { (tier !== "None")  ?
        <div className={`flex flex-row justify-start items-stretch gap-1 md:gap-5 w-full min-h-[80px] rounded-lg border-2 border-primary-purple overflow-hidden bg-primary-yellow `} 
        onDrop={handleDroppedItem} 
        onDragOver={e => e.preventDefault()}
        >
          <div className={ `min-w-[150px] max-w-[200px] flex items-center justify-center rounded-lg 
            ${ tier === 'Dynasty' ? 'bg-tier-goat' : ''}
            ${ tier === 'TierA' ? 'bg-tier-A' : ''}
            ${ tier === 'TierB' ? 'bg-tier-B' : ''}
            ${ tier === 'TierC' ? 'bg-tier-C' : ''}
            ${ tier === 'TierD' ? 'bg-tier-D' : ''}
            ${ tier === 'TierD' ? 'bg-tier-D' : ''}
            ${ tier === 'TierE' ? 'bg-tier-E' : ''}
            ${ tier === 'TierF' ? 'bg-tier-F' : ''}
            `}
          >
              
          <textarea  // Cambiamos el input por un textarea
              className="text-md lg:text-xl text-center px-4 bg-transparent min-w-[150px] max-w-[2min-h00px] h-full resize-none" // Añadimos la clase h-full y resize-none
              value={mitierRowTitle}
              onChange={handleTitleChange}
          />
        </div>

        <div id="row_goat" className={`w-full px-2 min-h-[80px] grid grid-cols-3 md:grid-cols-6 lg:grid-cols-9 xl:grid-cols-12 text-primary-black`} >       
          { filteredTeams.map(team => (
            <TeamView key={ team.id } team={ team } />
            )) }
        </div>
      </div> 
    :
      <div className='w-full flex-col justify-center items-stretch gap-1 md:gap-5 rounded-lg bg-primary-turqoise border-2 border-primary-purple overflow-hidden'
      onDrop={handleDroppedItem} 
      onDragOver={e => e.preventDefault()}
      >
        <p className='text-white text-lg md:text-xl lg:text-3xl text-center px-4 bg-transparent my-3'>{title}</p>
        <div id="row_goat" className={`w-full px-2 min-h-[10px] grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-9 xl:grid-cols-12 text-primary-black`} >       
          { filteredTeams.map(team => (
            <TeamView key={ team.id } team={ team } />
            )) }
        </div>

      </div>

   }
  </>

  )
}
