import type { Metadata } from "next";
import { PageIntro } from "@/components/site/page-intro";
import { CtaBand } from "@/components/site/cta-band";
import { servicesFull } from "@/content/site";

export const metadata: Metadata = {
  title: "Services",
  description: "Websites, web applications, mobile applications, and care & scale retainers.",
};

export default function ServicesPage() {
  return (
    <>
      <PageIntro
        eyebrow="Services"
        title="Build, ship, and keep it running."
        intro="We take a product from first sketch to production infrastructure — and stay on afterwards, because the launch is the cheap part."
        titleClassName="max-w-[18ch]"
        introClassName="max-w-[58ch]"
      />
      <section className="container-mn pb-[clamp(72px,10vw,120px)]">
        <div className="flex flex-col gap-px border-t border-white/10 bg-white/10">
          {servicesFull.map((sv) => (
            <div
              key={sv.num}
              data-reveal
              className="grid grid-cols-[repeat(auto-fit,minmax(min(240px,100%),1fr))] gap-7 bg-background py-10 text-left"
            >
              <div className="flex items-start gap-4">
                <span className="pt-2 font-mono text-[11px] text-accent">{sv.num}</span>
                <h2 className="max-w-[14ch] text-[clamp(24px,2.6vw,34px)] font-semibold tracking-[-.03em]">
                  {sv.title}
                </h2>
              </div>
              <p className="max-w-[48ch] text-[15.5px] leading-[1.65] text-mute-2">{sv.long}</p>
              <ul className="flex flex-col gap-[9px]">
                {sv.items.map((it) => (
                  <li key={it} className="flex gap-2.5 font-mono text-[12.5px] leading-snug tracking-[.02em] text-ink-2">
                    <span className="text-accent">/</span>
                    <span>{it}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
      <CtaBand />
    </>
  );
}
