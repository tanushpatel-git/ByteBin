import CTA from "@/components/organisms/CTA";
import Features from "@/components/organisms/Features";
import Footer from "@/components/organisms/Footer";
import Hero from "@/components/organisms/Hero";
import Navbar from "@/components/organisms/Navbar";
import Premium from "@/components/organisms/Premium";

export default function HomeTemplate() {
  return (
    <div className="min-h-screen overflow-x-clip bg-white text-[#101d4d]">
      <div className="relative">
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

      <div className="relative -mt-250 z-10 bg-white">
        <Features />
        <Premium />
        <CTA />
        <Footer />
      </div>
    </div>
  );
}