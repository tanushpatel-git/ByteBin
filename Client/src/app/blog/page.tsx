"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { getBlogs, Blog } from "@/lib/blogsApi";
import BlogHeader from "./components/BlogHeader";
import BlogCarousel from "./components/BlogCarousel";

const FALLBACK_BLOGS: Partial<Blog>[] = [
  {
    _id: "mock-1",
    title: "Defective Units: Volume One",
    content: "An exploration of glitches, physical imperfections, and artistic hardware modifications. Exploring how defects inspire digital and industrial design aesthetics.",
    coverImage: "",
    views: 1420,
    status: "published",
    author: { _id: "a1", name: "Vedant Gupta", email: "v@bytebin.com" },
    createdAt: new Date("2024-03-10").toISOString(),
    updatedAt: new Date("2024-03-10").toISOString(),
  },
  {
    _id: "mock-2",
    title: "Edge Functions: A Global Playbook",
    content: "The architectural shift towards decentralized computing. How edge networks reduce latency to single-digit milliseconds by executing logic closer to the user.",
    coverImage: "",
    views: 896,
    status: "published",
    author: { _id: "a2", name: "Aarav Shah", email: "a@bytebin.com" },
    createdAt: new Date("2024-05-22").toISOString(),
    updatedAt: new Date("2024-05-22").toISOString(),
  },
  {
    _id: "mock-3",
    title: "Minimalism in Developer Interfaces",
    content: "Why software designed for engineers is shifting towards sleek typography, heavy use of whitespace, and quiet off-white palettes like ByteBin's design language.",
    coverImage: "",
    views: 2314,
    status: "published",
    author: { _id: "a3", name: "Priya Rajan", email: "p@bytebin.com" },
    createdAt: new Date("2024-07-01").toISOString(),
    updatedAt: new Date("2024-07-01").toISOString(),
  },
  {
    _id: "mock-4",
    title: "The Legend of Phil Shao",
    content: "A digital reflection of skate culture, street style, and standard-def video loops that shaped the visual language of the late 90s web culture.",
    coverImage: "",
    views: 1120,
    status: "published",
    author: { _id: "a4", name: "Sam Cruz", email: "s@bytebin.com" },
    createdAt: new Date("2024-09-14").toISOString(),
    updatedAt: new Date("2024-09-14").toISOString(),
  },
  {
    _id: "mock-5",
    title: "Rust in Production: Six Months Later",
    content: "What we learned shipping Rust to millions of requests per day at ByteBin. Zero-cost abstractions, fearless concurrency, and memory safety without a garbage collector.",
    coverImage: "",
    views: 3102,
    status: "published",
    author: { _id: "a1", name: "Vedant Gupta", email: "v@bytebin.com" },
    createdAt: new Date("2024-11-03").toISOString(),
    updatedAt: new Date("2024-11-03").toISOString(),
  },
];

const TITLE_LINE_1 = "THE";
const TITLE_LINE_2 = "BYTEBIN";

// Exponential cinematic easing curve
const ease = [0.16, 1, 0.3, 1] as const;

// Letter reveal animation variants
const letterVariants = {
  hidden: { y: "115%", opacity: 0, filter: "blur(4px)" },
  visible: (i: number) => ({
    y: "0%",
    opacity: 1,
    filter: "blur(0px)",
    transition: {
      duration: 1.1,
      ease,
      delay: i * 0.04,
    },
  }),
};

