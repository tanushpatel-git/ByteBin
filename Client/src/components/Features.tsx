import { CheckCircle2 } from "lucide-react";

export default function Features() {
  return (
    <section id="features" className="px-6 py-10">
      <div className="mx-auto max-w-[1100px] text-center">
        <h2 className="text-2xl font-extrabold tracking-tight text-[#102052] sm:text-3xl">
          Everything You Need for
          <br />
          Seamless Task Management
        </h2>

        <p className="mx-auto mt-2 max-w-lg text-[12px] leading-5 text-[#78819f]">
          Powerful features designed to help you stay organized,
          <br />
          collaborate better, and achieve more.
        </p>

        <div className="mt-8 grid grid-cols-2 gap-8 md:grid-cols-5">
          <div>
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-[#f0efff] text-[#6456ed] shadow-sm">
              <CheckCircle2 size={23} />
            </div>

            <h3 className="mt-3 text-[12px] font-bold text-[#142052]">
              Task Organization
            </h3>

            <p className="mx-auto mt-2 max-w-[150px] text-[10px] leading-4 text-[#7e87a5]">
              Keep your work structured and on track.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}