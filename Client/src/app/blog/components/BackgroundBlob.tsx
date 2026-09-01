"use client";

import { motion } from "framer-motion";

export default function BackgroundBlob() {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute left-[-120px] top-[150px] h-[350px] w-[350px] rounded-full bg-[#FFD9B0]/20 blur-[90px] pointer-events-none z-0"
      />
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 }}
        className="absolute right-[-120px] bottom-[100px] h-[350px] w-[350px] rounded-full bg-[#D7C8FF]/20 blur-[90px] pointer-events-none z-0"
      />
    </>
  );
}
