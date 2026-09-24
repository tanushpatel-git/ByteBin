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
      </div>
    </section>
  );
}