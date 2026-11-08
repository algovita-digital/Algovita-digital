import type { Metadata } from "next";
import { Bowlby_One, Bowlby_One_SC, Inter } from "next/font/google";
import "./globals.css";

/*
  Free stand-ins for the fonts named in DESIGN.md:
  - Lateral 800    -> Bowlby One (listed as a substitute in the design file)
  - Aeonik Pro     -> Inter      (listed as a substitute in the design file)
*/
const display = Bowlby_One({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-display-src",
  display: "swap",
});

const brand = Bowlby_One_SC({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-brand-src",
  display: "swap",
});

const ui = Inter({
  weight: ["500", "700"],
  subsets: ["latin"],
  variable: "--font-ui-src",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Algovita Digital",
  description:
    "Algovita Digital builds high-performance web applications and intelligent AI automations that save time, scale sales, and elevate your brand.",
  icons: {
    icon: "/algovita-favicon.png",
    shortcut: "/algovita-favicon.png",
    apple: "/algovita-favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${display.variable} ${brand.variable} ${ui.variable} font-aeonik`}>
        {children}
      </body>
    </html>
  );
}
