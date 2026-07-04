import { Navigation } from "./homeComponents/Navigation";
import { Hero } from "./homeComponents/Hero";
import { TrustedBy } from "./homeComponents/TrustedBy";
import { FeaturesGrid } from "./homeComponents/FeaturesGrid";
import { InteractivePreview } from "./homeComponents/InteractivePreview";
import { BentoSection } from "./homeComponents/BentoSection";
import { HowItWorks } from "./homeComponents/HowItWorks";
import { Testimonials } from "./homeComponents/Testimonials";
import { Pricing } from "./homeComponents/Pricing";
import { FinalCTA } from "./homeComponents/FinalCTA";
import { Footer } from "./homeComponents/Footer";

export const metadata = {
  title: "ByteBin | Build software. Deploy anywhere.",
  description: "The ultimate developer platform for managing repositories, automating CI/CD pipelines, and collaborating on deployments seamlessly from edge to cloud.",
};

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#FBF5EE] font-sans selection:bg-[#D3ACFF]/30 selection:text-[#18181B]">
      <Navigation />
      <main>
        <Hero />
        <TrustedBy />
        <FeaturesGrid />
        <InteractivePreview />
        <BentoSection />
        <HowItWorks />
        <Testimonials />
        <Pricing />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}