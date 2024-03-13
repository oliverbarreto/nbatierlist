import Image from "next/image";
import TierBoard from "@/components/ui/tierboard/TierBoard";
import { titleFont } from "@/config/fonts";


export default function Home() {
  return (
    <main className="h-screen bg-black">
      <h1 className={"${titleFont.className} text-4xl text-center"}>NBA Tier List</h1>
      <TierBoard />
    </main>

  );
}
