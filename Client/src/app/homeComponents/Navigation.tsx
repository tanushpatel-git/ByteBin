"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Features", href: "#" },
    { name: "Solutions", href: "#" },
    { name: "Pricing", href: "#" },
    { name: "Docs", href: "#" },
    { name: "Blog", href: "#" },
  ];

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-transparent",
        isScrolled
          ? "bg-[#FBF5EE]/80 backdrop-blur-md border-[#ECE3D8] shadow-sm py-3"
          : "bg-transparent py-5"
      )}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-[#D3ACFF] to-[#a78bfa] flex items-center justify-center text-white font-bold text-[14px] shadow-sm shadow-[#D3ACFF]/30 group-hover:shadow-md transition-shadow">
            B
          </div>
          <span className="font-bold text-[18px] text-[#18181B] tracking-tight">
            ByteBin
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-[14px] font-medium text-[#6B7280] hover:text-[#18181B] transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center gap-4">
          <Link
            href="/login"
            className="text-[14px] font-medium text-[#6B7280] hover:text-[#18181B] transition-colors px-4 py-2"
          >
            Sign In
          </Link>
          <Link
            href="/register"
            className="text-[14px] font-medium bg-[#18181B] text-white px-5 py-2.5 rounded-full hover:bg-black/80 transition-all shadow-[0_0_15px_rgba(211,172,255,0.3)] hover:shadow-[0_0_20px_rgba(211,172,255,0.5)]"
          >
            Start Building
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-[#18181B]"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
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
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
