import { Globe, ShieldCheck, Sparkles } from "lucide-react";

const stats = [
  {
    value: "20K+",
    label: "Developers",
  },
  {
    value: "150K+",
    label: "Projects",
  },
  {
    value: "99.9%",
    label: "Uptime",
  },
];

const HeroSection = () => {
  return (
    <section className="relative flex flex-col justify-center">

      {/* Logo */}

      <div className="flex items-center gap-4">

        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#D3ACFF] shadow-[0_20px_60px_rgba(211,172,255,0.35)]">

          <Globe
            size={28}
            className="text-white"
          />

        </div>

        <div>

          <h2 className="text-[34px] font-bold tracking-tight text-[#2D2932]">
            ByteBin
          </h2>

          <p className="mt-1 text-sm text-[#817A8C]">
            Modern Developer Workspace
          </p>

        </div>

      </div>

      {/* Badge */}

      <div className="mt-16 inline-flex w-fit items-center gap-2 rounded-full border border-[#E8DDD3] bg-white px-5 py-2">

        <Sparkles
          size={16}
          className="text-[#D3ACFF]"
        />

        <span className="text-sm font-medium text-[#6F6878]">
          Designed for modern engineering teams
        </span>

      </div>

      {/* Heading */}

      <div className="mt-8 max-w-[620px]">

        <h1 className="text-[56px] font-black leading-[1.05] tracking-[-3px] text-[#1F1F24] lg:text-[74px]">

          Organize

          <br />

          everything

          <br />

          in one workspace.

        </h1>

        <p className="mt-8 max-w-[520px] text-lg leading-8 text-[#716A7A]">

          Store snippets, manage repositories, collaborate with your
          team, and build faster using a beautifully designed
          developer workspace crafted for productivity.

        </p>

      </div>

      {/* Stats */}

      <div className="mt-14 flex flex-wrap gap-10">

        {stats.map((stat) => (

          <div key={stat.label}>

            <h3 className="text-3xl font-bold text-[#2D2932]">

              {stat.value}

            </h3>

            <p className="mt-2 text-sm text-[#857D8E]">

              {stat.label}

            </p>

          </div>

        ))}

      </div>

      {/* Trust */}

      <div className="mt-14 flex w-fit items-center gap-4 rounded-2xl border border-[#ECE3D9] bg-white px-5 py-4 shadow-[0_10px_30px_rgba(0,0,0,0.04)]">

        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#F6F2EC]">

          <ShieldCheck
            size={22}
            className="text-[#7BC8A4]"
          />

        </div>

        <div>

          <h4 className="font-semibold text-[#2D2932]">

            Trusted worldwide

          </h4>

          <p className="mt-1 text-sm text-[#857D8E]">

            Secure • Fast • Built for teams

          </p>

        </div>

      </div>

    </section>
  );
};

export default HeroSection;