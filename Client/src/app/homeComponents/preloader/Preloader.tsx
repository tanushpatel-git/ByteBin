"use client";

import { m, AnimatePresence, useReducedMotion } from "framer-motion";
import { BrandLogo } from "./BrandLogo";
import { LoaderTerminal } from "./LoaderTerminal";
import { LoaderGrid } from "./LoaderGrid";
import { LoaderParticles } from "./LoaderParticles";
import { overlayVariants, blobOneVariants, blobTwoVariants } from "./loaderVariants";
import { useLoaderContext } from "./LoaderProvider";

export function Preloader() {
  const { isLoaderComplete, shouldUnmountLoader } = useLoaderContext();
  const shouldReduceMotion = useReducedMotion();

  if (shouldUnmountLoader) return null;

  return (
    <AnimatePresence>
      {!isLoaderComplete && (
        <m.div
          variants={overlayVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#FBF5EE] overflow-hidden"
        >
          {/* Background Blobs */}
          {!shouldReduceMotion && (
            <>
              <m.div
                variants={blobOneVariants}
                className="absolute top-1/4 left-1/4 w-[600px] h-[600px] rounded-full bg-[#D3ACFF]/30 blur-[120px] pointer-events-none mix-blend-multiply"
              />
              <m.div
                variants={blobTwoVariants}
                className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] rounded-full bg-[#F5D7C8]/40 blur-[100px] pointer-events-none mix-blend-multiply"
              />
            </>
          )}

          {/* Noise & Particles */}
          {!shouldReduceMotion && <LoaderParticles />}

          {/* Main Content */}
          <div className="relative z-20 flex flex-col items-center w-full max-w-5xl px-6">
            <BrandLogo />
            <LoaderTerminal />
          </div>

          {/* Floating UI Elements */}
          {!shouldReduceMotion && <LoaderGrid />}
        </m.div>
      )}
    </AnimatePresence>
  );
}
