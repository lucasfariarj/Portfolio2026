"use client";

import { useState } from "react";
import { locales, localeLabels, type Locale } from "@/data/content";
import { useLanguage } from "@/context/LanguageContext";

function LanguageSelect({ className = "" }: { className?: string }) {
  const { locale, setLocale, t } = useLanguage();

  return (
    <select
      value={locale}
      onChange={(e) => setLocale(e.target.value as Locale)}
      aria-label={t.header.languageLabel}
      className={`cursor-pointer rounded-lg border border-border bg-bg-elevated px-3 py-2 text-sm font-medium text-foreground outline-none transition-colors hover:border-border-strong focus:border-accent ${className}`}
    >
      {locales.map((loc) => (
        <option key={loc} value={loc} className="bg-bg-elevated text-foreground">
          {localeLabels[loc]}
        </option>
      ))}
    </select>
  );
}

export default function Header() {
  const [open, setOpen] = useState(false);
  const { t } = useLanguage();

  return (
    <header className="fixed top-0 inset-x-0 z-50 border-b border-white/[0.06] bg-bg/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#top" className="font-heading text-lg font-bold text-foreground">
          lf<span className="text-accent">.</span>dev
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {t.nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm text-muted transition-colors hover:text-foreground"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <LanguageSelect />
          <a
            href="#contato"
            className="rounded-lg bg-accent px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-accent-dim"
          >
            {t.header.hireMe}
          </a>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <LanguageSelect className="py-1.5 text-xs" />
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={t.header.openMenu}
            aria-expanded={open}
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-border text-foreground"
          >
            <span className="sr-only">Menu</span>
            <div className="flex flex-col gap-1">
              <span className="h-0.5 w-4 bg-current" />
              <span className="h-0.5 w-4 bg-current" />
              <span className="h-0.5 w-4 bg-current" />
            </div>
          </button>
        </div>
      </div>

      {open && (
        <nav className="flex flex-col gap-1 border-t border-border px-6 pb-6 pt-2 md:hidden">
          {t.nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="rounded-md px-2 py-2.5 text-sm text-muted hover:bg-white/5 hover:text-foreground"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#contato"
            onClick={() => setOpen(false)}
            className="mt-2 rounded-lg bg-accent px-5 py-2.5 text-center text-sm font-semibold text-white"
          >
            {t.header.hireMe}
          </a>
        </nav>
      )}
    </header>
  );
}
