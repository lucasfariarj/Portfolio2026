"use client";

import { motion } from "motion/react";
import { contactInfo } from "@/data/content";
import { useLanguage } from "@/context/LanguageContext";
import { fadeUp, staggerContainer, viewport } from "@/lib/motion";

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
      <motion.div
        className="mx-auto max-w-3xl px-6 text-center"
        variants={staggerContainer(0.1)}
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
      >
        <motion.p
          variants={fadeUp}
          className="font-mono-label mb-3 text-xs font-medium uppercase tracking-[0.2em] text-accent"
        >
          <span className="text-muted-dim">04 / </span>
          {contact.eyebrow}
        </motion.p>
        <motion.h2
          variants={fadeUp}
          className="font-heading text-4xl font-bold text-foreground sm:text-5xl"
        >
          {contact.heading}
        </motion.h2>
        <motion.p variants={fadeUp} className="mx-auto mt-4 max-w-xl text-muted">
          {contact.description}
        </motion.p>

        <motion.div
          variants={fadeUp}
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          <motion.a
            href={`mailto:${contactInfo.email}`}
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className="rounded-lg bg-accent px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-accent-dim"
          >
            {contactInfo.email}
          </motion.a>
        </motion.div>

        <motion.div variants={fadeUp} className="mt-10 grid gap-4 sm:grid-cols-3">
          {links.map((link) => (
            <motion.a
              key={link.label}
              href={link.href}
              target={link.label === contact.emailLabel ? undefined : "_blank"}
              rel={link.label === contact.emailLabel ? undefined : "noreferrer"}
              whileHover={{ y: -3 }}
              className="rounded-xl border border-border bg-bg-card px-5 py-4 transition-colors hover:border-border-strong"
            >
              <p className="font-mono-label text-[10px] uppercase tracking-[0.15em] text-accent">
                {link.label}
              </p>
              <p className="mt-1 truncate text-sm text-foreground">{link.value}</p>
            </motion.a>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
