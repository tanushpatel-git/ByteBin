const testimonials = [
  {
    quote:
      "TaskGo has completely transformed how our team works. It's simple, powerful and super easy to use!",
    name: "Sarah Johnson",
  },
  {
    quote:
      "The best task management tool we've used. The collaboration features are outstanding!",
    name: "Michael Chen",
  },
  {
    quote:
      "Clean interface, great features, and excellent support. TaskGo is a game changer for our team.",
    name: "Emily Carter",
  },
];

export default function Testimonials() {
  return (
    <section className="px-6 py-8">
      <div className="mx-auto max-w-[1100px] text-center">
        <h2 className="text-2xl font-extrabold text-[#112052]">
          Why Teams Choose TaskGo
        </h2>

        <p className="mt-1 text-[10px] text-[#7d86a2]">
          Join thousands of teams who have already simplified their workflow
          <br />
          and achieved more with TaskGo.
        </p>

        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.name}
              className="rounded-xl border border-[#e9ebf3] bg-white p-5 text-left shadow-sm"
            >
              <div className="text-2xl font-bold leading-none text-[#6657ee]">
                “
              </div>

              <p className="mt-1 text-[9px] leading-4 text-[#66708f]">
                {testimonial.quote}
              </p>

              <p className="mt-4 text-[9px] font-bold text-[#182557]">
                {testimonial.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}