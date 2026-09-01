"use client";

import Link from "next/link";
import { m, useMotionValue, Variants } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { ParallaxLayer } from "../motion/ParallaxLayer";
import { Floating } from "../motion/Floating";
import { MagneticButton } from "../motion/MagneticButton";
import { HeroTerminal } from "../ui/HeroTerminal";
import { HeroRepoCard } from "../ui/HeroRepoCard";
import { heroSequence } from "../motion/variants";

const textVariant: Variants = {
  hidden: { opacity: 0, y: 40, filter: "blur(12px)" },
  visible: { 
    opacity: 1, 
    y: 0, 
    filter: "blur(0px)",
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
  }
};

const fadeVariant: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" }
  }
};

const scaleVariant: Variants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
  }
};

export function Hero() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    // Normalize to -0.5 to 0.5
    mouseX.set(clientX / innerWidth - 0.5);
    mouseY.set(clientY / innerHeight - 0.5);
  };

  return (
    <section 
      onMouseMove={handleMouseMove}
      className="relative pt-24 pb-20 md:pt-32 md:pb-32 overflow-hidden bg-[#FBF5EE]"
    >
      {/* Background Blobs */}
      <ParallaxLayer mouseX={mouseX} mouseY={mouseY} movementX={18} movementY={18} className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full pointer-events-none z-0">
        <m.div 
          animate={{ x: [0, 20, -20, 0], y: [0, -30, 20, 0] }}
          transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
          className="absolute top-[20%] -left-[10%] w-[500px] h-[500px] rounded-full bg-[#F5D7C8]/40 blur-[120px] mix-blend-multiply opacity-70"
        />
        <m.div 
          animate={{ x: [0, -20, 20, 0], y: [0, 30, -20, 0] }}
          transition={{ repeat: Infinity, duration: 28, ease: "linear" }}
          className="absolute top-[10%] -right-[10%] w-[600px] h-[600px] rounded-full bg-[#D3ACFF]/30 blur-[150px] mix-blend-multiply opacity-70"
        />
        {/* Layer 2 Noise / Particles could be added here */}
      </ParallaxLayer>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <m.div 
          variants={heroSequence}
          initial="hidden"
          animate="visible"
          className="grid lg:grid-cols-2 gap-16 items-center"
        >
          {/* Left Content */}
          <div className="flex flex-col items-start text-left max-w-2xl">
            <m.div
              variants={fadeVariant}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#ECE3D8] text-[12px] font-medium text-[#6B7280] mb-8 shadow-sm"
            >
              <span className="flex h-2 w-2 rounded-full bg-[#D3ACFF]"></span>
              ByteBin 2.0 is now live
            </m.div>

            <h1 className="text-5xl md:text-7xl font-bold text-[#18181B] tracking-tight leading-[1.1] mb-6">
              <m.div variants={textVariant}>Build software.</m.div>
              <m.div variants={textVariant}>Deploy anywhere.</m.div>
              <m.div variants={textVariant} className="text-[#D3ACFF]">Scale without limits.</m.div>
            </h1>

            <m.p
              variants={fadeVariant}
              className="text-[18px] md:text-[20px] text-[#6B7280] leading-relaxed mb-10 max-w-xl"
            >
              The ultimate developer platform for managing repositories, automating CI/CD pipelines, and collaborating on deployments seamlessly from edge to cloud.
            </m.p>

            <m.div
              variants={scaleVariant}
              className="flex flex-wrap items-center gap-4"
            >
              <MagneticButton intensity={15}>
                <Link
                  href="/register"
                  className="group flex items-center gap-2 bg-[#18181B] text-white px-7 py-3.5 rounded-full font-medium hover:bg-black/80 transition-all shadow-[0_0_20px_rgba(211,172,255,0.4)] hover:shadow-[0_0_30px_rgba(211,172,255,0.6)]"
                >
                  Start Building
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </MagneticButton>
              <MagneticButton intensity={10}>
                <Link
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-white text-[#18181B] border border-[#ECE3D8] px-7 py-3.5 rounded-full font-medium hover:bg-gray-50 transition-colors shadow-sm hover:shadow-md"
                >
                  <FaGithub size={20} />
                  Continue with GitHub
                </Link>
              </MagneticButton>
            </m.div>
          </div>

          {/* Right Floating Product Preview */}
          <m.div
            variants={scaleVariant}
            className="relative h-[480px] sm:h-[550px] lg:h-[600px] w-full flex items-center justify-center lg:justify-end perspective-1000 overflow-hidden lg:overflow-visible"
          >
            <div className="relative w-full max-w-[500px] h-full flex flex-col items-center justify-center scale-[0.82] sm:scale-90 md:scale-100 origin-center">
              
              {/* Terminal Window */}
              <ParallaxLayer mouseX={mouseX} mouseY={mouseY} movementX={14} movementY={14} className="absolute z-30 top-4 sm:top-10 right-0 sm:right-2">
                <Floating duration={8} yOffset={8} delay={0.2} rotation={-1}>
                  <HeroTerminal />
                </Floating>
              </ParallaxLayer>

              {/* Repository Card */}
              <ParallaxLayer mouseX={mouseX} mouseY={mouseY} movementX={8} movementY={8} className="absolute z-20 top-[38%] left-0 sm:-left-6 md:-left-12">
                <Floating duration={9} yOffset={10} delay={1.5} rotation={1.5}>
                  <HeroRepoCard />
                </Floating>
              </ParallaxLayer>

              {/* Deployment Card */}
              <ParallaxLayer mouseX={mouseX} mouseY={mouseY} movementX={24} movementY={24} className="absolute z-10 bottom-4 sm:bottom-10 right-2 sm:right-4">
                <Floating duration={7} yOffset={6} delay={0.8} rotation={-0.5}>
                  <div className="w-[260px] sm:w-[280px] bg-white rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-[#ECE3D8] p-4 sm:p-5">
                    <h3 className="text-[#6B7280] font-medium text-[12px] mb-3 uppercase tracking-wider">Latest Deployment</h3>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="relative flex items-center justify-center w-3 h-3">
                        <div className="absolute inset-0 rounded-full bg-green-400 animate-ping opacity-75"></div>
                        <div className="relative w-2 h-2 rounded-full bg-green-500"></div>
                      </div>
                      <span className="text-[#18181B] font-medium text-[14px]">Ready</span>
                      <span className="text-[#6B7280] text-[12px] ml-auto">12s</span>
                    </div>
                    <div className="w-full h-1.5 bg-gray-100 rounded-full overflow-hidden">
                      <div className="w-[100%] h-full bg-[#D3ACFF]"></div>
                    </div>
                    <div className="flex justify-between mt-2 text-[10px] text-[#6B7280] font-medium">
                      <span>Build</span>
                      <span>Checks</span>
                      <span>Assign Domains</span>
                    </div>
                  </div>
                </Floating>
              </ParallaxLayer>

            </div>
          </m.div>
        </m.div>
      </div>
    </section>
  );
}
