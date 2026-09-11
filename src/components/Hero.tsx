"use client";

import { useEffect, useState } from "react";
import { roles, stats } from "@/data/content";

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

export default function Hero() {
  const typed = useTypewriter(roles);

  return (
    <section id="top" className="relative overflow-hidden pt-40 pb-20 md:pt-48">
      <div className="bg-grid pointer-events-none absolute inset-0" />

      <div className="relative mx-auto max-w-6xl px-6">
        <p className="font-mono-label mb-6 flex items-center gap-2 text-xs font-medium uppercase tracking-[0.2em] text-accent">
          <span aria-hidden>👋</span> Olá, me chamo
        </p>

        <h1 className="font-heading text-6xl font-extrabold leading-[1.05] text-foreground sm:text-7xl md:text-8xl">
          Lucas
          <br />
          <span className="text-accent">Faria 🦡</span>
        </h1>

        <p className="mt-6 h-10 text-2xl text-muted sm:text-3xl">
          {typed}
          <span className="animate-caret text-accent">|</span>
        </p>

        <p className="mt-6 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
          Transformo ideias em aplicações web completas, unindo interfaces modernas, back-ends bem estruturados e código pensado para evoluir.
        </p>

        <div className="mt-10 flex flex-wrap items-center gap-4">
          <a
            href="#projetos"
            className="rounded-lg bg-accent px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-accent-dim"
          >
            Ver projetos →
          </a>
          <a
            href="#contato"
            className="rounded-lg border border-border-strong px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-white/5"
          >
            Entre em contato
          </a>
        </div>

        <div className="mt-20 grid grid-cols-3 gap-8 border-t border-border pt-10">
          {stats.map((stat) => (
            <div key={stat.label}>
              <p className="font-heading text-3xl font-extrabold text-foreground sm:text-4xl">
                {stat.value}
              </p>
              <p className="mt-1 text-sm text-muted">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
