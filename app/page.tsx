import type { Metadata } from "next";
import HomePage from "@/components/HomePage";

export const metadata: Metadata = {
  title: "Fen Web Studio | Web Design for Small Businesses",
  description:
    "Fen Web Studio creates elegant, conversion-focused websites for small businesses that want to build trust, attract better leads, and stay polished over time.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Fen Web Studio | Web Design for Small Businesses",
    description:
      "Elegant, conversion-focused websites for small businesses that need trust, clarity, and a site that keeps working after launch.",
    type: "website",
    url: "/",
  },
  twitter: {
    card: "summary_large_image",
    title: "Fen Web Studio | Web Design for Small Businesses",
    description:
      "Elegant, conversion-focused websites for small businesses that need trust, clarity, and a site that keeps working after launch.",
  },
};

export default function Home() {
  return <HomePage />;
}
