import type { MetadataRoute } from "next";
import { navItems, site } from "@/content/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return ["/", ...navItems.map((n) => n.href)].map((path) => ({
    url: `${site.url}${path === "/" ? "" : path}`,
    changeFrequency: "monthly",
    priority: path === "/" ? 1 : 0.7,
  }));
}
