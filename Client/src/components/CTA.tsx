export default function CTA() {
  return (
    <section className="px-6 py-4">
      <div className="relative mx-auto flex max-w-[1100px] flex-col items-center justify-between gap-5 overflow-hidden rounded-xl bg-gradient-to-r from-[#6754ee] to-[#7658f5] px-8 py-6 text-white md:flex-row">
        <div className="pointer-events-none absolute -left-10 -top-10 h-32 w-32 rounded-full bg-white/10 blur-xl" />
        <div className="pointer-events-none absolute -right-10 -bottom-10 h-32 w-32 rounded-full bg-white/10 blur-xl" />

        <div className="relative"></div>

        <div className="relative text-center"></div>
      </div>
    </section>
  );
}