import type { Metadata } from "next";
import { Geist, Geist_Mono, Bricolage_Grotesque } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import Structure from "@/components/Structure/Structure";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const bricolage = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin"],
});

// Since Cabinet Grotesk is usually a local font or from a CDN, 
// I'll use a standard serif/sans fallback if I can't find it on Google Fonts.
// Actually, I'll search for it on Google Fonts first.
// If it's not there, I'll use Bricolage for headings as well or a similar font.

export const metadata: Metadata = {
  title: "Mitali Full Stack Developer",
  description: "Organised with a separate structure component",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} ${bricolage.variable}`}>
      <body>
        <Structure>
          {children}
        </Structure>
      </body>
    </html>
  );
}
