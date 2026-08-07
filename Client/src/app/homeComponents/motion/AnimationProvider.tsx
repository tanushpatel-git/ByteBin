"use client";

import { ReactNode } from "react";
import { LazyMotion, domAnimation, MotionConfig } from "framer-motion";

interface AnimationProviderProps {
  children: ReactNode;
}

export function AnimationProvider({ children }: AnimationProviderProps) {
  return (
    <LazyMotion features={domAnimation}>
      <MotionConfig transition={{ ease: [0.22, 1, 0.36, 1], duration: 0.6 }}>
        {children}
      </MotionConfig>
    </LazyMotion>
  );
}
