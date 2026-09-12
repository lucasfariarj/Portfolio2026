"use client";

import { useLanguage } from "@/context/LanguageContext";

export default function Experience() {
  const { t } = useLanguage();
  const { experience } = t;

  return (
    <section id="experiencia" className="py-24 md:py-32">
      <div className="mx-auto max-w-4xl px-6">
        <div className="text-center">
          <p className="font-mono-label mb-3 text-xs font-medium uppercase tracking-[0.2em] text-accent">
            {experience.eyebrow}
          </p>
          <h2 className="font-heading text-4xl font-bold text-foreground sm:text-5xl">
            {experience.heading}
          </h2>
        </div>

        <div className="relative mt-16 space-y-10 border-l border-border pl-8">
          {experience.items.map((exp) => (
            <div key={exp.role + exp.company} className="relative">
              <span className="absolute -left-[2.35rem] top-1.5 h-3 w-3 rounded-full bg-accent ring-4 ring-accent-soft" />

              <div className="rounded-2xl border border-border bg-bg-card p-6 sm:p-8">
                <div className="flex flex-wrap items-start justify-between gap-2">
                  <div>
                    <h3 className="font-heading text-xl font-bold text-foreground">
                      {exp.role}
                    </h3>
                    <p className="mt-1 font-medium text-accent">{exp.company}</p>
                  </div>
                  <span className="font-mono-label text-xs text-muted-dim">
                    {exp.period}
                  </span>
                </div>

                <p className="mt-4 leading-relaxed text-muted">
                  {exp.description}
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {exp.stack.map((tech) => (
                    <span
                      key={tech}
                      className="font-mono-label rounded-md border border-accent/30 bg-accent-soft px-2.5 py-1 text-xs text-violet-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
