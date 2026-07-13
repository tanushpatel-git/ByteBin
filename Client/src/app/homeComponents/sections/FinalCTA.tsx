"use client";

import Link from "next/link";
import { ArrowRight, BookOpen } from "lucide-react";
import { m, useReducedMotion } from "framer-motion";
import { Reveal } from "../motion/Reveal";
import { MagneticButton } from "../motion/MagneticButton";

export function FinalCTA() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="py-24 px-6 md:px-12 bg-white">
      <div className="max-w-7xl mx-auto">
        <Reveal>
          <div className="relative rounded-[40px] md:rounded-[60px] bg-[#18181B] overflow-hidden flex flex-col items-center text-center px-6 py-24 md:py-32 z-10 border border-[#ECE3D8]">
            {/* Animated blobs */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <m.div
                animate={shouldReduceMotion ? {} : {
                  x: [0, 30, -30, 0],
                  y: [0, -40, 30, 0],
                }}
                transition={{ repeat: Infinity, duration: 22, ease: "linear" }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-[#D3ACFF]/20 blur-[120px] mix-blend-screen"
              />
              <m.div
                animate={shouldReduceMotion ? {} : {
                  x: [0, -30, 20, 0],
                  y: [0, 30, -20, 0],
                }}
                transition={{ repeat: Infinity, duration: 28, ease: "linear" }}
                className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full bg-[#F5D7C8]/20 blur-[100px] mix-blend-screen"
              />
            </div>

            <m.h2
              initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="text-4xl md:text-6xl font-bold text-white tracking-tight mb-8 max-w-3xl relative z-10"
            >
              Ready to ship your next project?
            </m.h2>

            <m.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.15 }}
              className="text-[18px] md:text-[20px] text-white/70 mb-12 max-w-2xl relative z-10"
            >
              Join thousands of developers building, deploying, and scaling on ByteBin. Start for free today.
            </m.p>

            <m.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center gap-4 w-full justify-center relative z-10"
            >
              <MagneticButton intensity={12}>
                <Link
                  href="/register"
                  className="w-full sm:w-auto flex items-center justify-center gap-2 bg-white text-[#18181B] px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-all shadow-[0_0_20px_rgba(211,172,255,0.3)] hover:shadow-[0_0_30px_rgba(211,172,255,0.5)]"
                >
                  Start Building
                  <ArrowRight size={20} />
                </Link>
              </MagneticButton>
              <MagneticButton intensity={8}>
                <Link
                  href="#"
                  className="w-full sm:w-auto flex items-center justify-center gap-2 bg-white/10 text-white border border-white/20 px-8 py-4 rounded-full font-medium hover:bg-white/20 transition-all"
                >
                  <BookOpen size={20} />
                  View Documentation
                </Link>
              </MagneticButton>
            </m.div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
