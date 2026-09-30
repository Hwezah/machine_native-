"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useSite } from "@/context/site-context";
import { currencies, pricingNote, tiers } from "@/content/pricing";
import { cn } from "@/lib/utils";

export function CurrencyToggle() {
  const { currency, setCurrency } = useSite();
  return (
    <div
      role="radiogroup"
      aria-label="Currency"
      className="inline-flex gap-1 rounded-full border border-white/14 p-1 text-center"
    >
      {currencies.map((c) => (
        <button
          key={c}
          type="button"
          role="radio"
          aria-checked={currency === c}
          onClick={() => setCurrency(c)}
          className={cn(
            "cursor-pointer rounded-full px-[18px] py-[9px] font-mono text-xs uppercase tracking-[.06em] transition-colors",
            currency === c ? "bg-accent text-background" : "text-mute-3 hover:text-ink",
          )}
        >
          {c}
        </button>
      ))}
    </div>
  );
}

export function PricingTable() {
  const { currency } = useSite();
  const other = currency === "UGX" ? "USD" : "UGX";

  return (
    <>
      <section className="container-mn grid grid-cols-[repeat(auto-fit,minmax(min(290px,100%),1fr))] items-start gap-5 pb-12">
        {tiers.map((t) => (
          <div
            key={t.name}
            data-reveal
            className={cn(
              "flex min-h-[480px] flex-col gap-[18px] rounded-[20px] border px-7 pb-8 pt-[34px] text-left",
              t.featured ? "border-accent/40 bg-accent-tint" : "border-white/12 bg-surface",
            )}
          >
            <div className="flex items-center justify-between gap-3">
              <h2 className="text-[19px] font-semibold tracking-[-.02em]">{t.name}</h2>
              <span
                className={cn(
                  "whitespace-nowrap rounded-full px-2.5 py-[5px] font-mono text-[10.5px] uppercase tracking-[.08em]",
                  t.featured ? "bg-accent text-background" : "bg-white/7 text-mute-3",
                )}
              >
                {t.badge}
              </span>
            </div>
            <div>
              <div className="text-[clamp(34px,3.6vw,46px)] font-bold leading-none tracking-[-.04em]">
                {t.price[currency]}
              </div>
              <div className="mt-2 font-mono text-xs tracking-[.04em] text-mute-3">{t.unit}</div>
              <div className="mt-1 font-mono text-xs tracking-[.04em] text-faint">≈ {t.price[other]}</div>
            </div>
            <p className="text-[14.5px] leading-relaxed text-mute-2">{t.body}</p>
            <ul className="flex flex-col gap-[11px] border-t border-white/10 pt-[18px]">
              {t.items.map((it) => (
                <li key={it} className="flex gap-2.5 text-sm leading-[1.45] text-ink-2">
                  <span className="text-accent">→</span>
                  <span>{it}</span>
                </li>
              ))}
            </ul>
            <Button
              asChild
              size="block"
              variant={t.featured ? "default" : "outline"}
              className={cn("mt-auto", !t.featured && "border-white/20")}
            >
              <Link href="/contact">{t.cta}</Link>
            </Button>
          </div>
        ))}
      </section>
      <section className="container-mn pb-[clamp(72px,10vw,120px)]">
        <p className="font-mono text-[12.5px] leading-[1.7] tracking-[.02em] text-faint">{pricingNote[currency]}</p>
      </section>
    </>
  );
}
