import { ArrowRight } from "lucide-react";
import Button from "@/components/atoms/Button";

export default function CTA() {
  return (
    <section className="px-6 py-4">
      <div className="relative mx-auto flex max-w-[1100px] flex-col items-center justify-between gap-5 overflow-hidden rounded-xl bg-gradient-to-r from-[#6754ee] to-[#7658f5] px-8 py-6 text-white md:flex-row">
        <div className="pointer-events-none absolute -left-10 -top-10 h-32 w-32 rounded-full bg-white/10 blur-xl" />
        <div className="pointer-events-none absolute -right-10 -bottom-10 h-32 w-32 rounded-full bg-white/10 blur-xl" />

        <div className="relative">
          <h2 className="text-lg font-bold">Ready to Get Started?</h2>
          <p className="mt-1 text-[9px] text-white/80">
            Join thousands of teams already using TaskGo to work smarter
            <br />
            and achieve more.
          </p>
        </div>

        <div className="relative text-center">
          <Button variant="light">
            Get Started Free
            <ArrowRight size={12} />
          </Button>

          <p className="mt-2 text-[8px] text-white/70">
            No credit card required.
          </p>
        </div>
      </div>
    </section>
  );
}