import type { Metadata } from "next";
import { PageIntro } from "@/components/site/page-intro";
import { CtaBand } from "@/components/site/cta-band";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { faqs } from "@/content/site";

export const metadata: Metadata = {
  title: "FAQ",
  description: "Timelines, code ownership, takeovers, and what happens after launch.",
};

export default function FaqPage() {
  return (
    <>
      <PageIntro eyebrow="FAQ" title="Questions, answered." titleClassName="mb-0" className="pb-14" />
      <section className="mx-auto max-w-[900px] px-[clamp(14px,4vw,48px)] pb-[clamp(72px,10vw,120px)]">
        <Accordion type="single" collapsible defaultValue="faq-0">
          {faqs.map((f, i) => (
            <AccordionItem key={f.q} value={`faq-${i}`} data-reveal>
              <AccordionTrigger>
                <span className="text-[clamp(17px,2vw,22px)] font-medium tracking-[-.02em] text-ink-2 group-data-[state=open]:text-ink">
                  {f.q}
                </span>
              </AccordionTrigger>
              <AccordionContent>
                <p className="max-w-[62ch] pb-7 text-left text-[15.5px] leading-[1.68] text-mute-2">{f.a}</p>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>
      <CtaBand />
    </>
  );
}
