"use client";

import { ArrowRight, Play, Sparkles } from "lucide-react";
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Button from "./Button";

gsap.registerPlugin(ScrollTrigger);

const avatars = [47, 12, 32, 5];

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null);
  const dashboardWrapperRef = useRef<HTMLDivElement>(null);
  const dashboardRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const hero = heroRef.current;
    const wrapper = dashboardWrapperRef.current;
    const dashboard = dashboardRef.current;

    if (!hero || !wrapper || !dashboard) return;

    const ctx = gsap.context(() => {
      /*
       * Pin the dashboard wrapper for its FULL scroll range so the next
       * section arrives the moment the pin releases (no dead gap).
       */
      ScrollTrigger.create({
        trigger: wrapper,
        start: "top 20%",
        end: "bottom bottom",
        pin: true,
        pinSpacing: true,
      });

      gsap.fromTo(
        dashboard,
        {
          scale: 1,
          y: 0,
        },
        {
          scale: () => {
            const viewportWidth = window.innerWidth;

            if (viewportWidth < 640) {
              return 1.05;
            }

            if (viewportWidth < 1024) {
              return 1.18;
            }

            return 1.35;
          },

          y: -100,

          ease: "none",

          scrollTrigger: {
            trigger: wrapper,
            start: "top 20%",
            end: "top -80%",
            scrub: 1.5,
          },
        }
      );

      gsap.fromTo(
        dashboard,
        {
          boxShadow: "0px 30px 80px rgba(93,81,230,0.20)",
        },
        {
          boxShadow: "0px 45px 120px rgba(93,81,230,0.28)",

          ease: "none",

          scrollTrigger: {
            trigger: wrapper,
            start: "top 20%",
            end: "top -60%",
            scrub: 1.5,
          },
        }
      );
    }, hero);

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <section
      id="home"
      ref={heroRef}
      className="relative px-6 pt-10 text-center"
    >
      <div className="mx-auto max-w-4xl">
        <div className="mx-auto mb-5 flex w-fit items-center gap-2 rounded-full bg-[#f0efff] px-4 py-2 text-[11px] font-semibold text-[#6254eb]">
          <Sparkles size={13} />
          Work Smarter, Not Harder
        </div>

        <h1 className="text-4xl font-extrabold leading-[1.1] tracking-[-1.5px] text-[#122052] sm:text-5xl md:text-[52px]">
          Simplify Task Management
          <br />
          <span className="bg-gradient-to-r from-[#6251ed] to-[#7657f5] bg-clip-text text-transparent">
            Boost Productivity
          </span>
        </h1>

        <p className="mx-auto mt-4 max-w-xl text-[14px] leading-6 text-[#68739b]">
          TaskGo helps you organize your work, collaborate with your team
          <br className="hidden sm:block" />
          and get more done — all in one place.
        </p>

        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <Button>
            Get Started Free <ArrowRight size={14} />
          </Button>

          <Button variant="outline">
            <Play size={14} fill="currentColor" />
            Watch Demo
          </Button>
        </div>

        <div className="mt-5 flex items-center justify-center gap-3">
          <div className="flex -space-x-2">
            {avatars.map((id) => (
              <img
                key={id}
                src={`https://i.pravatar.cc/60?img=${id}`}
                className="h-7 w-7 rounded-full border-2 border-white"
                alt=""
              />
            ))}
          </div>
          <span className="text-[11px] text-[#69749b]">
            Trusted by 10,000+ teams worldwide
          </span>
        </div>
      </div>

      <div
        ref={dashboardWrapperRef}
        className="relative mx-auto mt-16 h-[200vh] w-full max-w-[1400px]"
      >
        <div
          ref={dashboardRef}
          className="relative mx-auto flex h-[550px] w-full max-w-[1000px] items-center justify-center overflow-hidden rounded-2xl border border-white bg-gradient-to-br from-[#e8e6ff] to-[#fafaff] shadow-[0_30px_80px_rgba(93,81,230,0.20)] will-change-transform"
        >
          <span className="text-[14px] font-semibold text-[#8a92ac]">
            Tanush Gonna be Place the image here in future.
          </span>
        </div>
      </div>
    </section>
  );
}