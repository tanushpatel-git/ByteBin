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
    </main>
  );
}
