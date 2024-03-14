import Image from "next/image";
import TierBoard from "@/components/ui/tierboard/TierBoard";
import { titleFont } from "@/config/fonts";


export default function Home() {
  return (
    <main className="h-screen">
      <div className="flex flex-row justify-center items-center pt-10 gap-5 ">
        <Image 
          alt="NBA"
          src={`/images/logo-nba.svg`} 
          width={60} 
          height={60}
          className=""
        />
        <h1 className={"${titleFont.className} text-4xl text-center text-white"}>NBA Tier List</h1>
      </div>
      <TierBoard />
    </main>

  );
}
