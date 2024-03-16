'use client'

import React, { useEffect } from 'react'
import TeamView from '../teams/TeamView'
import { Tier, useTierlistStore } from "@/store/store"

export default function TierRow({
  title,
  tier,
}: {
  title: string
  tier: Tier
}) {  

  // Manage Drag & Drop  
  const updateTeam = useTierlistStore(state => state.updateItem)
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
  const teams = useTierlistStore(state => state.teams)
  const filteredTeams = teams.filter(team => team.tier === tier)
  
  // Manage Change Row Title
  const tierRowTitles = useTierlistStore(state => state.tierRowTitles)
  const mitierRowTitle = tierRowTitles.find(row => row.tier === tier)?.title;

  const updateTierRowTitle = useTierlistStore(state => state.updateTierRowTitle)  
  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // TODO: call store update function
    // console.log("VALOR DEL CAMPO ONCHANGE",e.target.value)
    updateTierRowTitle(tier, e.target.value)
  }
 

  // --- Server Side Rehydration with ZUSTAND LocalStorage Store Component  ---
  // --- hydrate persisted store after on mount                     ---
  useEffect(() => {
    useTierlistStore.persist.rehydrate();
  }, [])


 return (
    <div className={`flex flex-row justify-start items-stretch gap-1 md:gap-5 w-full rounded-lg border-2 border-primary-purple overflow-hidden
      ${ tier !== 'None' ? 'bg-primary-yellow' : 'bg-primary-turqoise'} `} 
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
        {( tier === "None") 
        ? <p>{title}</p>
        : <>
            <input
              type="text"
              className="text-lg lg:text-xl text-center px-4 bg-transparent min-w-[150px] max-w-[200px]"
              value={mitierRowTitle}
              onChange={handleTitleChange}
            />
            {/* <p>{tier}</p> */}
          </>
       }

      </div>

      <div id="row_goat" className={`w-full px-2 min-h-[80px] grid grid-cols-3 md:grid-cols-6 lg:grid-cols-9 xl:grid-cols-12 text-primary-black`} >       
        { filteredTeams.map(team => (
          <TeamView key={ team.id } team={ team } />
          )) }
      </div>

    </div>
  )
}
