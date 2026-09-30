"use client";

import { useEffect, useState } from "react";
import { site } from "@/content/site";

function now() {
  const t = new Date().toLocaleTimeString("en-GB", {
    hour: "2-digit",
    minute: "2-digit",
    timeZone: site.timeZone,
  });
  return `EAT ${t} — Kampala, Uganda`;
}

/** Live Kampala clock, refreshed every 30s. Rendered client-side only to avoid hydration drift. */
export function Clock() {
  const [time, setTime] = useState("");

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect -- time is only known on the client
    setTime(now());
    const id = setInterval(() => setTime(now()), 30_000);
    return () => clearInterval(id);
  }, []);

  return <span suppressHydrationWarning>{time || "EAT — Kampala, Uganda"}</span>;
}
