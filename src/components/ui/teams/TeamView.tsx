import Image from 'next/image'
import React, { useEffect } from 'react'

import { useTierlistStore } from '@/store/store'
import { Team } from '@/interfaces/TeamInterface'


export default function TeamView({
    team
  }:{
    team: Team
  }) {

    const dragTeam = useTierlistStore(state => state.dragItem)
    const handleDragStart = (e: React.DragEvent<HTMLDivElement>) => {
      e.dataTransfer.setData('text/plain', team.id); // Set the data payload
      dragTeam(team.id);
    };
  
    // --- Server Side Rehydration with LocalStorage Store Component ---
    // hydrate persisted store after on mount
    useEffect(() => {
      useTierlistStore.persist.rehydrate();
    }, [])


  return (
    <div className="" 
      draggable={true}
      onDragStart={handleDragStart}
      // onClick={handleClick}
    >
        <Image
            className="cursor-move h-auto w-auto min-h-[60px] max-h-[150px] hover:scale-105 transition-all duration-100"
            alt={team.fullName}
            src={`/images/logo-${team.name}.svg`} 
            width="0" 
            height="0"
            sizes="100vw"
        />

    </div>
  )
}
