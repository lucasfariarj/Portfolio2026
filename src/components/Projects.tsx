import { projects } from "@/data/content";
import ProjectMockup from "./ProjectMockup";

export default function Projects() {
  return (
    <section id="projetos" className="py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center">
          <p className="font-mono-label mb-3 text-xs font-medium uppercase tracking-[0.2em] text-accent">
            Portfólio
          </p>
          <h2 className="font-heading text-4xl font-bold text-foreground sm:text-5xl">
            Projetos em Destaque
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-muted">
            Seleção dos projetos mais relevantes — do conceito ao deploy.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.title}
              className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-bg-card transition-colors hover:border-border-strong"
            >
              <div className="relative h-44 overflow-hidden">
                <ProjectMockup kind={project.mockup as "analytics" | "ecommerce" | "ai"} />
                {project.featured && (
                  <span className="font-mono-label absolute right-3 top-3 rounded-md bg-accent px-2 py-1 text-[10px] font-semibold uppercase tracking-wide text-white">
                    Destaque
                  </span>
                )}
              </div>

              <div className="flex flex-1 flex-col p-6">
                <p className="text-xs font-medium text-accent">
                  {project.category}
                </p>
                <h3 className="font-heading mt-1 text-xl font-bold text-foreground">
                  {project.title}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">
                  {project.description}
                </p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="font-mono-label rounded-md border border-border bg-white/[0.03] px-2.5 py-1 text-xs text-muted"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="mt-6 flex gap-3">
                  <a
                    href="#"
                    className="flex-1 rounded-lg border border-border-strong py-2.5 text-center text-sm font-medium text-foreground transition-colors hover:bg-white/5"
                  >
                    GitHub
                  </a>
                  <a
                    href="#"
                    className="flex-1 rounded-lg bg-accent py-2.5 text-center text-sm font-medium text-white transition-colors hover:bg-accent-dim"
                  >
                    Demo ↗
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
