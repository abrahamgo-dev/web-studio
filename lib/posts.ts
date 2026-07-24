import postsData from "@/content/blog/posts.json";

export interface Post {
  slug: string;
  title: string;
  titleEs: string;
  excerpt: string;
  excerptEs: string;
  body: string;
  bodyEs: string;
  date: string;
  tag: string;
  tagEs: string;
  /** True until this is swapped for a real published post. */
  isExample: boolean;
}

export const POSTS: Post[] = [...(postsData as Post[])].sort((a, b) =>
  a.date < b.date ? 1 : -1,
);

export function getPost(slug: string): Post | undefined {
  return POSTS.find((post) => post.slug === slug);
}
