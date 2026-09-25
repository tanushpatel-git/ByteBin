import Blog from "@/components/organisms/Landing/Blog";
import CallToAction from "@/components/organisms/Landing/CallToAction";
import CodeReview from "@/components/organisms/Landing/CodeReview";
import FAQ from "@/components/organisms/Landing/FAQ";
import Features from "@/components/organisms/Landing/Features";
import Footer from "@/components/organisms/Landing/Footer";
import Header from "@/components/organisms/Landing/Header";
import Hero from "@/components/organisms/Landing/Hero";
import HowItWorks from "@/components/organisms/Landing/HowItWorks";
import Pricing from "@/components/organisms/Landing/Pricing";
import Testimonials from "@/components/organisms/Landing/Testimonials";

export default function HomeTemplate() {
  return (
    <div className="lm-page" id="top">
      <Header />
      <main>
        <Hero />
        <HowItWorks />
        <Features />
        <CodeReview />
        <Blog />
        <Testimonials />
        <Pricing />
        <FAQ />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
}
