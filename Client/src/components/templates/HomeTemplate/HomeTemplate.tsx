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

  return <main className="bb-page" id="home" />;
}
