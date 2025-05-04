import type { Metadata } from "next";
import BlogPostGrid from "@/components/blog/BlogPostGrid";
import { getAllPosts } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Blog | Panyawut Suton",
  description:
    "Read articles about web development, frontend technologies, and career insights by Panyawut Suton",
};

export default async function BlogPage() {
  const posts = await getAllPosts();

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8">Blog</h1>
      <p className="text-lg mb-12 max-w-3xl">
        I write about web development, frontend technologies, and career
        insights. Check out my latest articles below.
      </p>

      <BlogPostGrid posts={posts} />
    </div>
  );
}
