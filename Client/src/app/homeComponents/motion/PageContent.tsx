"use client";

import { ReactNode } from "react";
import { m, useScroll, useSpring, useReducedMotion } from "framer-motion";
import { pageEnter } from "./variants";

interface PageContentProps {
  children: ReactNode;
}

export function PageContent({ children }: PageContentProps) {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });
  const shouldReduceMotion = useReducedMotion();

  return (
    <>
      <m.div
        className="fixed top-0 left-0 right-0 h-1 bg-[#D3ACFF] origin-left z-50"
        style={{ scaleX }}
      />
      {shouldReduceMotion ? (
        <div className="w-full h-full">
          {children}
        </div>
      ) : (
        <m.div
          variants={pageEnter}
          initial="hidden"
          animate="visible"
          className="w-full h-full"
        >
          {children}
        </m.div>
      )}
    </>
  );
}
