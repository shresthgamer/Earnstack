import Navbar from "@/components/Navbar";
import TopBar from "@/components/TopBar";
import Hero from "@/components/Hero";
import ToggleSection from "@/components/ToggleSection";
import AppPreview from "@/components/AppPreview";
import Features from "@/components/Features";
import HowItWorks from "@/components/HowItWorks";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

export default function Landing() {
  return (
    <div className="min-h-screen bg-[#0E0E0E] text-white w-full overflow-x-hidden font-sans selection:bg-[#FF4CE2]/30 selection:text-white">
      <TopBar />
      <Navbar />
      
      <main className="flex flex-col w-full">
        <Hero />
        <ToggleSection />
        <AppPreview />
        <Features />
        <HowItWorks />
        <Pricing />
        <Testimonials />
        <FinalCTA />
      </main>
      
      <Footer />
    </div>
  );
}
