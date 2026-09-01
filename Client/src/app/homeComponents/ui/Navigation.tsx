"use client";

import { useState } from "react";
import Link from "next/link";
import { m, AnimatePresence, useScroll, useMotionValueEvent, useReducedMotion, Variants } from "framer-motion";
import { Menu, X } from "lucide-react";
import { MagneticButton } from "../motion/MagneticButton";

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const itemVariant: Variants = {
  hidden: { opacity: 0, y: -10 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { type: "spring", stiffness: 300, damping: 24 }
  },
};

export function Navigation() {
  const [navState, setNavState] = useState<"transparent" | "glass" | "solid">("transparent");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();
  const shouldReduceMotion = useReducedMotion();

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest <= 20) {
      setNavState("transparent");
    } else if (latest > 20 && latest < 100) {
      setNavState("glass");
    } else {
      setNavState("solid");
    }
  });

  const getNavClasses = () => {
    switch (navState) {
      case "transparent":
        return "bg-transparent py-6 border-transparent";
      case "glass":
        return "bg-white/70 backdrop-blur-md py-4 border-[#ECE3D8]/40 shadow-sm";
      case "solid":
        return "bg-white py-4 border-[#ECE3D8]/60 shadow-md";
    }
  };

  const navLinks = [
    { name: "Features", href: "#" },
    { name: "Solutions", href: "#" },
    { name: "Pricing", href: "#" },
    { name: "Docs", href: "#" },
    { name: "Blog", href: "#" },
  ];

  return (
    <m.header
      initial="hidden"
      animate="visible"
      variants={!shouldReduceMotion ? staggerContainer : {}}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${getNavClasses()}`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Logo */}
        <m.div variants={itemVariant}>
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-[#D3ACFF] to-[#a78bfa] flex items-center justify-center text-white font-bold text-[14px] shadow-sm shadow-[#D3ACFF]/30 group-hover:shadow-md transition-shadow">
              B
            </div>
            <span className="font-bold text-[18px] text-[#18181B] tracking-tight">
              ByteBin
            </span>
          </Link>
        </m.div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <m.div key={link.name} variants={itemVariant}>
              <Link
                href={link.href}
                className="group relative text-[14px] font-medium text-[#6B7280] hover:text-[#18181B] transition-colors"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-[#D3ACFF] transition-all duration-300 ease-out group-hover:w-full"></span>
              </Link>
            </m.div>
          ))}
        </nav>

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center gap-4">
          <m.div variants={itemVariant}>
            <Link
              href="/login"
              className="text-[14px] font-medium text-[#6B7280] hover:text-[#18181B] transition-colors px-4 py-2"
            >
              Sign In
            </Link>
          </m.div>
          <m.div variants={itemVariant}>
            <MagneticButton intensity={15}>
              <Link
                href="/register"
                className="block text-[14px] font-medium bg-[#18181B] text-white px-5 py-2.5 rounded-full hover:bg-black/80 transition-all shadow-[0_0_15px_rgba(211,172,255,0.3)] hover:shadow-[0_0_20px_rgba(211,172,255,0.5)]"
              >
                Start Building
              </Link>
            </MagneticButton>
          </m.div>
        </div>

        {/* Mobile Toggle */}
        <m.button
          variants={itemVariant}
          className="md:hidden text-[#18181B]"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </m.button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <m.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute top-full left-0 right-0 bg-[#FBF5EE] border-b border-[#ECE3D8] shadow-lg md:hidden flex flex-col p-6 gap-4"
          >
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-[16px] font-medium text-[#18181B] py-2 border-b border-[#ECE3D8]/50"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <div className="flex flex-col gap-3 mt-4">
              <Link
                href="/login"
                className="text-[16px] font-medium text-[#18181B] text-center py-3 rounded-xl border border-[#ECE3D8]"
                onClick={() => setMobileMenuOpen(false)}
              >
                Sign In
              </Link>
              <Link
                href="/register"
                className="text-[16px] font-medium bg-[#18181B] text-white text-center py-3 rounded-xl shadow-[0_0_15px_rgba(211,172,255,0.3)]"
                onClick={() => setMobileMenuOpen(false)}
              >
                Start Building
              </Link>
            </div>
          </m.div>
        )}
      </AnimatePresence>
    </m.header>
  );
}
