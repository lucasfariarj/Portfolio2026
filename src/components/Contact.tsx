import { contact } from "@/data/content";

const links = [
  { label: "Email", value: contact.email, href: `mailto:${contact.email}` },
  { label: "GitHub", value: contact.github, href: `https://${contact.github}` },
  { label: "LinkedIn", value: contact.linkedin, href: `https://${contact.linkedin}` },
];

export default function Contact() {
  return (
    <section id="contato" className="py-24 md:py-32">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <p className="font-mono-label mb-3 text-xs font-medium uppercase tracking-[0.2em] text-accent">
          Contato
        </p>
        <h2 className="font-heading text-4xl font-bold text-foreground sm:text-5xl">
          Vamos construir algo juntos?
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-muted">
          Estou disponível para novos projetos e oportunidades. Me chame por qualquer um dos
          canais abaixo.
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <a
            href={`mailto:${contact.email}`}
            className="rounded-lg bg-accent px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-accent-dim"
          >
            {contact.email}
          </a>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-3">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.label === "Email" ? undefined : "_blank"}
              rel={link.label === "Email" ? undefined : "noreferrer"}
              className="rounded-xl border border-border bg-bg-card px-5 py-4 transition-colors hover:border-border-strong"
            >
              <p className="font-mono-label text-[10px] uppercase tracking-[0.15em] text-accent">
                {link.label}
              </p>
              <p className="mt-1 truncate text-sm text-foreground">{link.value}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
