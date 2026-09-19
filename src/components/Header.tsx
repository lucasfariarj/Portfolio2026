"use client";

import { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { useActiveSection } from "@/hooks/useActiveSection";
import LanguageSwitcher from "./LanguageSwitcher";

const SECTION_IDS = ["sobre", "experiencia", "tecnologias", "contato"] as const;

export default function Header() {
  const [open, setOpen] = useState(false);
  const { t } = useLanguage();
  const activeSection = useActiveSection(SECTION_IDS);

  return (
    <header className="fixed top-0 inset-x-0 z-50 border-b border-white/[0.06] bg-bg/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#top" className="font-heading text-lg font-bold text-foreground">
          lf<span className="text-accent">.</span>dev
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {t.nav.map((item) => {
            const isActive = item.href === `#${activeSection}`;
            return (
              <a
                key={item.href}
                href={item.href}
                className={`text-sm transition-colors hover:text-foreground ${
                  isActive ? "text-accent" : "text-muted"
                }`}
              >
                {item.label}
              </a>
            );
          })}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <LanguageSwitcher />
          <a
            href="#contato"
            className="rounded-lg bg-accent px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-accent-dim"
          >
            {t.header.hireMe}
          </a>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <LanguageSwitcher />
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
          {t.nav.map((item) => {
            const isActive = item.href === `#${activeSection}`;
            return (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className={`rounded-md px-2 py-2.5 text-sm hover:bg-white/5 hover:text-foreground ${
                  isActive ? "text-accent" : "text-muted"
                }`}
              >
                {item.label}
              </a>
            );
          })}
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
