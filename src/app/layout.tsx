import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono, Space_Grotesk } from "next/font/google";
import type { ReactNode } from "react";
import { MotionProvider } from "@/components/client/motion/MotionProvider";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { MAIN_CONTENT_ID, SkipLink } from "@/components/layout/SkipLink";
import { WhatsAppFloat } from "@/components/layout/WhatsAppFloat";
import { siteConfig } from "@/config/site";
import { buildProfessionalServiceJsonLd } from "@/lib/structured-data";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});
const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: { default: siteConfig.name, template: `%s | ${siteConfig.name}` },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  authors: [{ name: siteConfig.owner, url: siteConfig.url }],
  formatDetection: { telephone: false },
};

// Mismo valor que el token --color-bg de globals.css.
export const viewport: Viewport = { themeColor: "#06060f", colorScheme: "dark" };

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang={siteConfig.locale} className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable}`}>
      <body className="flex min-h-dvh flex-col antialiased">
        {/* Sin JavaScript, el contenido que se revela con scroll se muestra tal cual. */}
        <noscript>
          <style>{"[data-reveal]{opacity:1!important;transform:none!important}"}</style>
        </noscript>
        <SkipLink />
        <MotionProvider>
          <Header />
          <main id={MAIN_CONTENT_ID} className="flex-1">
            {children}
          </main>
          <Footer />
        </MotionProvider>
        <WhatsAppFloat />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: buildProfessionalServiceJsonLd() }}
        />
      </body>
    </html>
  );
}
