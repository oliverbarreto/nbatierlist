import { Team, useTierlistStore } from '@/store/store'
import Image from 'next/image'
import React, { useEffect } from 'react'

export default function TeamView({
    team
  }:{
    team: Team
  }) {

    const dragTeam = useTierlistStore(state => state.dragItem)

    // const handleDragStart = (e: React.DragEvent<HTMLDivElement>) => {
    //   e.preventDefault();
    //   console.log("Dragging item:", team.id);
    //   dragTeam(team.id);
    // };
    const handleDragStart = (e: React.DragEvent<HTMLDivElement>) => {
      e.dataTransfer.setData('text/plain', team.id); // Set the data payload
      dragTeam(team.id);
    };
  
    // const handleClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    //   e.preventDefault();
    //   console.log("Clicked on item:", team.id);
    // };

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
            alt={team.fullName}
            src={`/images/logo-${team.name}.svg`} 
            width="0" 
            height="0"
            sizes="100vw"
            className="cursor-move h-auto w-auto"
        />
        {/* <Image
            id={team.id}
            alt={team.fullName}
            src={`/images/logo-${team.name}.svg`} 
            width={75} 
            height={75}
            className="cursor-move"
        /> */}

    </div>
  )
}
