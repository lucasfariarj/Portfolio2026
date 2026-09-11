import { alsoWorkedWith, techStack } from "@/data/content";

export default function TechStack() {
  return (
    <section id="tecnologias" className="py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center">
          <p className="font-mono-label mb-3 text-xs font-medium uppercase tracking-[0.2em] text-accent">
            Stack
          </p>
          <h2 className="font-heading text-4xl font-bold text-foreground sm:text-5xl">
            Tecnologias
          </h2>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {techStack.map((group) => (
            <div
              key={group.category}
              className="rounded-2xl border border-border bg-bg-card p-6"
            >
              <p className="font-mono-label mb-4 text-xs font-semibold uppercase tracking-[0.15em] text-accent">
                {group.category}
              </p>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-lg border border-border bg-white/[0.03] px-3 py-1.5 text-sm text-muted"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 rounded-2xl border border-border bg-bg-elevated/60 px-6 py-8 text-center">
          <p className="font-mono-label mb-5 text-xs uppercase tracking-[0.2em] text-muted-dim">
            Também trabalhei com
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
            {alsoWorkedWith.map((item) => (
              <span key={item} className="text-sm text-muted">
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
