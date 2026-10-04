//  /src/components/Contact.tsx



import { ArrowUpRight, Mail } from "lucide-react";

export default function Contact() {
  return (
    <section
      id="contact"
      className="scroll-mt-20 border-t border-zinc-200 bg-zinc-50/70 px-6 py-24 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-[1fr_0.8fr] lg:items-center">
          {/* Main content */}
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-zinc-500">
              Contact
            </p>

            <h2 className="mt-3 max-w-2xl text-4xl font-bold tracking-tight text-zinc-950 sm:text-5xl">
              Let&apos;s talk about your next project.
            </h2>

            <p className="mt-6 max-w-2xl text-base leading-8 text-zinc-600 sm:text-lg">
              Looking for a developer to build a web application, improve an
              existing project, or turn an idea into a working product?
              Feel free to reach out.
            </p>

            {/* Email CTA */}
            <a
              href="mailto:shreyashsarode2712@gmail.com"
              className="mt-8 inline-flex items-center gap-3 rounded-full bg-zinc-950 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-zinc-800"
            >
              <Mail size={18} />
              Get in Touch
            </a>
          </div>

          {/* Contact cards */}
          <div className="space-y-4">
            <a
              href="https://github.com/shreyashsarode2712"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
            >
              <div className="flex items-center gap-4">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-zinc-950 text-white">
                  <svg
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="h-5 w-5"
                    aria-hidden="true"
                  >
                    <path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.167 6.839 9.489.5.092.682-.217.682-.483 0-.237-.009-.866-.014-1.7-2.782.604-3.369-1.342-3.369-1.342-.455-1.157-1.11-1.466-1.11-1.466-.908-.621.069-.608.069-.608 1.004.071 1.532 1.031 1.532 1.031.892 1.529 2.341 1.087 2.91.831.091-.646.35-1.087.636-1.338-2.221-.253-4.555-1.111-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0 1 12 6.844a9.57 9.57 0 0 1 2.504.337c1.909-1.294 2.748-1.025 2.748-1.025.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.841-2.338 4.687-4.566 4.935.359.309.678.919.678 1.852 0 .133-.012 2.415-.012 2.743 0 .268.18.579.688.481A10.001 10.001 0 0 0 22 12C22 6.477 17.523 2 12 2Z" />
                  </svg>
                </div>

                <div>
                  <p className="text-sm font-semibold text-zinc-950">
                    GitHub
                  </p>
                  <p className="mt-1 text-sm text-zinc-500">
                    View my repositories
                  </p>
                </div>
              </div>

              <ArrowUpRight
                size={18}
                className="text-zinc-400 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </a>

            <a
              href="https://www.linkedin.com/in/shreyash-sarode-6135a124/"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
            >
              <div className="flex items-center gap-4">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-zinc-950 text-white">
                  <svg
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="h-5 w-5"
                    aria-hidden="true"
                  >
                    <path d="M6.94 8.5H3.5V20h3.44V8.5ZM5.22 3A2.01 2.01 0 1 0 5.22 7.02 2.01 2.01 0 0 0 5.22 3ZM20.5 13.42c0-3.47-1.85-5.09-4.32-5.09-1.99 0-2.88 1.1-3.38 1.87V8.5H9.36V20h3.44v-5.69c0-1.5.28-2.95 2.14-2.95 1.83 0 1.85 1.71 1.85 3.05V20h3.44l.27-6.58Z" />
                  </svg>
                </div>

                <div>
                  <p className="text-sm font-semibold text-zinc-950">
                    LinkedIn
                  </p>
                  <p className="mt-1 text-sm text-zinc-500">
                    Connect with me professionally
                  </p>
                </div>
              </div>

              <ArrowUpRight
                size={18}
                className="text-zinc-400 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}



