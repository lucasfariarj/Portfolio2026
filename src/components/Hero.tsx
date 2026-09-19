"use client";

import { useEffect, useRef, useState, type MouseEvent } from "react";
import { motion } from "motion/react";
import { useLanguage } from "@/context/LanguageContext";
import { fadeUp, staggerContainer } from "@/lib/motion";

function useTypewriter(words: string[]) {
  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[wordIndex % words.length];
    const pause = 1500;

    if (!deleting && text === current) {
      const timeout = setTimeout(() => setDeleting(true), pause);
      return () => clearTimeout(timeout);
    }

    if (deleting && text === "") {
      const timeout = setTimeout(() => {
        setDeleting(false);
        setWordIndex((i) => (i + 1) % words.length);
      }, 300);
      return () => clearTimeout(timeout);
    }

    const speed = deleting ? 40 : 80;
    const timeout = setTimeout(() => {
      setText((t) =>
        deleting ? current.slice(0, t.length - 1) : current.slice(0, t.length + 1)
      );
    }, speed);

    return () => clearTimeout(timeout);
  }, [text, deleting, wordIndex, words]);

  return text;
}

function TypewriterRoles({ words }: { words: string[] }) {
  const typed = useTypewriter(words);

  return (
    <p className="mt-6 h-10 text-2xl text-muted sm:text-3xl">
      {typed}
      <span className="animate-caret text-accent">|</span>
    </p>
  );
}

export default function Hero() {
  const { locale, t } = useLanguage();
  const spotlightRef = useRef<HTMLDivElement>(null);

  function handleMouseMove(event: MouseEvent<HTMLElement>) {
    const el = spotlightRef.current;
    if (!el) return;
    const rect = event.currentTarget.getBoundingClientRect();
    const x = ((event.clientX - rect.left) / rect.width) * 100;
    const y = ((event.clientY - rect.top) / rect.height) * 100;
    el.style.setProperty("--mx", `${x}%`);
    el.style.setProperty("--my", `${y}%`);
  }

  return (
    <section
      id="top"
      onMouseMove={handleMouseMove}
      className="group relative overflow-hidden pt-40 pb-20 md:pt-48"
    >
      <div className="bg-grid pointer-events-none absolute inset-0" />
      <div
        ref={spotlightRef}
        aria-hidden
        className="spotlight pointer-events-none absolute inset-0 hidden opacity-0 transition-opacity duration-500 group-hover:opacity-100 md:block"
      />

      <motion.div
        className="relative mx-auto max-w-6xl px-6"
        variants={staggerContainer(0.12)}
        initial="hidden"
        animate="visible"
      >
        <motion.p
          variants={fadeUp}
          className="font-mono-label mb-6 flex items-center gap-2 text-xs font-medium uppercase tracking-[0.2em] text-accent"
        >
          <span aria-hidden>👋</span> {t.hero.greeting}
        </motion.p>

        <motion.h1
          variants={fadeUp}
          className="font-heading text-6xl font-extrabold leading-[1.05] text-foreground sm:text-7xl md:text-8xl"
        >
          Lucas
          <br />
          <span className="text-accent">Faria 🦡</span>
        </motion.h1>

        <motion.div variants={fadeUp}>
          <TypewriterRoles key={locale} words={t.hero.roles} />
        </motion.div>

        <motion.p
          variants={fadeUp}
          className="mt-6 max-w-xl text-base leading-relaxed text-muted sm:text-lg"
        >
          {t.hero.description}
        </motion.p>

        <motion.div variants={fadeUp} className="mt-10 flex flex-wrap items-center gap-4">
          {/* <a
            href="#projetos"
            className="rounded-lg bg-accent px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-accent-dim"
          >
            {t.hero.ctaPrimary}
          </a> */}
          <motion.a
            href="#contato"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className="rounded-lg border border-border-strong px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-white/5"
          >
            {t.hero.ctaSecondary}
          </motion.a>
        </motion.div>

        <motion.div
          variants={fadeUp}
          className="mt-20 grid grid-cols-3 gap-8 border-t border-border pt-10"
        >
          {t.stats.map((stat) => (
            <div key={stat.label}>
              <p className="font-heading text-3xl font-extrabold text-foreground sm:text-4xl">
                {stat.value}
              </p>
              <p className="mt-1 text-sm text-muted">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
