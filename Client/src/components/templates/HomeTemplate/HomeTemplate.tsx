"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowDownRight, ArrowUpRight, Code2, GitBranch, Menu, Terminal, X } from "lucide-react";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { onLenis } from "@/lib/lenis";

gsap.registerPlugin(ScrollTrigger);

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
  const [menuOpen, setMenuOpen] = useState(false);
  const [showFloatNav, setShowFloatNav] = useState(false);
  const reduceMotion = useReducedMotion();
  const previewStageRef = useRef<HTMLDivElement>(null);
  const previewRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const stage = previewStageRef.current;
    const preview = previewRef.current;
    if (!stage || !preview || reduceMotion) return;

    const context = gsap.context(() => {
      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: preview,
          start: "top 40%",
          end: () => `+=${Math.round(window.innerHeight * 0.65)}`,
          pin: stage,
          pinSpacing: true,
          scrub: 1,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });

      timeline
        .to(preview, {
          width: () => Math.min(stage.clientWidth, window.innerWidth * 0.95, 1300),
          height: () => window.innerHeight * 0.8,
          maxWidth: "none",
          y: () => -window.innerHeight * 0.18,
          duration: 0.65,
          ease: "none",
        }, 0)
        .to(preview, {
          y: () => -window.innerHeight * 0.72,
          duration: 0.35,
          ease: "none",
        });
    }, stage);

    return () => context.revert();
  }, [reduceMotion]);

  const closeMenu = () => {
    const detachLenis = onLenis((lenis) => {
      lenis.start();
      return () => {};
    });
    detachLenis();
    setMenuOpen(false);
  };

  useEffect(() => {
    const updateFloatNav = () => {
      const shouldShow = window.scrollY >= 100;
      setShowFloatNav(shouldShow);
      if (!shouldShow) setMenuOpen(false);
    };

    updateFloatNav();
    window.addEventListener("scroll", updateFloatNav, { passive: true });
    return () => window.removeEventListener("scroll", updateFloatNav);
  }, []);

  useEffect(() => {
    if (!menuOpen) return;

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", closeOnEscape);
    const detachLenis = onLenis((lenis) => {
      lenis.stop();
      return () => lenis.start();
    });
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", closeOnEscape);
      detachLenis();
    };
  }, [menuOpen]);

  return (
    <main className="bb-page" id="home">
      <div className={`bb-float-nav${showFloatNav ? " is-visible" : ""}${menuOpen ? " is-menu-open" : ""}`}>
        <button className="bb-menu-button" type="button" aria-label={menuOpen ? "Close page navigation" : "Open page navigation"} aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={17} /> : <Menu size={17} />}
        </button>
      </div>
      <AnimatePresence>
      {menuOpen && <motion.div key="menu-backdrop" className="bb-drawer-backdrop" aria-hidden="true" onClick={() => setMenuOpen(false)} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: reduceMotion ? 0 : 0.28 }} />}
      {menuOpen && <motion.nav key="menu-drawer" className="bb-menu-drawer" aria-label="Quick navigation" aria-modal="true" role="dialog" initial={{ x: "100%" }} animate={{ x: 0 }} exit={{ x: "100%" }} transition={reduceMotion ? { duration: 0 } : { duration: 0.42, ease: [0.22, 1, 0.36, 1] }}>
        <div className="drawer-topline"><a className="bb-mark" href="#home" onClick={closeMenu}><span>BB</span> BYTEBIN</a><span>MENU / 01</span></div>
        <p className="drawer-kicker">A LITTLE DIRECTION</p>
        <h2>WHERE TO<br />NEXT<span>?</span></h2>
        <div className="drawer-links">
          <a href="#home" onClick={closeMenu}><span>01</span> HOME <ArrowUpRight size={18}/></a>
          <a href="#story" onClick={closeMenu}><span>02</span> OUR IDEA <ArrowUpRight size={18}/></a>
          <a href="#tools" onClick={closeMenu}><span>03</span> THE TOOLKIT <ArrowUpRight size={18}/></a>
          <a href="#updates" onClick={closeMenu}><span>04</span> A NOTE TO MAKERS <ArrowUpRight size={18}/></a>
        </div>
        <p className="drawer-footnote">GO MAKE SOMETHING GOOD. <span>✳</span></p>
      </motion.nav>}
      </AnimatePresence>
      <header className="bb-nav">
        <a className="bb-mark" href="#home" aria-label="ByteBin home"><span>BB</span> BYTEBIN</a>
        <nav aria-label="Main navigation">
          <a href="#tools">THE TOOLKIT</a><a href="#story">OUR IDEA</a><a href="#updates">UPDATES</a>
        </nav>
        <a className="bb-nav-cta" href="#tools">OPEN THE TOOLKIT <ArrowUpRight size={14} /></a>
      </header>

      <section className="bb-hero" aria-labelledby="hero-title">
        <motion.div className="bb-hero-copy" initial={reduceMotion ? false : { opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={reduceMotion ? { duration: 0 } : { duration: 0.65, ease: [0.22, 1, 0.36, 1] }}>
          <p className="bb-kicker"><span className="status-dot" /> A SMALL TOOLBOX FOR BIG IDEAS</p>
          <h1 id="hero-title">MAKE<br />CODE <span>MOVE.</span></h1>
          <p className="bb-intro">Your ideas are already somewhere between a GitHub repo and “I’ll do it later.” ByteBin helps you bring them to life.</p>
          <a className="bb-button" href="#tools">EXPLORE BYTEBIN <ArrowDownRight size={16} /></a>
        </motion.div>

        <div className="bb-preview-stage" ref={previewStageRef}>
        <div className="bb-window" ref={previewRef} aria-label="ByteBin code workspace preview">
          <div className="bb-window-bar"><span className="window-lights">● ● ●</span><span>bytebin / workspace</span><Code2 size={15} /></div>
          <div className="bb-window-content">
            <div className="bb-window-aside"><span>⌂</span><span>⌘</span><span>⑂</span><span>＋</span></div>
            <div className="bb-window-main">
              <div className="bb-window-heading"><div><small>YOUR WORKSPACE</small><h2>Good things<br />are in progress.</h2></div><span className="pixel-star">✳</span></div>
              <div className="repo-card"><div className="repo-icon"><GitBranch size={16} /></div><div><strong>little-project</strong><small>main · updated just now</small></div><span className="repo-live">● LIVE</span></div>
              <div className="code-card"><div className="code-top"><span><Terminal size={13} /> quick-push.js</span><span>•••</span></div><pre><code><i>01</i> <b>const</b> idea = <em>&quot;something good&quot;</em>;<br /><i>02</i> <b>await</b> bytebin.push(idea);<br /><i>03</i> <label>// ship it, see what happens</label></code></pre></div>
              <div className="window-footer"><span>✦ &nbsp; READY WHEN YOU ARE</span><span>⌘ K</span></div>
            </div>
          </div>
        </div>
        </div>
        <span className="bb-orbit orbit-one" aria-hidden="true">✳</span><span className="bb-orbit orbit-two" aria-hidden="true">✣</span>
        <div className="bb-hero-bottom"><span>LESS SETUP. MORE MAKING.</span><span>SCROLL A LITTLE <ArrowDownRight size={13} /></span></div>
      </section>

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
    </main>
  );
}
