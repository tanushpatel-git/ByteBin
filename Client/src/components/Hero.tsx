import { Sparkles } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="home"
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
      </div>
    </section>
  );
}