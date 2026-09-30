import type { Project } from "@/content/site";
import { cn } from "@/lib/utils";

function ExternalLink({ url, label }: { url: string; label?: string }) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener"
      className="self-start border-b border-white/18 pb-0.5 font-mono text-[11.5px] tracking-[.05em] text-mute-2 hover:border-accent/50 hover:text-accent"
    >
      {label ?? url} ↗
    </a>
  );
}

const cardClass =
  "flex flex-col overflow-hidden rounded-card border border-white/10 bg-surface text-left transition-colors hover:border-accent/35";

/** Large card used in "Selected work" on the home page. */
export function FeaturedWorkCard({ project: p }: { project: Project }) {
  return (
    <article data-reveal className={cardClass}>
      <div className="relative flex h-60 items-end border-b border-white/8 bg-[linear-gradient(135deg,#16161A_0%,#0E0E10_60%)] p-6">
        <span className="absolute right-[22px] top-5 font-mono text-[11px] text-faint">{p.year}</span>
        <span className="text-[clamp(26px,3vw,40px)] font-bold tracking-[-.035em] text-ink/16">{p.client}</span>
      </div>
      <div className="flex flex-col gap-3 px-6 pb-7 pt-[26px]">
        <h3 className="text-xl font-semibold tracking-[-.02em]">{p.featuredTitle ?? p.title}</h3>
        <p className="text-[14.5px] leading-relaxed text-mute-2">{p.featuredBody ?? p.body}</p>
        <span className="font-mono text-[11.5px] uppercase tracking-[.05em] text-accent">
          {p.featuredTags ?? p.tags}
        </span>
        {p.url ? <ExternalLink url={p.url} label={p.urlLabel} /> : null}
      </div>
    </article>
  );
}

/** Card used on the /work index. */
export function WorkCard({ project: p }: { project: Project }) {
  return (
    <article data-reveal className={cardClass}>
      <div className="relative flex h-[210px] items-end border-b border-white/8 bg-[linear-gradient(135deg,#17171B_0%,#0E0E10_65%)] p-6">
        <span
          className={cn(
            "absolute right-[22px] top-5 font-mono text-[11px]",
            p.status === "In progress" ? "text-accent" : "text-mute-3",
          )}
        >
          {p.status}
        </span>
        <span className="text-[clamp(22px,2.6vw,34px)] font-bold tracking-[-.035em] text-ink/16">{p.client}</span>
      </div>
      <div className="flex flex-1 flex-col gap-3 px-6 pb-[30px] pt-[26px]">
        <h3 className="text-xl font-semibold tracking-[-.02em]">{p.title}</h3>
        <p className="text-[14.5px] leading-relaxed text-mute-2">{p.body}</p>
        {p.url ? <ExternalLink url={p.url} label={p.urlLabel} /> : null}
        <div className="mt-auto flex justify-between gap-3 border-t border-white/8 pt-4 font-mono text-[11.5px] uppercase tracking-[.05em]">
          <span className="text-accent">{p.tags}</span>
          <span className="text-faint">{p.year}</span>
        </div>
      </div>
    </article>
  );
}
