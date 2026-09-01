"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import { motion, useMotionValue, useSpring, animate } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import BlogCard from "./BlogCard";
import type { Blog } from "@/lib/blogsApi";

interface Props {
  blogs: Blog[];
}

const ALL_MONTHS = [
  "JANUARY",
  "FEBRUARY",
  "MARCH",
  "APRIL",
  "MAY",
  "JUNE",
  "JULY",
  "AUGUST",
  "SEPTEMBER",
  "OCTOBER",
  "NOVEMBER",
  "DECEMBER",
];

export default function BlogCarousel({ blogs }: Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  const rawX = useMotionValue(0);
  const smoothX = useSpring(rawX, { stiffness: 220, damping: 30, restDelta: 0.5 });

  const [isDragging, setIsDragging] = useState(false);
  const [constraints, setConstraints] = useState({ left: 0, right: 0 });
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  // Dynamic constraint calculation
  const updateConstraints = useCallback(() => {
    if (!trackRef.current) return;
    const trackW = trackRef.current.scrollWidth;
    const viewW = window.innerWidth;
    const paddingOffset = viewW * 0.08;
    const maxScroll = Math.max(0, trackW - viewW + paddingOffset);
    setConstraints({ left: -maxScroll, right: 0 });
  }, []);

  useEffect(() => {
    updateConstraints();
    window.addEventListener("resize", updateConstraints);
    const timeout = setTimeout(updateConstraints, 350);
    return () => {
      window.removeEventListener("resize", updateConstraints);
      clearTimeout(timeout);
    };
  }, [blogs, updateConstraints]);

  // Scroll status
  useEffect(() => {
    return rawX.on("change", (latestX) => {
      setCanScrollLeft(latestX < -10);
      setCanScrollRight(latestX > constraints.left + 10);
    });
  }, [rawX, constraints.left]);

  // Mouse wheel & trackpad horizontal scrolling
  const handleWheel = (e: React.WheelEvent) => {
    const delta = Math.abs(e.deltaX) > Math.abs(e.deltaY) ? e.deltaX : e.deltaY;
    const currentX = rawX.get();
    const newX = Math.min(constraints.right, Math.max(constraints.left, currentX - delta * 1.5));
    rawX.set(newX);
  };

  // Step scroll with arrow buttons
  const scrollStep = (direction: "left" | "right") => {
    const stepAmount = window.innerWidth * 0.45;
    const currentX = rawX.get();
    const targetX = direction === "left"
      ? Math.min(constraints.right, currentX + stepAmount)
      : Math.max(constraints.left, currentX - stepAmount);

    animate(rawX, targetX, {
      duration: 0.6,
      ease: [0.19, 1, 0.22, 1],
    });
  };

  // Scroll to article in specific month
  const scrollToMonth = (monthIndex: number) => {
    const cardIndex = blogs.findIndex(b => {
      if (!b.createdAt) return false;
      return new Date(b.createdAt).getMonth() === monthIndex;
    });

    if (cardIndex !== -1 && trackRef.current) {
      const cardEl = trackRef.current.children[cardIndex] as HTMLElement;
      if (cardEl) {
        const offsetLeft = cardEl.offsetLeft - window.innerWidth * 0.08;
        const targetX = Math.min(0, Math.max(constraints.left, -offsetLeft));
        animate(rawX, targetX, { duration: 0.8, ease: [0.19, 1, 0.22, 1] });
      }
    }
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") scrollStep("left");
      if (e.key === "ArrowRight") scrollStep("right");
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [constraints]);

  return (
    <div
      ref={containerRef}
      onWheel={handleWheel}
      className="fixed bottom-0 left-0 right-0 pb-[12vh] md:pb-[14vh] overflow-visible z-20"
      style={{ cursor: isDragging ? "grabbing" : "grab" }}
    >
      {/* ─── LEFT ARROW GLIDE BUTTON ─────────────────────────────────── */}
      {canScrollLeft && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            scrollStep("left");
          }}
          aria-label="Scroll left"
          className="hidden md:flex absolute left-6 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/90 hover:bg-white text-slate-800 border border-slate-200/80 shadow-lg items-center justify-center z-30 transition-all hover:scale-105 active:scale-95 backdrop-blur-sm"
        >
          <ChevronLeft size={20} />
        </button>
      )}

      {/* ─── RIGHT ARROW GLIDE BUTTON ────────────────────────────────── */}
      {canScrollRight && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            scrollStep("right");
          }}
          aria-label="Scroll right"
          className="hidden md:flex absolute right-6 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/90 hover:bg-white text-slate-800 border border-slate-200/80 shadow-lg items-center justify-center z-30 transition-all hover:scale-105 active:scale-95 backdrop-blur-sm"
        >
          <ChevronRight size={20} />
        </button>
      )}

      {/* ─── HORIZONTAL DRAGGABLE TRACK ──────────────────────────────── */}
      <motion.div
        ref={trackRef}
        drag="x"
        dragConstraints={constraints}
        dragElastic={0.08}
        dragTransition={{ bounceStiffness: 280, bounceDamping: 35 }}
        style={{ x: isDragging ? rawX : smoothX }}
        onDragStart={() => setIsDragging(true)}
        onDragEnd={() => setIsDragging(false)}
        className="flex items-end pl-[6vw] select-none will-change-transform"
      >
        {/* Carousel Cards */}
        {blogs.map((blog, i) => (
          <BlogCard
            key={blog._id}
            blog={blog}
            index={i + 1}
            isDragging={isDragging}
          />
        ))}

        {/* ─── END-OF-TRACK TIMELINE SECTION (MATCHING TLB EXACTLY) ─── */}
        <div className="flex-shrink-0 self-end pl-8 md:pl-16 pr-16 md:pr-32 flex items-end">
          <div className="border-l border-slate-300/80 pl-8 md:pl-12 py-2">
            {/* Header label */}
            <div className="flex items-center gap-3 mb-6">
              <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-[#8C867A] font-semibold">
                TIMELINE ARCHIVE
              </span>
              <span className="h-[1px] w-8 bg-slate-300" />
            </div>

            {/* Months List */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-x-10 md:gap-x-14 gap-y-4 font-mono text-[11px] md:text-[12px] uppercase tracking-[0.2em]">
              {ALL_MONTHS.map((monthName, idx) => {
                const monthBlogs = blogs.filter(
                  b => b.createdAt && new Date(b.createdAt).getMonth() === idx
                );
                const count = monthBlogs.length;
                const hasBlogs = count > 0;

                return (
                  <button
                    key={monthName}
                    onClick={() => hasBlogs && scrollToMonth(idx)}
                    disabled={!hasBlogs}
                    className={`text-left flex items-center justify-between gap-4 py-1.5 border-b transition-colors group ${
                      hasBlogs
                        ? "border-slate-300 hover:border-slate-900 cursor-pointer text-slate-800 hover:text-black font-semibold"
                        : "border-slate-200/60 cursor-default text-slate-400 opacity-60"
                    }`}
                  >
                    <span className="transition-transform duration-200 group-hover:translate-x-1">
                      {monthName}
                    </span>
                    <span className="text-[10px] text-slate-400 group-hover:text-slate-700">
                      {String(count).padStart(2, "0")}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Trailing space buffer */}
        <div className="min-w-[6vw] shrink-0 h-1" />
      </motion.div>
    </div>
  );
}
