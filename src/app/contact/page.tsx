import type { Metadata } from "next";
import { SplitHeading } from "@/components/site/split-heading";
import { ContactForm } from "@/components/site/contact-form";
import { contactLines } from "@/content/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "Tell us what you’re building. We reply within one business day.",
};

export default function ContactPage() {
  return (
    <section className="container-mn grid grid-cols-[repeat(auto-fit,minmax(min(320px,100%),1fr))] items-start gap-14 pb-[clamp(72px,10vw,120px)] pt-[clamp(56px,9vw,110px)]">
      <div className="max-sm:text-center">
        <span className="eyebrow">Contact</span>
        <SplitHeading className="mx-auto mb-7 mt-5 max-w-[13ch] text-[clamp(38px,5.6vw,72px)] font-bold leading-none tracking-[-.045em]">
          Tell us what you’re building.
        </SplitHeading>
        <p className="mx-auto mb-9 max-w-[44ch] text-[17px] leading-[1.65] text-mute">
          We reply within one business day with either a scoping call or an honest referral elsewhere.
        </p>
        <dl className="flex flex-col gap-4 border-t border-white/10 pt-7 text-left">
          {contactLines.map((c) => (
            <div key={c.label} className="flex flex-wrap items-baseline gap-[18px]">
              <dt className="min-w-[90px] font-mono text-[11px] uppercase tracking-[.08em] text-faint">{c.label}</dt>
              <dd className="text-base text-ink">
                {c.href ? (
                  <a href={c.href} className="hover:text-accent">
                    {c.value}
                  </a>
                ) : (
                  c.value
                )}
              </dd>
            </div>
          ))}
        </dl>
      </div>
      <ContactForm />
    </section>
  );
}
