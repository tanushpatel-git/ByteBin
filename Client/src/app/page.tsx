import CTA from "@/components/CTA";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Premium from "@/components/Premium";

export default function Page() {
  return (
    <div className="min-h-screen overflow-x-clip bg-white text-[#101d4d]">
      <div className="relative">
        {/* Sky backdrop: sticks to the viewport while the hero is on screen,
            then scrolls away with the page once the hero ends. */}
        <div
          aria-hidden="true"
          className="pointer-events-none sticky top-0 z-0 h-screen w-full overflow-hidden"
          style={{
            backgroundImage: "url('/assets/backdropimage.png')",
            backgroundSize: "cover",
            backgroundPosition: "center top",
            marginBottom: "-100vh",
          }}
        >
          <div className="absolute inset-0 bg-white/30" />
        </div>
        <Navbar />
        <div className="relative z-10">
          <Hero />
        </div>
      </div>

      <div className="relative -mt-200 z-10 bg-white">
        <Features />
        <Premium />
        <CTA />
        <Footer />
      </div>
    </div>
  );
}