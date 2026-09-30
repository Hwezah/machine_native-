import Link from "next/link";
import { Clock } from "@/components/site/clock";
import { contactLines, navItems, site } from "@/content/site";

export function Footer() {
  return (
    <footer className="relative z-10 border-t border-white/10 bg-background max-sm:text-center">
      <div className="container-mn grid grid-cols-[repeat(auto-fit,minmax(210px,1fr))] gap-10 pb-10 pt-14">
        <div>
          <div className="text-[17px] font-bold leading-none tracking-[-.02em]">{site.name}</div>
          <div className="mb-3.5 mt-1.5 font-mono text-[10px] tracking-[.26em] text-faint">{site.tagline}</div>
          <p className="max-w-[30ch] text-sm leading-relaxed text-faint max-sm:mx-auto">{site.footerBlurb}</p>
        </div>

        <nav aria-label="Footer" className="grid grid-cols-2 content-start gap-x-4 gap-y-3 max-sm:justify-items-center">
          {navItems.map((n) => (
            <Link key={n.href} href={n.href} className="text-sm text-mute-2 hover:text-accent">
              {n.label}
            </Link>
          ))}
        </nav>

        <div className="flex flex-col gap-2.5 max-sm:items-center">
          {contactLines.map((c) =>
            c.href ? (
              <a key={c.label} href={c.href} className="text-sm text-mute-2 hover:text-accent">
                {c.value}
              </a>
            ) : (
              <span key={c.label} className="text-sm text-mute-2">
                {c.value}
              </span>
            ),
          )}
        </div>
      </div>

      <div className="container-mn flex flex-wrap justify-between gap-4 pb-10 font-mono text-[11.5px] uppercase tracking-[.04em] text-dim max-sm:justify-center">
        <span>© 2026 {site.name}</span>
        <Clock />
      </div>
    </footer>
  );
}
