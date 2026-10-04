//  /src/components/Projects.tsx

import { ArrowUpRight } from "lucide-react";
import { projects } from "@/data/projects";

export default function Projects() {
  return (
    <section
      id="projects"
      className="scroll-mt-20 border-y border-zinc-200 bg-zinc-50/70 px-6 py-24 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-zinc-500">
            Projects
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight text-zinc-950 sm:text-4xl">
            Things I&apos;ve built.
          </h2>

          <p className="mt-5 text-base leading-7 text-zinc-600">
            A selection of real-world applications demonstrating frontend,
            backend, database, authentication, and API development.
          </p>
        </div>

        {/* Projects */}
        <div className="mt-12 grid gap-8 lg:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.title}
              className="group overflow-hidden rounded-3xl border border-zinc-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              {/* Project image placeholder */}
              <div className="relative flex h-56 items-center justify-center overflow-hidden bg-zinc-950">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(255,255,255,0.12),_transparent_45%)]" />

                <div className="relative text-center">
                  <p className="text-sm font-medium uppercase tracking-[0.2em] text-zinc-500">
                    {project.category}
                  </p>

                  <h3 className="mt-2 text-3xl font-bold tracking-tight text-white">
                    {project.title}
                  </h3>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-zinc-950">
                  {project.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-zinc-600">
                  {project.description}
                </p>

                {/* Features */}
                <div className="mt-5">
                  <p className="text-xs font-semibold uppercase tracking-wider text-zinc-400">
                    Key Features
                  </p>

                  <ul className="mt-3 space-y-2">
                    {project.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-start gap-2 text-sm text-zinc-600"
                      >
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-zinc-400" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies */}
                <div className="mt-6 flex flex-wrap gap-2">
                  {project.technologies.map((technology) => (
                    <span
                      key={technology}
                      className="rounded-full border border-zinc-200 bg-zinc-50 px-3 py-1.5 text-xs font-medium text-zinc-600"
                    >
                      {technology}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="mt-7 flex items-center justify-between border-t border-zinc-100 pt-5">
                  {project.githubUrl ? (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-semibold text-zinc-700 transition hover:text-black"
                    >
                      {/* GitHub SVG */}
                      <svg
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="h-4 w-4"
                        aria-hidden="true"
                      >
                        <path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.167 6.839 9.489.5.092.682-.217.682-.483 0-.237-.009-.866-.014-1.7-2.782.604-3.369-1.342-3.369-1.342-.455-1.157-1.11-1.466-1.11-1.466-.908-.621.069-.608.069-.608 1.004.071 1.532 1.031 1.532 1.031.892 1.529 2.341 1.087 2.91.831.091-.646.35-1.087.636-1.338-2.221-.253-4.555-1.111-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0 1 12 6.844a9.57 9.57 0 0 1 2.504.337c1.909-1.294 2.748-1.025 2.748-1.025.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.841-2.338 4.687-4.566 4.935.359.309.678.919.678 1.852 0 .133-.012 2.415-.012 2.743 0 .268.18.579.688.481A10.001 10.001 0 0 0 22 12C22 6.477 17.523 2 12 2Z" />
                      </svg>
                      GitHub
                    </a>
                  ) : (
                    <span className="text-sm text-zinc-400">
                      GitHub repository coming soon
                    </span>
                  )}

                  {project.liveUrl ? (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-semibold text-zinc-700 transition hover:text-black"
                    >
                      Live Demo
                      <ArrowUpRight size={17} />
                    </a>
                  ) : (
                    <span className="text-sm font-medium text-zinc-400">
                      Deployed URL coming soon
                    </span>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
