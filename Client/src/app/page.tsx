import { Navigation } from "./homeComponents/ui/Navigation";
import { Hero } from "./homeComponents/sections/Hero";
import { TrustedBy } from "./homeComponents/sections/TrustedBy";
import { FeaturesGrid } from "./homeComponents/sections/FeaturesGrid";
import { InteractivePreview } from "./homeComponents/sections/InteractivePreview";
import { BentoSection } from "./homeComponents/sections/BentoSection";
import { HowItWorks } from "./homeComponents/sections/HowItWorks";
import { Testimonials } from "./homeComponents/sections/Testimonials";
import { Pricing } from "./homeComponents/sections/Pricing";
import { FinalCTA } from "./homeComponents/sections/FinalCTA";
import { Footer } from "./homeComponents/ui/Footer";
import { AnimationProvider } from "./homeComponents/motion/AnimationProvider";
import { LoaderProvider } from "./homeComponents/preloader/LoaderProvider";
import { PageContent } from "./homeComponents/motion/PageContent";
export const metadata = {
  title: "ByteBin | Build software. Deploy anywhere.",
  description: "The ultimate developer platform for managing repositories, automating CI/CD pipelines, and collaborating on deployments seamlessly from edge to cloud.",
};

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#FBF5EE] font-sans selection:bg-[#D3ACFF]/30 selection:text-[#18181B]">
      <LoaderProvider>
        <AnimationProvider>
          <PageContent>
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
          </PageContent>
        </AnimationProvider>
      </LoaderProvider>
    </div>
  );
}