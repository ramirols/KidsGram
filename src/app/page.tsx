import MainLayout from "@/layout/MainLayout";
import MeetTheFriends from "@/components/MeetTheFriends";
import RegionBanner from "@/components/RegionBanner";
import PeruRegionsShowcase from "@/components/PeruRegionsShowcase";
import PeruRegionsDecorated from "@/components/PeruRegionsDecorated";
import LeafyBackgroundSection from "@/components/LeafyBackgroundSection";
export default function Home() {
  return (
    <MainLayout>
      <MeetTheFriends />
      <RegionBanner />
      <PeruRegionsShowcase />
      <PeruRegionsDecorated />
      <LeafyBackgroundSection />
    </MainLayout>
  );
}