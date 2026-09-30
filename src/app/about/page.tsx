import type { Metadata } from "next";
import { SplitHeading } from "@/components/site/split-heading";
import { CtaBand } from "@/components/site/cta-band";
import { aboutIntro, values } from "@/content/site";

export const metadata: Metadata = {
  title: "About",
  description: "Machine Native is a four-person studio of engineers. Small on purpose.",
};

export default function AboutPage() {
  return (
    <>
      <section className="container-mn pb-16 pt-[clamp(56px,9vw,110px)] max-sm:text-center">
        <span className="eyebrow">About</span>
        <SplitHeading className="mx-auto mb-9 mt-5 max-w-[17ch] text-[clamp(38px,6.4vw,84px)] font-bold leading-none tracking-[-.045em]">
          Small on purpose.
        </SplitHeading>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(min(300px,100%),1fr))] gap-10 border-t border-white/10 pt-9">
          {aboutIntro.map((para) => (
            <p key={para.slice(0, 24)} className="text-[17px] leading-[1.68] text-mute">
              {para}
            </p>
          ))}
        </div>
      </section>

      <section className="container-mn pb-[clamp(72px,10vw,120px)]">
        <h2
          data-reveal
          className="mb-8 text-[clamp(26px,3vw,38px)] font-bold tracking-[-.03em] max-sm:text-center"
        >
          How we work
        </h2>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(min(250px,100%),1fr))] gap-px overflow-hidden rounded-card border border-white/10 bg-white/10">
          {values.map((v) => (
            <div key={v.num} data-reveal className="flex min-h-[210px] flex-col gap-3 bg-surface px-[26px] pb-9 pt-8">
              <span className="font-mono text-[11px] tracking-[.1em] text-accent">{v.num}</span>
              <h3 className="text-[19px] font-semibold tracking-[-.02em]">{v.title}</h3>
              <p className="text-[14.5px] leading-relaxed text-mute-2">{v.body}</p>
            </div>
          ))}
        </div>
      </section>
      <CtaBand />
    </>
  );
}
