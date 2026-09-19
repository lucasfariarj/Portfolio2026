"use client";

import { useEffect, useRef, useState } from "react";
import { locales, type Locale } from "@/data/content";
import { useLanguage } from "@/context/LanguageContext";
import FlagIcon from "./FlagIcon";

const NAMES: Record<Locale, string> = {
  pt: "Português",
  en: "English",
};

export default function LanguageSwitcher({ className = "" }: { className?: string }) {
  const { locale, setLocale, t } = useLanguage();
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;

    function handlePointerDown(event: PointerEvent) {
      if (rootRef.current && !rootRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    }

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setOpen(false);
    }

    document.addEventListener("pointerdown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [open]);

  return (
    <div ref={rootRef} className={`relative ${className}`}>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label={t.header.languageLabel}
        className="flex cursor-pointer items-center gap-2 rounded-lg border border-border bg-bg-elevated px-3 py-2 text-sm font-medium text-foreground transition-colors hover:border-border-strong"
      >
        <FlagIcon locale={locale} />
        <svg
          viewBox="0 0 20 20"
          fill="none"
          aria-hidden
          className={`h-3.5 w-3.5 text-muted transition-transform duration-200 ${
            open ? "rotate-180" : ""
          }`}
        >
          <path
            d="M5 7.5L10 12.5L15 7.5"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      {open && (
        <div
          role="listbox"
          aria-label={t.header.languageLabel}
          className="absolute right-0 top-full z-50 mt-2 w-44 overflow-hidden rounded-xl border border-border bg-bg-elevated shadow-xl shadow-black/50"
        >
          {locales.map((loc) => {
            const isActive = loc === locale;
            return (
              <button
                key={loc}
                type="button"
                role="option"
                aria-selected={isActive}
                onClick={() => {
                  setLocale(loc);
                  setOpen(false);
                }}
                className={`flex w-full cursor-pointer items-center gap-3 px-3.5 py-2.5 text-left text-sm transition-colors hover:bg-white/5 ${
                  isActive ? "text-accent" : "text-foreground"
                }`}
              >
                <FlagIcon locale={loc} />
                <span className="flex-1">{NAMES[loc]}</span>
                {isActive && (
                  <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-accent" />
                )}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
