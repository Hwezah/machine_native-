import Link from "next/link";
import { site } from "@/content/site";

export function Logo() {
  return (
    <Link href="/" aria-label={`${site.name} — home`} className="flex shrink-0 items-center gap-2.5 text-ink hover:text-ink">
      <span className="block size-3.5 shrink-0 animate-mn-spin rounded-full border-2 border-accent border-t-transparent" />
      <span className="flex flex-col gap-0.5 text-left">
        <span className="text-base font-bold leading-none tracking-[-.02em]">{site.name}</span>
        <span className="font-mono text-[9.5px] leading-none tracking-[.26em] text-faint">{site.tagline}</span>
      </span>
    </Link>
  );
}
