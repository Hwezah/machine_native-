import type { Metadata } from "next";
import { PageIntro } from "@/components/site/page-intro";
import { WorkCard } from "@/components/site/work-card";
import { CtaBand } from "@/components/site/cta-band";
import { projects } from "@/content/site";

export const metadata: Metadata = {
  title: "Work",
  description: "Four years, four industries. Selected projects in aviation, food manufacturing, logistics and law.",
};

export default function WorkPage() {
  return (
    <>
      <PageIntro
        eyebrow="Work"
        title="Four years, four industries."
        intro="A deliberately short list. We take few clients and stay with them."
        className="pb-14"
      />
      <section className="container-mn grid grid-cols-[repeat(auto-fit,minmax(min(330px,100%),1fr))] gap-5 pb-[clamp(72px,10vw,120px)]">
        {projects.map((p) => (
          <WorkCard key={p.client} project={p} />
        ))}
      </section>
      <CtaBand />
    </>
  );
}
