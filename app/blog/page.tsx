import type { Metadata } from "next";
import BlogIndex from "@/components/BlogIndex";
import { POSTS } from "@/lib/posts";

export const metadata: Metadata = {
  title: "Notes from the studio — Fen Web Studio",
  description:
    "Short, occasional notes on design, upkeep, and what actually moves the needle for a small business site.",
  alternates: {
    canonical: "/blog",
  },
};

export default function BlogPage() {
  return <BlogIndex posts={POSTS} />;
}
