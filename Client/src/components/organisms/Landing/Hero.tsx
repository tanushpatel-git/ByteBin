"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Play, Sparkles } from "lucide-react";
import LandingButton from "./LandingButton";
import Artwork from "./Artwork";

export default function Hero() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="lm-hero lm-shell" id="home">
      <motion.div className="lm-hero-copy" initial={reduceMotion ? false : { opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={reduceMotion ? { duration: 0 } : { duration: 0.7, ease: [0.22, 1, 0.36, 1] }}>
        <span className="lm-sticker"><Sparkles size={13} /> AI-POWERED DEV WORKSPACE</span>
        <h1>WRITE, AUTOMATE,<br />SHIP <span>FASTER.</span></h1>
        <p>ByteBin is the all-in-one platform for developers. Store your code, use AI to automate your workflow, make direct changes to GitHub, and learn from the developer community.</p>
        <div className="lm-hero-actions"><LandingButton href="/register">Start building free</LandingButton><a className="lm-watch-link" href="#ai-review"><span><Play size={13} fill="currentColor" /></span> Watch demo</a></div>
        <div className="lm-hero-proof lm-hero-toolrow"><span><Artwork crop="github"/>Connect GitHub</span><span><Artwork crop="bolt"/>AI automation</span><span><Artwork crop="code"/>Code repository</span><span><Artwork crop="star"/>Developer blog</span></div>
      </motion.div>

      <motion.div className="lm-hero-art" initial={reduceMotion ? false : { opacity: 0, y: 28, scale: 0.98 }} animate={{ opacity: 1, y: 0, scale: 1 }} transition={reduceMotion ? { duration: 0 } : { duration: 0.8, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}>
        <div className="lm-hero-blob" />
        <div className="lm-hero-image-frame"><Artwork crop="hero" className="lm-hero-image" /></div>
      </motion.div>
    </section>
  );
}