export default function BlogListPage() {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);
  const [animationPhase, setAnimationPhase] = useState<"initial" | "elevated">("initial");

  useEffect(() => {
    async function loadBlogs() {
      try {
        const res = await getBlogs();
        if (res.success && res.blogs && res.blogs.length > 0) {
          setBlogs(res.blogs);
        } else {
          setBlogs(FALLBACK_BLOGS as Blog[]);
        }
      } catch {
        setBlogs(FALLBACK_BLOGS as Blog[]);
      } finally {
        setLoading(false);
      }
    }
    loadBlogs();

    // Trigger the scale and elevate animation after initial reveal
    const timer = setTimeout(() => {
      setAnimationPhase("elevated");
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className="fixed inset-0 overflow-hidden select-none"
      style={{ background: "#FAFAF8", color: "#18181B" }}
    >
      {/* ─── RADIAL AMBIENT GLOW ────────────────────────────────────────── */}
      <motion.div
        animate={{
          scale: animationPhase === "elevated" ? 0.9 : 1.2,
          opacity: animationPhase === "elevated" ? 0.4 : 0.65,
          y: animationPhase === "elevated" ? -160 : 0,
        }}
        transition={{ duration: 1.6, ease }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70vw] h-[55vh] rounded-full pointer-events-none blur-[130px]"
        style={{
          background: "radial-gradient(ellipse at center, rgba(211, 172, 255, 0.75) 0%, rgba(168, 85, 247, 0.25) 45%, transparent 70%)",
        }}
      />

      {/* ─── FIXED MINIMAL HEADER ─────────────────────────────────────────── */}
      <motion.div
        initial={{ opacity: 0, y: -15 }}
        animate={{ opacity: animationPhase === "elevated" ? 1 : 0, y: animationPhase === "elevated" ? 0 : -15 }}
        transition={{ duration: 0.8, ease, delay: 0.2 }}
        className="relative z-50 pointer-events-auto"
      >
        <BlogHeader />
      </motion.div>

      {/* ─── MAIN HERO TITLE: ANIMATES FROM CENTER TO TOP ─────────────────── */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10">
        <motion.div
          animate={{
            y: animationPhase === "elevated" ? "-38vh" : "0vh",
            scale: animationPhase === "elevated" ? 0.32 : 1,
          }}
          transition={{
            duration: 1.6,
            ease,
          }}
          className="flex flex-col items-center justify-center text-center origin-center will-change-transform"
        >
          {/* Subtitle pill badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{
              opacity: animationPhase === "elevated" ? 0 : 1,
              y: animationPhase === "elevated" ? -20 : 0,
            }}
            transition={{ duration: 0.6, ease }}
            className="mb-4 inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#D3ACFF]/20 border border-[#D3ACFF]/40 text-[#7C3AED] font-mono text-[10px] uppercase tracking-[0.25em]"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#A855F7] animate-ping" />
            <span>Lookback Archive</span>
          </motion.div>

          {/* Line 1 — "THE" */}
          <div className="overflow-hidden leading-none -mb-3 md:-mb-6">
            <div className="flex justify-center">
              {TITLE_LINE_1.split("").map((char, i) => (
                <motion.span
                  key={`l1-${i}`}
                  custom={i}
                  variants={letterVariants}
                  initial="hidden"
                  animate="visible"
                  style={{
                    fontSize: "clamp(64px, 15vw, 210px)",
                    fontWeight: 900,
                    letterSpacing: "-0.04em",
                    lineHeight: 0.85,
                    fontFamily: "'Inter', 'Helvetica Neue', Arial, sans-serif",
                    color: "#18181B",
                    display: "block",
                  }}
                >
                  {char}
                </motion.span>
              ))}
            </div>
          </div>

          {/* Line 2 — "BYTEBIN" */}
          <div className="overflow-hidden leading-none">
            <div className="flex justify-center">
              {TITLE_LINE_2.split("").map((char, i) => (
                <motion.span
                  key={`l2-${i}`}
                  custom={TITLE_LINE_1.length + i}
                  variants={letterVariants}
                  initial="hidden"
                  animate="visible"
                  style={{
                    fontSize: "clamp(64px, 15vw, 210px)",
                    fontWeight: 900,
                    letterSpacing: "-0.04em",
                    lineHeight: 0.85,
                    fontFamily: "'Inter', 'Helvetica Neue', Arial, sans-serif",
                    color: "#18181B",
                    display: "block",
                  }}
                >
                  {char}
                </motion.span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      {/* ─── BOTTOM CAROUSEL ─────────────────────────────────────────────── */}
      <AnimatePresence>
        {animationPhase === "elevated" && !loading && (
          <motion.div
            key="carousel"
            initial={{ opacity: 0, y: 120 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 60 }}
            transition={{ duration: 1.1, ease, delay: 0.15 }}
            className="relative z-20 pointer-events-auto"
          >
            <BlogCarousel blogs={blogs} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
