"use client";

import { ArrowRight, Menu } from "lucide-react";
import { useEffect } from "react";
import { onLenis } from "@/lib/lenis";
import Button from "@/components/atoms/Button";
import Logo from "@/components/atoms/Logo";
import NavLinks from "@/components/molecules/NavLinks";

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
      className="fixed left-0 top-0 z-20 w-full bg-white/5 backdrop-blur-md transition-transform duration-300"
    >
      <div className="mx-auto flex h-[72px] max-w-[1200px] items-center justify-between px-6">
        <Logo />

        <NavLinks links={navLinks} activeIndex={0} />

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