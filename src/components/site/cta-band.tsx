import Link from "next/link";
import { Button } from "@/components/ui/button";

export function CtaBand() {
  return (
    <section className="border-t border-white/10 bg-gradient-to-b from-white/[.02] to-transparent max-sm:text-center">
      <div className="container-mn grid grid-cols-[repeat(auto-fit,minmax(min(300px,100%),1fr))] items-end gap-10 py-[clamp(64px,9vw,112px)]">
        <div>
          <span className="eyebrow">Next step</span>
          <h2 className="mt-[18px] max-w-[14ch] text-[clamp(32px,4.6vw,62px)] font-bold leading-[1.02] tracking-[-.04em] max-sm:mx-auto">
            Two slots open for Q4.
          </h2>
        </div>
        <div className="flex flex-col items-start gap-5 max-sm:items-center">
          <p className="max-w-[40ch] text-[16.5px] leading-relaxed text-mute">
            Send us a paragraph about what you’re building. You’ll get a real reply from an engineer, not a calendar
            link.
          </p>
          <Button asChild size="lg" className="max-sm:w-[80vw]">
            <Link href="/contact">Start a project →</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
