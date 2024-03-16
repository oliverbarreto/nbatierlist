import TierBoard from "@/components/ui/tierboard/TierBoard";
import TierHeader from "@/components/ui/tierboard/TierHeader";


export default function Home() {
  return (
    <main className="h-screen">
      <TierHeader title="NBA Teams Tier List"/>
      <TierBoard />
    </main>

  );
}
