import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";
import { siteConfig } from "@/config/site";

export const alt = `${siteConfig.name}: ${siteConfig.tagline}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// ImageResponse no lee variables CSS: estos valores replican los tokens de globals.css.
const colors = {
  bg: "#06060f",
  ink: "#e2e8f0",
  inkDim: "#a3b0c4",
  accent: "#4d7cff",
  violet: "#a78bfa",
  cyan: "#60efff",
};
const gradient = `linear-gradient(135deg, ${colors.accent} 0%, ${colors.violet} 55%, ${colors.cyan} 100%)`;

export default async function OpenGraphImage() {
  const [spaceGrotesk, inter, logo] = await Promise.all([
    readFile(join(process.cwd(), "src/assets/fonts/SpaceGrotesk-Bold.woff")),
    readFile(join(process.cwd(), "src/assets/fonts/Inter-Medium.woff")),
    readFile(join(process.cwd(), "public/icons/icon-512.png")),
  ]);
  const logoSrc = `data:image/png;base64,${logo.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 72,
          backgroundColor: colors.bg,
          backgroundImage: `radial-gradient(circle at 12% 0%, ${colors.accent}66 0%, transparent 45%), radial-gradient(circle at 95% 100%, ${colors.violet}4d 0%, transparent 45%)`,
          color: colors.ink,
          fontFamily: "Inter",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 24 }}>
          {/* eslint-disable-next-line @next/next/no-img-element -- ImageResponse solo admite <img> */}
          <img src={logoSrc} alt="" width={88} height={88} style={{ borderRadius: 20 }} />
          <div style={{ fontFamily: "Space Grotesk", fontSize: 40 }}>{siteConfig.name}</div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
          <div
            style={{
              fontFamily: "Space Grotesk",
              fontSize: 82,
              lineHeight: 1.05,
              letterSpacing: -2,
              maxWidth: 980,
              backgroundImage: gradient,
              backgroundClip: "text",
              color: "transparent",
            }}
          >
            {siteConfig.tagline}
          </div>
          <div style={{ fontSize: 30, color: colors.inkDim }}>
            {`Desarrollo web a la medida · ${siteConfig.location}`}
          </div>
        </div>
        <div style={{ display: "flex", height: 8, width: "100%", borderRadius: 8, backgroundImage: gradient }} />
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: "Space Grotesk", data: spaceGrotesk, weight: 700, style: "normal" },
        { name: "Inter", data: inter, weight: 500, style: "normal" },
      ],
    },
  );
}
