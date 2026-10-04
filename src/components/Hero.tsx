//  /src/components/Hero.tsx

import { ArrowDown, ArrowRight, Code2 } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="home"
      className="scroll-mt-20 relative flex min-h-[calc(100vh-4rem)] items-center overflow-hidden px-6 py-20 lg:px-8"
    >
      {/* Background decoration */}
      <div
        aria-hidden="true"
        className="absolute left-1/2 top-1/2 -z-10 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-zinc-100 blur-3xl"
      />

      <div className="mx-auto grid w-full max-w-7xl items-center gap-16 lg:grid-cols-[1.15fr_0.85fr]">
        {/* Content */}
        <div>
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white px-4 py-2 text-sm text-zinc-600 shadow-sm">
            <span className="h-2 w-2 rounded-full bg-emerald-500" />
            Available for opportunities
          </div>

          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-zinc-500">
            Software Developer
          </p>

          <h1 className="max-w-4xl text-5xl font-bold tracking-tight text-zinc-950 sm:text-6xl lg:text-7xl">
            Building modern web experiences that{" "}
            <span className="text-zinc-400">work.</span>
          </h1>

          <p className="mt-7 max-w-2xl text-base leading-8 text-zinc-600 sm:text-lg">
            Hi, I&apos;m Shreyash Sarode. I build responsive and scalable web
            applications with modern frontend and backend technologies, focusing
            on clean interfaces, reliable functionality, and maintainable code.
          </p>

          {/* CTA */}
          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <a
              href="#projects"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-zinc-950 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-zinc-800"
            >
              View My Work
              <ArrowRight
                size={17}
                className="transition-transform group-hover:translate-x-1"
              />
            </a>

            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-full border border-zinc-300 bg-white px-6 py-3.5 text-sm font-semibold text-zinc-900 transition hover:border-zinc-400 hover:bg-zinc-50"
            >
              Let&apos;s Work Together
            </a>
          </div>

          {/* Social links */}
          <div className="mt-10 flex items-center gap-5">
            <span className="text-sm text-zinc-500">Find me on</span>

            <a
              href="https://github.com/shreyashsarode2712"
              aria-label="GitHub"
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-500 transition hover:text-zinc-950"
            >
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-5 w-5"
                aria-hidden="true"
              >
                <path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.167 6.839 9.489.5.092.682-.217.682-.483 0-.237-.009-.866-.014-1.7-2.782.604-3.369-1.342-3.369-1.342-.455-1.157-1.11-1.466-1.11-1.466-.908-.621.069-.608.069-.608 1.004.071 1.532 1.031 1.532 1.031.892 1.529 2.341 1.087 2.91.831.091-.646.35-1.087.636-1.338-2.221-.253-4.555-1.111-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0 1 12 6.844a9.57 9.57 0 0 1 2.504.337c1.909-1.294 2.748-1.025 2.748-1.025.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.841-2.338 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .268.18.579.688.481A10.001 10.001 0 0 0 22 12C22 6.477 17.523 2 12 2Z" />
              </svg>
            </a>

            <a
              href="https://www.linkedin.com/in/shreyash-sarode-6135a124b/"
              aria-label="LinkedIn"
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-500 transition hover:text-zinc-950"
            >
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-5 w-5"
                aria-hidden="true"
              >
                <path d="M6.94 8.5H3.5V20h3.44V8.5ZM5.22 3A2.01 2.01 0 1 0 5.22 7.02 2.01 2.01 0 0 0 5.22 3ZM20.5 13.42c0-3.47-1.85-5.09-4.32-5.09-1.99 0-2.88 1.1-3.38 1.87V8.5H9.36V20h3.44v-5.69c0-1.5.28-2.95 2.14-2.95 1.83 0 1.85 1.71 1.85 3.05V20h3.44l.27-6.58Z" />
              </svg>
            </a>
          </div>
        </div>

        {/* Developer visual */}
        <div className="relative mx-auto w-full max-w-md">
          <div className="relative overflow-hidden rounded-3xl border border-zinc-200 bg-zinc-950 p-5 shadow-2xl">
            {/* Window header */}
            <div className="mb-6 flex items-center justify-between">
              <div className="flex gap-2">
                <span className="h-3 w-3 rounded-full bg-zinc-700" />
                <span className="h-3 w-3 rounded-full bg-zinc-600" />
                <span className="h-3 w-3 rounded-full bg-zinc-500" />
              </div>

              <Code2 size={18} className="text-zinc-500" />
            </div>

            {/* Code-style visual */}
            <div className="space-y-4 font-mono text-sm">
              <div className="text-zinc-500">
                <span className="text-zinc-400">01</span>
                <span className="ml-5">const developer = {"{"}</span>
              </div>

              <div className="text-zinc-300">
                <span className="text-zinc-500">02</span>
                <span className="ml-5">
                  name: <span className="text-white">&quot;Shreyash&quot;</span>
                  ,
                </span>
              </div>

              <div className="text-zinc-300">
                <span className="text-zinc-500">03</span>
                <span className="ml-5">
                  role:{" "}
                  <span className="text-white">&quot;Developer&quot;</span>,
                </span>
              </div>

              <div className="text-zinc-300">
                <span className="text-zinc-500">04</span>
                <span className="ml-5">
                  focus:{" "}
                  <span className="text-white">
                    &quot;Web Applications&quot;
                  </span>
                  ,
                </span>
              </div>

              <div className="text-zinc-300">
                <span className="text-zinc-500">05</span>
                <span className="ml-5">
                  stack:{" "}
                  <span className="text-white">&quot;Full Stack&quot;</span>
                </span>
              </div>

              <div className="text-zinc-500">
                <span className="text-zinc-400">06</span>
                <span className="ml-5">{"}"}</span>
              </div>

              <div className="pt-5 text-zinc-500">
                <span className="text-zinc-400">07</span>
                <span className="ml-5">
                  <span className="text-zinc-300">return</span>{" "}
                  <span className="text-white">
                    &quot;Let&apos;s build.&quot;
                  </span>
                </span>
              </div>
            </div>
          </div>

          {/* Floating technology badge */}
          <div className="absolute -bottom-5 -left-5 rounded-2xl border border-zinc-200 bg-white px-5 py-4 shadow-lg">
            <p className="text-xs font-medium uppercase tracking-wider text-zinc-400">
              Focus
            </p>
            <p className="mt-1 text-sm font-semibold text-zinc-900">
              Modern Web Development
            </p>
          </div>

          {/* Floating code badge */}
          <div className="absolute -right-4 -top-5 rounded-2xl border border-zinc-200 bg-white px-4 py-3 shadow-lg">
            <Code2 size={20} className="text-zinc-700" />
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#about"
        aria-label="Scroll to About section"
        className="absolute bottom-7 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-zinc-400 transition hover:text-zinc-700 sm:flex"
      >
        <span className="text-xs uppercase tracking-widest">Scroll</span>
        <ArrowDown size={16} />
      </a>
    </section>
  );
}
