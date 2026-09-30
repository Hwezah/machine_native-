"use client";

import { useLayoutEffect } from "react";
import { usePathname } from "next/navigation";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useSite } from "@/context/site-context";

gsap.registerPlugin(ScrollTrigger);

/**
 * Runs the word-reveal on `[data-split]` headings (see <SplitHeading>) and the
 * scroll reveal on `[data-reveal]` elements. Re-runs on every route change.
 */
export function Animations() {
  const pathname = usePathname();
  const { motionFactor: k } = useSite();

  useLayoutEffect(() => {
    if (k === 0) {
      // Reduced motion: show everything in its final state.
      document.documentElement.classList.add("mn-static");
      return;
    }
    document.documentElement.classList.remove("mn-static");

    const ctx = gsap.context(() => {
      document.querySelectorAll("[data-split]").forEach((el) => {
        gsap.fromTo(
          el.querySelectorAll(".mn-w"),
          { yPercent: 108, opacity: 0 },
          {
            yPercent: 0,
            opacity: 1,
            duration: 1.05 * (0.6 + 0.4 * k),
            ease: "expo.out",
            stagger: 0.055 * k,
            delay: 0.05,
          },
        );
      });

      gsap.utils.toArray<HTMLElement>("[data-reveal]").forEach((el, i) => {
        gsap.fromTo(
          el,
          { y: 34 * k, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.9,
            ease: "power3.out",
            delay: (i % 4) * 0.06 * k,
            scrollTrigger: { trigger: el, start: "top 90%", once: true },
          },
        );
      });
    });

    ScrollTrigger.refresh();
    return () => ctx.revert();
  }, [pathname, k]);

  return null;
}
