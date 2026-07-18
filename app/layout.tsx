import type { Metadata } from "next";
import "@fontsource/plus-jakarta-sans/500.css";
import "@fontsource/plus-jakarta-sans/600.css";
import "@fontsource/plus-jakarta-sans/700.css";
import "@fontsource/inter/400.css";
import "@fontsource/inter/500.css";
import "@fontsource/inter/600.css";
import "./globals.css";

export const metadata: Metadata = {
  title: "Fen Studio — Web Design & Digital Solutions",
  description:
    "Fen Studio builds fast, distinctive websites, dashboards, and digital tools for founders who refuse to look like a template.",
  metadataBase: new URL("https://fenstudio.com"),
  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/",
    },
  },
  openGraph: {
    title: "Fen Studio — Web Design & Digital Solutions",
    description:
      "Fen Studio builds fast, distinctive websites, dashboards, and digital tools for founders who refuse to look like a template.",
    type: "website",
    url: "/",
    siteName: "Fen Studio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Fen Studio — Web Design & Digital Solutions",
    description:
      "Fen Studio builds fast, distinctive websites, dashboards, and digital tools for founders who refuse to look like a template.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
