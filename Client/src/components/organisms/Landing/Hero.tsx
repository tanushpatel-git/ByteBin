"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Play, Sparkles } from "lucide-react";
import LandingButton from "./LandingButton";

export default function Hero() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="lm-hero lm-shell" id="home">
      <motion.div className="lm-hero-copy" initial={reduceMotion ? false : { opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={reduceMotion ? { duration: 0 } : { duration: 0.7, ease: [0.22, 1, 0.36, 1] }}>
        <span className="lm-sticker"><Sparkles size={13} /> YOUR CODE, YOUR WAY</span>
        <h1>MAKE CODE<br />MOVE <span>FASTER.</span></h1>
        <p>From finding your way around a repo to shipping your next big idea, ByteBin gives developers a clearer path from code to done.</p>
        <div className="lm-hero-actions"><LandingButton href="#get-started">Start building free</LandingButton><a className="lm-watch-link" href="#workflow"><span><Play size={13} fill="currentColor" /></span> See how it works</a></div>
        <div className="lm-hero-proof"><div className="lm-proof-dots"><span>TB</span><span>AK</span><span>JR</span><span>+</span></div><p>Made for the people who make things.</p></div>
      </motion.div>
    </section>
  );
}
