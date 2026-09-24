"use client";

import { ArrowRight, Menu } from "lucide-react";
import { useEffect } from "react";
import { onLenis } from "@/lib/lenis";
import Button from "./Button";
import Logo from "./Logo";

const navLinks = ["Home", "Features", "Pricing", "About", "Blog"];

export default function Navbar() {
  useEffect(() => {
    const header = document.getElementById("navbar");
    if (!header) return;

    const hide = () => {
      header.style.transform = "translateY(-100%)";
    };

    const show = () => {
      header.style.transform = "translateY(0)";
    };

    let lastScrollY = window.scrollY;

    const handleNativeScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        hide();
      } else if (currentScrollY < lastScrollY) {
        show();
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleNativeScroll, { passive: true });

    const detachLenis = onLenis((lenis) => {
      window.removeEventListener("scroll", handleNativeScroll);

      const handleLenisScroll = () => {
        if (lenis.direction === 1 && lenis.scroll > 100) {
          hide();
        } else if (lenis.direction === -1) {
          show();
        }
      };

      lenis.on("scroll", handleLenisScroll);

      return () => {
        lenis.off("scroll", handleLenisScroll);
        window.addEventListener("scroll", handleNativeScroll, {
          passive: true,
        });
      };
    });

    return () => {
      detachLenis();
      window.removeEventListener("scroll", handleNativeScroll);
    };
  }, []);

  return (
    <header
      id="navbar"
      className="fixed left-0 top-0 z-20 w-full border-b border-white/40 bg-white/30 backdrop-blur-md shadow-sm transition-transform duration-300"
    >
      <div className="mx-auto flex h-[72px] max-w-[1200px] items-center justify-between px-6">
        <Logo />

        <nav className="hidden items-center gap-9 md:flex">
          {navLinks.map((item, index) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className={`relative text-[12px] font-medium ${index === 0 ? "text-[#5d50ed]" : "text-[#273463]"
                }`}
            >
              {item}
              {index === 0 && (
                <span className="absolute -bottom-4 left-0 h-[2px] w-full bg-[#6556f3]" />
              )}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-5 md:flex">
          <button className="text-[12px] font-medium text-[#273463]">
            Login
          </button>
          <Button>
            Get Started Free <ArrowRight size={14} />
          </Button>
        </div>

        <button className="md:hidden">
          <Menu />
        </button>
      </div>
    </header>
  );
}