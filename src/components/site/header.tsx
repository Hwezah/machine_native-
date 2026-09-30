"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/site/logo";
import { useSite } from "@/context/site-context";
import { navItems } from "@/content/site";
import { cn } from "@/lib/utils";

export function Header() {
  const pathname = usePathname();
  const { menuOpen, toggleMenu, setMenuOpen } = useSite();
  const isActive = (href: string) => pathname === href || pathname.startsWith(`${href}/`);

  return (
    <header className="sticky top-0 z-50 border-b border-white/8 bg-background/72 backdrop-blur-[14px]">
      <div className="container-mn flex items-center gap-8 py-4">
        <Logo />

        <nav aria-label="Primary" className="ml-auto hidden flex-nowrap items-center gap-1 nav:flex">
          {navItems.map((n) => (
            <Link
              key={n.href}
              href={n.href}
              aria-current={isActive(n.href) ? "page" : undefined}
              className={cn(
                "whitespace-nowrap rounded-full px-[11px] py-2 font-mono text-xs uppercase tracking-[.04em]",
                isActive(n.href) ? "bg-white/7 text-accent hover:text-accent" : "text-mute-3 hover:text-ink",
              )}
            >
              {n.label}
            </Link>
          ))}
        </nav>

        <Button asChild size="sm" className="ml-auto hidden nav:inline-flex">
          <Link href="/contact">Start a project</Link>
        </Button>

        <button
          type="button"
          onClick={toggleMenu}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          className="ml-auto flex shrink-0 cursor-pointer flex-col gap-[5px] rounded-xl border border-white/14 p-3 transition-colors hover:border-accent nav:hidden"
        >
          <span className="block h-[1.5px] w-[18px] bg-ink" />
          <span className="block h-[1.5px] w-[18px] bg-ink" />
          <span className="block h-[1.5px] w-[18px] bg-ink" />
        </button>
      </div>

      <div
        id="mobile-menu"
        className={cn(
          "flex-col gap-0.5 border-t border-white/8 px-[clamp(14px,4vw,48px)] pb-6 pt-2 nav:hidden",
          menuOpen ? "flex" : "hidden",
        )}
      >
        {navItems.map((n) => (
          <Link
            key={n.href}
            href={n.href}
            onClick={() => setMenuOpen(false)}
            aria-current={isActive(n.href) ? "page" : undefined}
            className={cn(
              "py-[13px] text-[19px] font-medium tracking-[-.02em] hover:text-accent",
              isActive(n.href) ? "text-accent" : "text-mute-3",
            )}
          >
            {n.label}
          </Link>
        ))}
        <Button asChild className="mt-4 w-full">
          <Link href="/contact" onClick={() => setMenuOpen(false)}>
            Start a project
          </Link>
        </Button>
      </div>
    </header>
  );
}
