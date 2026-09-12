"use client";

import { contactInfo } from "@/data/content";
import { useLanguage } from "@/context/LanguageContext";

export default function Contact() {
  const { t } = useLanguage();
  const { contact } = t;

  const links = [
    { label: contact.emailLabel, value: contactInfo.email, href: `mailto:${contactInfo.email}` },
    {
      label: contact.githubLabel,
      value: contactInfo.github,
      href: `https://${contactInfo.github}`,
    },
    {
      label: contact.linkedinLabel,
      value: contactInfo.linkedin,
      href: `https://${contactInfo.linkedin}`,
    },
  ];

  return (
    <section id="contato" className="py-24 md:py-32">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <p className="font-mono-label mb-3 text-xs font-medium uppercase tracking-[0.2em] text-accent">
          {contact.eyebrow}
        </p>
        <h2 className="font-heading text-4xl font-bold text-foreground sm:text-5xl">
          {contact.heading}
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-muted">{contact.description}</p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <a
            href={`mailto:${contactInfo.email}`}
            className="rounded-lg bg-accent px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-accent-dim"
          >
            {contactInfo.email}
          </a>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-3">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.label === contact.emailLabel ? undefined : "_blank"}
              rel={link.label === contact.emailLabel ? undefined : "noreferrer"}
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
