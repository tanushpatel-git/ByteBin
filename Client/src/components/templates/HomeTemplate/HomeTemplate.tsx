"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowDownRight, ArrowUpRight, Code2, GitBranch, Menu, Terminal, X } from "lucide-react";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { onLenis } from "@/lib/lenis";

gsap.registerPlugin(ScrollTrigger);

export default function HomeTemplate() {
  return <main className="bb-page" id="home" />;
}
