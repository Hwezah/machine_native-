import type { ReactNode } from "react";
import { SplitHeading } from "@/components/site/split-heading";
import { cn } from "@/lib/utils";

/** Eyebrow + split H1 + intro paragraph used at the top of every inner page. */
export function PageIntro({
  eyebrow,
  title,
  intro,
  titleClassName,
  introClassName,
  className,
  children,
}: {
  eyebrow: string;
  title: string;
  intro?: string;
  titleClassName?: string;
  introClassName?: string;
  className?: string;
  children?: ReactNode;
}) {
  return (
    <section className={cn("container-mn pb-16 pt-[clamp(56px,9vw,110px)] max-sm:text-center", className)}>
      <span className="eyebrow">{eyebrow}</span>
      <SplitHeading
        className={cn(
          "mx-auto mb-7 mt-5 max-w-[16ch] text-[clamp(38px,6.4vw,84px)] font-bold leading-none tracking-[-.045em]",
          titleClassName,
        )}
      >
        {title}
      </SplitHeading>
      {intro ? (
        <p className={cn("mx-auto max-w-[54ch] text-lg leading-relaxed text-mute", introClassName)}>{intro}</p>
      ) : null}
      {children}
    </section>
  );
}
