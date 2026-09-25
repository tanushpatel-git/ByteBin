"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Header from "@/components/organisms/Landing/Header";
import Hero from "@/components/organisms/Landing/Hero";

const tools = ["REPO EXPLORER", "CODE PUSH", "AI ASSIST", "BLOG ENGINE"];

function Reveal({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const reduceMotion = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reduceMotion ? false : { opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.16 }}
      transition={reduceMotion ? { duration: 0 } : { duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

export default function HomeTemplate() {
  const reduceMotion = useReducedMotion();

  return (
    <main className="bb-page" id="home">
      <Header />

      <Hero />

      <section className="bb-story" id="story">
        <Reveal><div className="story-label"><span>01 / THE IDEA</span><span>BUILT FOR THE IN-BETWEEN</span></div></Reveal>
        <Reveal delay={0.06}><div className="story-grid">
          <h2>YOU HAD<br />A <span>GOOD IDEA.</span></h2>
          <div className="story-copy"><p className="story-lead">The bit between “this could be cool” and “it’s out there” shouldn’t be the hard part.</p><p>ByteBin brings the everyday GitHub jobs into one friendly place: find what you need, make a change, and get it out the door. Less tab juggling. More little wins.</p><a href="#tools" className="text-link">MEET YOUR NEW TOOLBOX <ArrowUpRight size={14} /></a></div>
        </div></Reveal>
        <div className="pixel-sun" aria-hidden="true"><span>✳</span></div>
      </section>

      <section className="bb-tools" id="tools">
        <Reveal><div className="tools-heading"><div><span className="section-number">02 / THE TOOLKIT</span><h2>A FEW GOOD<br />WAYS TO <span>GET THERE.</span></h2></div><p>Pick up the tool you need. Put your attention back on the idea.</p></div></Reveal>
        <div className="tool-list">{tools.map((tool, i) => <motion.a className="tool-row" href="#updates" key={tool} initial={reduceMotion ? false : { opacity: 0, x: -14 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.5 }} transition={reduceMotion ? { duration: 0 } : { duration: 0.4, delay: i * 0.05 }}><span className="tool-index">0{i + 1}</span><strong>{tool}</strong><span className="tool-note">{["Find your way around a repository.", "Send code changes without the ceremony.", "Get a hand when the blank page bites.", "Share what you’ve been making."][i]}</span><ArrowUpRight className="tool-arrow" size={18} /></motion.a>)}</div>
      </section>

      <section className="bb-note" id="updates"><Reveal className="note-content"><div className="note-stamp">A NOTE<br />TO MAKERS</div><div><span className="section-number">03 / A FRIENDLY REMINDER</span><h2>“IT DOESN’T<br />HAVE TO BE<br /><span>PERFECT.</span>”</h2><p>Make the thing. Share the thing. Learn a thing. Then do it again.</p></div></Reveal><div className="note-doodle" aria-hidden="true">✳<small>MAKE<br />SOMETHING</small></div></section>

      <footer className="bb-footer"><a className="bb-mark" href="#home"><span>BB</span> BYTEBIN</a><p>MADE FOR THE JOY OF MAKING THINGS.</p><a href="#home">BACK TO TOP ↑</a><small>© 2026 BYTEBIN</small></footer>
    </main>
  );
}
