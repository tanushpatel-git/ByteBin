"use client";

import {
  Activity,
  ArrowUpRight,
  CheckCircle2,
  FolderGit2,
  Plus,
} from "lucide-react";

const repositories = [
  {
    name: "bytebin-web",
    language: "React",
    color: "#61DAFB",
    commits: "18 commits",
  },
  {
    name: "bytebin-api",
    language: "Node.js",
    color: "#68A063",
    commits: "11 commits",
  },
  {
    name: "bytebin-dashboard",
    language: "Next.js",
    color: "#111827",
    commits: "25 commits",
  },
];

const activity = [45, 70, 35, 90, 55, 80, 60];

const FloatingWorkspace = () => {
  return (
    <div className="relative mt-20 hidden h-[560px] lg:block">
      {/* Deployments */}

      <div className="absolute left-0 top-0 w-[270px] rotate-[-5deg] rounded-[28px] border border-[#ECE3D9] bg-white p-6 shadow-[0_35px_80px_rgba(0,0,0,0.08)] transition duration-500 hover:rotate-0">

        <div className="flex items-center justify-between">

          <div>

            <p className="text-sm text-[#7A7383]">

              Deployments

            </p>

            <h3 className="mt-2 text-4xl font-bold text-[#2D2932]">

              128

            </h3>

          </div>

          <div className="rounded-2xl bg-[#F3EBFB] p-3">

            <ArrowUpRight
              size={22}
              className="text-[#B884F5]"
            />

          </div>

        </div>

        <div className="mt-8 h-2 overflow-hidden rounded-full bg-[#F3EFE9]">

          <div className="h-full w-[82%] rounded-full bg-[#D3ACFF]" />

        </div>

        <p className="mt-4 text-sm text-[#8B8393]">

          82% deployment success

        </p>

      </div>

      {/* Workspace */}

      <div className="absolute right-0 top-[-400px] w-[430px] rounded-[32px] border border-[#ECE3D9] bg-white p-7 shadow-[0_40px_90px_rgba(0,0,0,0.08)]">

        <div className="flex items-center justify-between">

          <div>

            <p className="text-sm text-[#827B8B]">

              Workspace

            </p>

            <h3 className="mt-1 text-2xl font-semibold text-[#2D2932]">

              ByteBin

            </h3>

          </div>

          <button className="flex items-center gap-2 rounded-xl bg-[#D3ACFF] px-4 py-2 text-sm font-medium text-white transition hover:scale-105">

            <Plus size={16} />

            New

          </button>

        </div>

        <div className="mt-8 space-y-4">

          {repositories.map((repo) => (

            <div
              key={repo.name}
              className="flex items-center justify-between rounded-2xl border border-[#F3EEE8] p-4 transition hover:bg-[#FCFAF7]"
            >

              <div className="flex items-center gap-4">

                <div className="rounded-2xl bg-[#FBF5EE] p-3">

                  <FolderGit2
                    size={20}
                    className="text-[#7A7383]"
                  />

                </div>

                <div>

                  <h4 className="font-semibold text-[#2D2932]">

                    {repo.name}

                  </h4>

                  <div className="mt-1 flex items-center gap-2 text-sm text-[#857E8E]">

                    <span
                      className="h-2 w-2 rounded-full"
                      style={{
                        background: repo.color,
                      }}
                    />

                    {repo.language}

                  </div>

                </div>

              </div>

              <span className="text-xs text-[#857E8E]">

                {repo.commits}

              </span>

            </div>

          ))}

        </div>

      </div>

      {/* Activity */}

      <div className="absolute bottom-6 left-24 w-[300px] rounded-[28px] border border-[#ECE3D9] bg-white p-6 shadow-[0_30px_70px_rgba(0,0,0,0.08)]">

        <div className="flex items-center justify-between">

          <div>

            <p className="text-sm text-[#7C7586]">

              Weekly Activity

            </p>

            <h4 className="mt-1 font-semibold text-[#2D2932]">

              356 Commits

            </h4>

          </div>

          <Activity
            size={20}
            className="text-[#D3ACFF]"
          />

        </div>

        <div className="mt-8 flex h-24 items-end justify-between">

          {activity.map((bar, index) => (

            <div
              key={index}
              style={{
                height: `${bar}%`,
              }}
              className="w-7 rounded-full bg-[#D3ACFF]"
            />

          ))}

        </div>

      </div>

      {/* Status */}

      <div className="absolute bottom-0 right-8 flex items-center gap-3 rounded-2xl border border-[#ECE3D9] bg-white px-5 py-4 shadow-[0_20px_60px_rgba(0,0,0,0.08)]">

        <CheckCircle2
          size={20}
          className="text-[#67C58B]"
        />

        <div>

          <h5 className="font-semibold text-[#2D2932]">

            All systems operational

          </h5>

          <p className="mt-1 text-xs text-[#857E8E]">

            Updated just now

          </p>

        </div>

      </div>

    </div>
  );
};

export default FloatingWorkspace;