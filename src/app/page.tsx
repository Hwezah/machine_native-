import Link from "next/link";
import { Button } from "@/components/ui/button";
import { SplitHeading } from "@/components/site/split-heading";
import { FeaturedWorkCard } from "@/components/site/work-card";
import { CtaBand } from "@/components/site/cta-band";
import { clients, projects, services, site, stats, testimonial } from "@/content/site";

function SectionHead({ title, href, linkLabel }: { title: string; href: string; linkLabel: string }) {
  return (
    <div className="mb-11 flex flex-wrap items-baseline justify-between gap-6 max-sm:flex-col max-sm:items-center max-sm:gap-[18px]">
      <h2 data-reveal className="max-w-[20ch] text-[clamp(30px,4vw,52px)] font-bold tracking-[-.035em]">
        {title}
      </h2>
      <Link
        href={href}
        className="border-b border-accent/40 pb-[3px] font-mono text-xs uppercase tracking-[.06em] text-accent"
      >
        {linkLabel}
      </Link>
    </div>
  );
}

export default function HomePage() {
  const marquee = [...clients, ...clients];

  return (
    <div className="max-sm:text-center">
      {/* Hero */}
      <section className="container-mn pb-20 pt-[clamp(64px,12vh,140px)]">
        <div className="mb-7 flex items-center gap-2.5 max-sm:justify-center">
          <span className="size-[7px] shrink-0 animate-mn-blink rounded-full bg-accent" />
          <span className="font-mono text-xs uppercase tracking-[.08em] text-mute-3">{site.availability}</span>
        </div>
        <SplitHeading className="mb-8 max-w-[16ch] text-[clamp(44px,8.2vw,116px)] font-bold leading-[.94] tracking-[-.045em] max-sm:mx-auto">
          Software that earns its keep.
        </SplitHeading>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(min(280px,100%),1fr))] items-end gap-10 border-t border-white/10 pt-8">
          <p className="max-w-[46ch] text-[clamp(17px,1.5vw,20px)] leading-[1.55] text-mute max-sm:mx-auto">
            We are a small, senior studio building websites, web apps and mobile apps for companies that need them to
            actually work — in aviation, food manufacturing, logistics and law.
          </p>
          <div className="flex flex-nowrap gap-2.5 max-sm:mx-auto max-sm:w-[80vw]">
            <Button asChild variant="bone" className="max-sm:flex-1">
              <Link href="/work">
                <span className="max-sm:hidden">See the work</span>
                <span className="sm:hidden">Our work</span>
              </Link>
            </Button>
            <Button asChild variant="outline" className="max-sm:flex-1">
              <Link href="/services">
                <span className="max-sm:hidden">What we do</span>
                <span className="sm:hidden">Services</span>
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Client marquee */}
      <section aria-label="Clients" className="overflow-hidden pb-[30px] pt-[26px]">
        <ul className="flex w-max animate-mn-marquee gap-14">
          {marquee.map((name, i) => (
            <li
              key={i}
              aria-hidden={i >= clients.length || undefined}
              className="whitespace-nowrap border-b border-accent/30 pb-2.5 text-base font-medium tracking-[-.015em] text-mute"
            >
              {name}
            </li>
          ))}
        </ul>
      </section>

      {/* Stats */}
      <section className="container-mn py-[clamp(72px,10vw,128px)]">
        <dl className="grid grid-cols-2 gap-x-5 gap-y-7 sm:grid-cols-[repeat(auto-fit,minmax(170px,1fr))]">
          {stats.map((s) => (
            <div key={s.label} data-reveal className="flex flex-col-reverse border-t border-white/12 pt-[18px]">
              <dt className="mt-2.5 font-mono text-xs uppercase tracking-[.07em] text-mute-3">{s.label}</dt>
              <dd className="text-[clamp(38px,4.4vw,60px)] font-bold leading-none tracking-[-.04em] text-ink">
                {s.value}
              </dd>
            </div>
          ))}
        </dl>
      </section>

      {/* Services */}
      <section className="container-mn pb-[clamp(72px,10vw,128px)]">
        <SectionHead title="Four disciplines, one team" href="/services" linkLabel="All services →" />
        <div className="grid grid-cols-[repeat(auto-fit,minmax(min(270px,100%),1fr))] gap-px overflow-hidden rounded-card border border-white/10 bg-white/10">
          {services.map((sv) => (
            <div
              key={sv.num}
              data-reveal
              className="flex min-h-[260px] flex-col gap-3.5 bg-surface px-7 pb-10 pt-[34px] text-left transition-colors hover:bg-surface-hover"
            >
              <span className="font-mono text-[11px] tracking-[.1em] text-accent">{sv.num}</span>
              <h3 className="text-[21px] font-semibold tracking-[-.02em]">{sv.title}</h3>
              <p className="text-[14.5px] leading-relaxed text-mute-2">{sv.body}</p>
              <span className="mt-auto font-mono text-[11.5px] tracking-[.04em] text-faint">{sv.stack}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Selected work */}
      <section className="container-mn pb-[clamp(72px,10vw,128px)]">
        <SectionHead title="Selected work" href="/work" linkLabel="All projects →" />
        <div className="grid grid-cols-[repeat(auto-fit,minmax(min(320px,100%),1fr))] gap-5">
          {projects
            .filter((p) => p.featured)
            .map((p) => (
              <FeaturedWorkCard key={p.client} project={p} />
            ))}
        </div>
      </section>

      {/* Testimonial (placeholder copy) */}
      <section className="border-t border-white/8 bg-white/[.015]">
        <figure className="container-mn py-[clamp(64px,8vw,104px)]">
          <blockquote
            data-reveal
            className="max-w-[24ch] text-[clamp(24px,3.4vw,42px)] font-medium leading-[1.28] tracking-[-.03em] max-sm:mx-auto"
          >
            “{testimonial.quote}”
          </blockquote>
          <figcaption className="mt-7 font-mono text-xs uppercase tracking-[.06em] text-mute-3">
            {testimonial.attribution}
          </figcaption>
        </figure>
      </section>

      <CtaBand />
    </div>
  );
}
