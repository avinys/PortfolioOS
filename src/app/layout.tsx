import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import PlausibleProvider from "next-plausible";

const siteUrl = "https://arvydasvingis.com";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Arvydas Vingis | Web Engineer at Vinted",
    template: "%s | Arvydas Vingis",
  },
  description:
    "Arvydas Vingis is a Web Engineer at Vinted building core marketplace experiences with React, TypeScript, frontend architecture, and observability.",
  applicationName: "Arvydas Vingis Portfolio",
  authors: [{ name: "Arvydas Vingis", url: siteUrl }],
  creator: "Arvydas Vingis",
  keywords: [
    "Arvydas Vingis",
    "Web Engineer",
    "Frontend Engineer",
    "Vinted",
    "React",
    "TypeScript",
    "frontend architecture",
    "frontend modularization",
    "service extraction",
    "Prometheus",
    "Grafana",
    "observability",
    "metadata modeling",
    "semantic interoperability",
    "SEMIC",
    "AI-assisted software engineering",
    "coding agents",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "profile",
    url: "/",
    siteName: "Arvydas Vingis Portfolio",
    title: "Arvydas Vingis | Web Engineer at Vinted",
    description:
      "Web Engineer building and owning core marketplace experiences with React, TypeScript, frontend architecture, and observability.",
    images: [
      {
        url: "/av_os.png",
        width: 500,
        height: 500,
        alt: "Arvydas Vingis portfolio mark",
      },
    ],
    firstName: "Arvydas",
    lastName: "Vingis",
  },
  twitter: {
    card: "summary",
    title: "Arvydas Vingis | Web Engineer at Vinted",
    description:
      "Web Engineer building and owning core marketplace experiences with React, TypeScript, frontend architecture, and observability.",
    images: ["/av_os.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: [
      { url: "/av_logo_dark.png", media: "(prefers-color-scheme: light)" },
      { url: "/av_logo_white.png", media: "(prefers-color-scheme: dark)" },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-portfolio-ready="false" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <PlausibleProvider domain="arvydasvingis.com" trackFileDownloads />
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
