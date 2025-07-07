import MainLayout from "@/layout/MainLayout";
import MeetTheFriends from "@/components/MeetTheFriends";
import RegionBanner from "@/components/RegionBanner";
import PeruRegionsShowcase from "@/components/PeruRegionsShowcase";
//import PeruRegionsDecorated from "@/components/PeruRegionsDecorated";
//import LeafyBackgroundSection from "@/components/LeafyBackgroundSection";
import VideoSection from "@/components/VideoSection";

export default function Home() {
  return (
    <MainLayout>
      <MeetTheFriends />
      <RegionBanner />
      <VideoSection url="/videos/section-llama-video.mp4" title="Llama" />
      <VideoSection url="/videos/section-tucan-video.mp4" title="Tucán" />
      <VideoSection url="/videos/section-cuy-video.mp4" title="Cuy" />
      <VideoSection url="/videos/section-lobomarino-video.mp4" title="Lobo Marino" />
      <PeruRegionsShowcase />
      {/*<PeruRegionsDecorated />*/}
      {/*<LeafyBackgroundSection />*/}
    </MainLayout>
  );
}