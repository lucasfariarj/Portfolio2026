"use client";

import { useLanguage } from "@/context/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 sm:flex-row">
        <a href="#top" className="font-heading text-base font-bold text-foreground">
          lf<span className="text-accent">.</span>dev
        </a>

        <nav className="flex flex-wrap items-center justify-center gap-6">
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

        <p className="text-xs text-muted-dim">
          © {year} lf.dev {t.footer.rights}
        </p>
      </div>
    </footer>
  );
}
