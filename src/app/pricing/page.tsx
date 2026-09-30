import type { Metadata } from "next";
import { PageIntro } from "@/components/site/page-intro";
import { CurrencyToggle, PricingTable } from "@/components/site/pricing-table";
import { CtaBand } from "@/components/site/cta-band";

export const metadata: Metadata = {
  title: "Pricing",
  description: "Every engagement is quoted as a fixed number per phase. Starting points in UGX and USD.",
};

export default function PricingPage() {
  return (
    <>
      <PageIntro
        eyebrow="Pricing"
        title="Priced before we start."
        intro="Every engagement is quoted as a fixed number per phase. These are starting points, not estimates that drift."
        introClassName="mb-8"
        className="pb-14"
      >
        <CurrencyToggle />
      </PageIntro>
      <PricingTable />
      <CtaBand />
    </>
  );
}
