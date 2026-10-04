//  /src/components/Experience.tsx



import { experience } from "@/data/experience";
import Reveal from "@/components/Reveal"; 


export default function Experience() {
  return (
    <section id="experience" className="scroll-mt-20 px-6 py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-zinc-500">
            Experience
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight text-zinc-950 sm:text-4xl">
            My professional journey.
          </h2>

          <p className="mt-5 text-base leading-7 text-zinc-600">
            Experience building and maintaining modern web applications across
            frontend and backend development.
          </p>
        </div>

        {/* Experience timeline */}
        <div className="relative mt-12">
          <div className="absolute left-[7px] top-2 hidden h-[calc(100%-1rem)] w-px bg-zinc-200 sm:block" />

          <div className="space-y-10">
            {experience.map((item, index) => (
              <Reveal key={`${item.company}-${item.duration}`}  delay={index * 0.1}>
              <article className="relative sm:pl-12">
                {/* Timeline dot */}
                <div className="absolute left-0 top-2 hidden h-4 w-4 rounded-full border-4 border-white bg-zinc-950 shadow sm:block" />

                <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm transition hover:shadow-md">
                  <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <h3 className="text-xl font-semibold text-zinc-950">
                        {item.role}
                      </h3>

                      <p className="mt-1 font-medium text-zinc-600">
                        {item.company}
                      </p>
                    </div>

                    <span className="w-fit rounded-full bg-zinc-100 px-3 py-1 text-sm font-medium text-zinc-600">
                      {item.duration}
                    </span>
                  </div>

                  <p className="mt-5 max-w-3xl text-sm leading-7 text-zinc-600 sm:text-base">
                    {item.description}
                  </p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {item.technologies.map((technology) => (
                      <span
                        key={technology}
                        className="rounded-full border border-zinc-200 px-3 py-1 text-xs font-medium text-zinc-600"
                      >
                        {technology}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}