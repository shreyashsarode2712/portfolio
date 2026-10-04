// /src/components/Skills.tsx

import { skillCategories } from "@/data/skills";
import Reveal from "@/components/Reveal";

export default function Skills() {
  return (
    <section
      id="skills"
      className="scroll-mt-20 border-y border-zinc-200 bg-zinc-50/70 px-6 py-24 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-zinc-500">
            Skills
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight text-zinc-950 sm:text-4xl">
            Technologies I work with.
          </h2>

          <p className="mt-5 text-base leading-7 text-zinc-600">
            A practical technology stack focused on building modern, responsive,
            and maintainable web applications.
          </p>
        </div>

        {/* Skill categories */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {skillCategories.map((category, index) => (
            <Reveal key={category.title} delay={index * 0.1}>
              <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
                <h3 className="text-lg font-semibold text-zinc-950">
                  {category.title}
                </h3>

                <div className="mt-5 flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full border border-zinc-200 bg-zinc-50 px-3 py-1.5 text-sm font-medium text-zinc-700"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
