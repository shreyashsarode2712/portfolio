//  /src/components/Services.tsx

import Reveal from "@/components/Reveal";

import {
  Code2,
  Database,
  Globe,
  Server,
  Wrench,
} from "lucide-react";

const services = [
  {
    title: "Full-Stack Web Development",
    description:
      "Building complete web applications from responsive user interfaces to secure backend APIs and database integration.",
    icon: Globe,
  },
  {
    title: "Frontend Development",
    description:
      "Creating responsive, accessible, and user-friendly interfaces using React, Next.js, TypeScript, and modern CSS.",
    icon: Code2,
  },
  {
    title: "Backend & API Development",
    description:
      "Developing scalable REST APIs, authentication systems, business logic, and backend services for modern applications.",
    icon: Server,
  },
  {
    title: "Database & Integration",
    description:
      "Designing database structures and integrating applications with SQL, MongoDB, third-party APIs, and cloud services.",
    icon: Database,
  },
  {
    title: "Deployment & Maintenance",
    description:
      "Deploying applications, configuring environments, troubleshooting issues, and maintaining applications after release.",
    icon: Wrench,
  },
];

export default function Services() {
  return (
    <section id="services" className="scroll-mt-20 px-6 py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-zinc-500">
            Services
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight text-zinc-950 sm:text-4xl">
            How I can help.
          </h2>

          <p className="mt-5 text-base leading-7 text-zinc-600">
            From building interfaces to developing complete web applications,
            I can help turn ideas and requirements into reliable digital
            solutions.
          </p>
        </div>

        {/* Services grid */}
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <Reveal key={service.title} delay={index * 0.08}>
              <article className="group rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-zinc-300 hover:shadow-lg">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-zinc-950 text-white transition-transform duration-300 group-hover:scale-105">
                  <Icon size={21} />
                </div>

                <h3 className="mt-6 text-lg font-semibold text-zinc-950">
                  {service.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-zinc-600">
                  {service.description}
                </p>
              </article>
              </Reveal>
            );
          })}
        </div>

        {/* CTA */}
        <div className="mt-12 rounded-3xl border border-zinc-200 bg-zinc-950 p-8 text-white sm:p-10">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="text-sm font-medium text-zinc-400">
                Have a project in mind?
              </p>

              <h3 className="mt-2 text-2xl font-semibold tracking-tight sm:text-3xl">
                Let&apos;s build something useful.
              </h3>

              <p className="mt-3 max-w-xl text-sm leading-6 text-zinc-400">
                Whether you need a new web application, an API, or help
                improving an existing project, feel free to get in touch.
              </p>
            </div>

            <a
              href="#contact"
              className="inline-flex shrink-0 items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-zinc-950 transition hover:bg-zinc-200"
            >
              Start a Conversation
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}