import type { Metadata, Viewport } from "next";
import type React from "react";
import { IBM_Plex_Mono, Space_Grotesk } from "next/font/google";
import { SiteProvider } from "@/context/site-context";
import { BackgroundShader } from "@/components/site/background-shader";
import { ScrollProgress } from "@/components/site/scroll-progress";
import { Header } from "@/components/site/header";
import { Footer } from "@/components/site/footer";
import { Animations } from "@/components/site/animations";
import { site } from "@/content/site";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const plexMono = IBM_Plex_Mono({
  variable: "--font-plex-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — Software that earns its keep`,
    template: `%s — ${site.name}`,
  },
  description: site.description,
  openGraph: {
    type: "website",
    siteName: site.name,
    title: `${site.name} — Software that earns its keep`,
    description: site.description,
    url: site.url,
  },
  twitter: { card: "summary_large_image" },
};

export const viewport: Viewport = {
  themeColor: "#0B0B0C",
  colorScheme: "dark",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${plexMono.variable}`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('mn-js')" }} />
      </head>
      <body>
        <SiteProvider>
          <div className="relative min-h-screen">
            <BackgroundShader />
            <ScrollProgress />
            <Header />
            <main className="relative z-10">{children}</main>
            <Footer />
          </div>
          <Animations />
        </SiteProvider>
      </body>
    </html>
  );
}
