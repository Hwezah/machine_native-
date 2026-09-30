"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { usePathname } from "next/navigation";
import type { Currency } from "@/content/pricing";

export type Motion = "restrained" | "balanced" | "showy";

const motionScale: Record<Motion, number> = { restrained: 0.45, balanced: 0.75, showy: 1 };

type SiteContextValue = {
  /** Brand accent, applied as the `--accent` CSS variable. */
  accent: string;
  setAccent: (accent: string) => void;
  motion: Motion;
  setMotion: (motion: Motion) => void;
  /** Multiplier for animation distances/staggers; 0 when the user prefers reduced motion. */
  motionFactor: number;
  reducedMotion: boolean;
  grain: boolean;
  setGrain: (grain: boolean) => void;
  currency: Currency;
  setCurrency: (currency: Currency) => void;
  menuOpen: boolean;
  setMenuOpen: (open: boolean) => void;
  toggleMenu: () => void;
};

const SiteContext = createContext<SiteContextValue | null>(null);

const CURRENCY_KEY = "mn:currency";

export function SiteProvider({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const [accent, setAccent] = useState("#C6F24E");
  const [motion, setMotion] = useState<Motion>("showy");
  const [grain, setGrain] = useState(true);
  const [reducedMotion, setReducedMotion] = useState(false);
  const [currency, setCurrencyState] = useState<Currency>("UGX");
  const [menuOpen, setMenuOpen] = useState(false);
  const [menuPath, setMenuPath] = useState(pathname);

  // Close the mobile menu whenever the route changes.
  if (menuPath !== pathname) {
    setMenuPath(pathname);
    setMenuOpen(false);
  }

  useEffect(() => {
    try {
      const saved = window.localStorage.getItem(CURRENCY_KEY);
      // eslint-disable-next-line react-hooks/set-state-in-effect -- hydrate from storage after mount
      if (saved === "UGX" || saved === "USD") setCurrencyState(saved);
    } catch {}

    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mq.matches);
    const onChange = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  useEffect(() => {
    document.documentElement.style.setProperty("--accent", accent);
  }, [accent]);

  const setCurrency = useCallback((c: Currency) => {
    setCurrencyState(c);
    try {
      window.localStorage.setItem(CURRENCY_KEY, c);
    } catch {}
  }, []);

  const toggleMenu = useCallback(() => setMenuOpen((o) => !o), []);

  const value = useMemo<SiteContextValue>(
    () => ({
      accent,
      setAccent,
      motion,
      setMotion,
      motionFactor: reducedMotion ? 0 : motionScale[motion],
      reducedMotion,
      grain,
      setGrain,
      currency,
      setCurrency,
      menuOpen,
      setMenuOpen,
      toggleMenu,
    }),
    [accent, motion, reducedMotion, grain, currency, setCurrency, menuOpen, toggleMenu],
  );

  return <SiteContext.Provider value={value}>{children}</SiteContext.Provider>;
}

export function useSite() {
  const ctx = useContext(SiteContext);
  if (!ctx) throw new Error("useSite must be used inside <SiteProvider>");
  return ctx;
}
