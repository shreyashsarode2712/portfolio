// /src/components/About.tsx


export default function About() {
  return (
    <section id="about" className="scroll-mt-20 px-6 py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          
          {/* Section heading */}
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-zinc-500">
              About Me
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-zinc-950 sm:text-4xl">
              Turning ideas into reliable web applications.
            </h2>
          </div>

          {/* About content */}
          <div className="space-y-6 text-base leading-8 text-zinc-600 sm:text-lg">
            <p>
              I&apos;m Shreyash Sarode, a Software Developer focused on building
              modern, responsive, and scalable web applications.
            </p>

            <p>
              I work across both frontend and backend development, using
              technologies such as React, Next.js, Node.js, Express.js, and
              MongoDB to build complete web solutions.
            </p>

            <p>
              I enjoy solving practical development problems, creating clean
              user experiences, and writing maintainable code that can grow
              with the product.
            </p>

            <div className="grid gap-4 pt-4 sm:grid-cols-3">
              <div className="rounded-2xl border border-zinc-200 bg-zinc-50 p-5">
                <p className="text-2xl font-bold text-zinc-950">1+</p>
                <p className="mt-1 text-sm text-zinc-500">
                  Year of Experience
                </p>
              </div>

              <div className="rounded-2xl border border-zinc-200 bg-zinc-50 p-5">
                <p className="text-2xl font-bold text-zinc-950">Full Stack</p>
                <p className="mt-1 text-sm text-zinc-500">
                  Development Focus
                </p>
              </div>

              <div className="rounded-2xl border border-zinc-200 bg-zinc-50 p-5">
                <p className="text-2xl font-bold text-zinc-950">Web</p>
                <p className="mt-1 text-sm text-zinc-500">
                  Applications
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}