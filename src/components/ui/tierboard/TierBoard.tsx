"use client"

import React, { useEffect, useRef } from 'react'

import { toPng } from 'html-to-image';

import TierRow from './TierRow'
import TierHeader from "@/components/ui/tierboard/TierHeader";

import {useTierlistStore} from "@/store/store"


function TierBoard() {

  // Name of Tier List Board
  const tierName = "NBA Teams Tier List"

  // Handle HTML-to-IMAGE
  const elementRef = useRef(null);
  // const htmlToImageConvert = () => {
  //   toPng(elementRef.current, { cacheBust: false })
  //     .then((dataUrl) => {
  //       const link = document.createElement("a");
  //       link.download = `${tierName}.png`;
  //       // link.download = "my-image-name.png";
  //       link.href = dataUrl;
  //       link.click();
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // };
  const htmlToImageConvert = () => {
    if (elementRef.current) {
      toPng(elementRef.current, { cacheBust: false })
      .then((dataUrl) => {
        const link = document.createElement("a");
        link.download = `${tierName}.png`;
        link.href = dataUrl;
        link.click();
      })
      .catch((err) => {
        console.log(err);
      });
    }
    
  };

  // Handle Reset Button
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
    <div id="main-tierlist" className="mx-3 lg:mx-10">
      <div className='flex flex-col justify-center items-center text-center gap-1 lg:gap-2' ref={elementRef}>
        <TierHeader title={tierName}/>
        <TierRow  title="Dynasty" tier="Dynasty"/>
        <TierRow  title="Tier A" tier="TierA"/>
        <TierRow  title="Tier B" tier="TierB"/>
        <TierRow  title="Tier C" tier="TierC"/>
        <TierRow  title="Tier D" tier="TierD"/>
        <TierRow  title="Tier E" tier="TierE"/>
        <TierRow  title="Tier F" tier="TierF"/>
        <TierRow  title="Teams" tier="None"/>
      </div>
      <div className='flex flex-col justify-center items-center text-center gap-1 lg:gap-2'>
          <button 
            className={`w-full md:w-2/5 mt-3 px-4 py-2 text-white rounded-lg bg-primary-purple hover:border-2 hover:border-primary-yellow hover:scale-105 transition-all duration-100 ${!shouldEnableReset() ? 'hidden' : ''}`}
            onClick={handleResetTeams} 
          >
            Reset items
          </button>
          <button 
            className={`w-full md:w-2/5 mb-3 px-4 py-2 text-white rounded-lg bg-primary-purple hover:border-2 hover:border-primary-yellow hover:scale-105 transition-all duration-100 ${!shouldEnableReset() ? 'hidden' : ''}`}
            // onClick={() => console.log("Share Tier List Button Clicked")} 
            onClick={htmlToImageConvert}
          >
            Share Tier List
          </button>
        </div>
    </div>
  )
}

export default TierBoard