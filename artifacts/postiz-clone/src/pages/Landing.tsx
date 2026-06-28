import Navbar from "@/components/Navbar";
import TopBar from "@/components/TopBar";
import Hero from "@/components/Hero";
import ToggleSection from "@/components/ToggleSection";
import AllTools from "@/components/AllTools";
import PowerContent from "@/components/PowerContent";
import SocialChannels from "@/components/SocialChannels";
import MarqueeReviews from "@/components/MarqueeReviews";
import Pricing from "@/components/Pricing";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

export default function Landing() {
  return (
    <div className="min-h-screen bg-[#0E0E0E] text-white w-full overflow-x-hidden font-sans selection:bg-[#22c55e]/30 selection:text-white">
      <TopBar />
      <Navbar />

      <main className="flex flex-col w-full">
        <Hero />
        <ToggleSection />
        <AppPreview />
        <AllTools />
        <PowerContent />
        <SocialChannels />
        <MarqueeReviews />
        <Pricing />
        <FinalCTA />
      </main>

      <Footer />
    </div>
  );
}
