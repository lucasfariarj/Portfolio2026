"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useSyncExternalStore,
  type ReactNode,
} from "react";
import { translations, type Locale } from "@/data/content";

const STORAGE_KEY = "portfolio:locale";

function isLocale(value: string | null): value is Locale {
  return value === "pt" || value === "en";
}

let cachedLocale: Locale | null = null;
const listeners = new Set<() => void>();

function readStoredLocale(): Locale {
  const stored = window.localStorage.getItem(STORAGE_KEY);
  return isLocale(stored) ? stored : "pt";
}

function getSnapshot(): Locale {
  if (cachedLocale === null) {
    cachedLocale = readStoredLocale();
  }
  return cachedLocale;
}

function getServerSnapshot(): Locale {
  return "pt";
}

function subscribe(callback: () => void) {
  listeners.add(callback);
  return () => listeners.delete(callback);
}

function writeLocale(next: Locale) {
  cachedLocale = next;
  window.localStorage.setItem(STORAGE_KEY, next);
  listeners.forEach((listener) => listener());
}

interface LanguageContextValue {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: (typeof translations)["pt"];
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const locale = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  useEffect(() => {
    document.documentElement.lang = locale === "en" ? "en" : "pt-BR";
  }, [locale]);

  const setLocale = useCallback((next: Locale) => {
    writeLocale(next);
  }, []);

  return (
    <LanguageContext.Provider value={{ locale, setLocale, t: translations[locale] }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
