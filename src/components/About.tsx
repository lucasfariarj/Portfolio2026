"use client";

import { motion } from "motion/react";
import { useLanguage } from "@/context/LanguageContext";
import { fadeLeft, fadeRight, viewport } from "@/lib/motion";

export default function About() {
  const { t } = useLanguage();
  const { about } = t;

  return (
    <section id="sobre" className="py-24 md:py-32">
      <div className="mx-auto grid max-w-6xl items-center gap-16 px-6 md:grid-cols-2">
        <motion.div
          className="relative"
          variants={fadeLeft}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          <div className="overflow-hidden rounded-2xl border border-border bg-bg-elevated shadow-2xl shadow-black/40">
            <div className="flex items-center gap-1.5 border-b border-border px-4 py-3">
              <span className="h-2.5 w-2.5 rounded-full bg-red-500/70" />
              <span className="h-2.5 w-2.5 rounded-full bg-yellow-500/70" />
              <span className="h-2.5 w-2.5 rounded-full bg-green-500/70" />
              <span className="ml-3 font-mono-label text-xs text-muted-dim">
                developer.ts
              </span>
            </div>
            <div className="space-y-2.5 px-6 py-8 font-mono-label text-sm">
              <p className="text-muted-dim">
                <span className="text-accent">const</span> developer = {"{"}
              </p>
              <p className="pl-4 text-muted">
                name: <span className="text-emerald-400">&apos;Lucas Faria&apos;</span>,
              </p>
              <p className="pl-4 text-muted">
                role: <span className="text-emerald-400">&apos;Full Stack Developer&apos;</span>,
              </p>
              <p className="pl-4 text-muted">
                experience: <span className="text-orange-400">5</span>,
              </p>
              <p className="pl-4 text-muted">
                passion: [<span className="text-emerald-400">&apos;code&apos;</span>,{" "}
                <span className="text-emerald-400">&apos;games&apos;</span>,{" "}
                <span className="text-emerald-400">&apos;coffee&apos;</span>],
              </p>
              <p className="text-muted-dim">{"};"}</p>
            </div>
          </div>

          <motion.div
            className="absolute -bottom-6 left-6 flex items-center gap-3 rounded-xl border border-border bg-bg-card px-5 py-3 shadow-xl shadow-black/40"
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut" }}
          >
            <div>
              <p className="font-mono-label text-[10px] uppercase tracking-[0.15em] text-accent">
                {about.statusEyebrow}
              </p>
              <p className="mt-1 flex items-center gap-2 text-sm font-medium text-foreground">
                <span className="h-2 w-2 rounded-full bg-emerald-400" />
                {about.status}
              </p>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          className="mt-6 md:mt-0"
          variants={fadeRight}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          <p className="font-mono-label mb-3 text-xs font-medium uppercase tracking-[0.2em] text-accent">
            <span className="text-muted-dim">01 / </span>
            {about.eyebrow}
          </p>
          <span className="mb-6 block h-0.5 w-10 bg-accent" />

          <h2 className="font-heading text-3xl font-bold leading-tight text-foreground sm:text-4xl">
            {about.heading} <span className="text-accent">{about.headingHighlight}</span>
          </h2>

          <div className="mt-6 space-y-4 text-muted">
            {about.paragraphs.map((paragraph) => (
              <p key={paragraph} className="leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>

          <dl className="mt-8 space-y-3">
            {about.meta.map((item) => (
              <div key={item.label} className="flex flex-wrap gap-x-3 gap-y-1 text-sm">
                <dt className="font-mono-label w-28 shrink-0 text-accent">
                  {item.label}
                </dt>
                <dd className="text-muted">{item.value}</dd>
              </div>
            ))}
          </dl>

          <motion.a
            href="/curriculum.pdf"
            target="_blank"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className="mt-8 inline-flex items-center gap-2 rounded-lg border border-border-strong px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-white/5"
          >
            {about.downloadCv}
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
