const testimonials = [
  {
    quote:
      "TaskGo has completely transformed how our team works. It's simple, powerful and super easy to use!",
    name: "Sarah Johnson",
    role: "Product Manager",
    image: "https://i.pravatar.cc/100?img=47",
  },
  {
    quote:
      "The best task management tool we've used. The collaboration features are outstanding!",
    name: "Michael Chen",
    role: "Engineering Lead",
    image: "https://i.pravatar.cc/100?img=12",
  },
  {
    quote:
      "Clean interface, great features, and excellent support. TaskGo is a game changer for our team.",
    name: "Emily Carter",
    role: "Marketing Director",
    image: "https://i.pravatar.cc/100?img=32",
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

              <div className="mt-4 flex items-center gap-2">
                <img
                  src={testimonial.image}
                  className="h-8 w-8 rounded-full"
                  alt=""
                />

                <div>
                  <p className="text-[9px] font-bold text-[#182557]">
                    {testimonial.name}
                  </p>
                  <p className="text-[8px] text-[#8991ad]">
                    {testimonial.role}
                  </p>
                </div>
              </div>

              <div className="mt-2 text-[9px] tracking-widest text-[#ffb83d]">
                ★★★★★
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}