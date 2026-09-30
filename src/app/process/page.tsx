import type { Metadata } from "next";
import { PageIntro } from "@/components/site/page-intro";
import { CtaBand } from "@/components/site/cta-band";
import { processSteps } from "@/content/site";

export const metadata: Metadata = {
  title: "Process",
  description: "Fixed scope per phase, a demo every week, and a written decision log you can read a year from now.",
};

export default function ProcessPage() {
  return (
    <>
      <PageIntro
        eyebrow="Process"
        title="No surprises, ever."
        intro="Fixed scope per phase, a demo every week, and a written decision log you can read a year from now."
        introClassName="max-w-[56ch]"
      />
      <section className="container-mn pb-[clamp(72px,10vw,120px)]">
        <ol>
          {processSteps.map((p) => (
            <li
              key={p.num}
              data-reveal
              className="grid grid-cols-[repeat(auto-fit,minmax(min(230px,100%),1fr))] gap-7 border-t border-white/10 py-[38px] text-left"
            >
              <div className="flex items-baseline gap-4">
                <span className="font-mono text-xs text-accent">{p.num}</span>
                <h2 className="text-[clamp(24px,2.6vw,36px)] font-semibold tracking-[-.03em]">{p.title}</h2>
              </div>
              <p className="max-w-[50ch] text-[15.5px] leading-[1.65] text-mute-2">{p.body}</p>
              <div className="font-mono text-xs uppercase tracking-[.05em] text-faint">{p.duration}</div>
            </li>
          ))}
        </ol>
      </section>
      <CtaBand />
    </>
  );
}
