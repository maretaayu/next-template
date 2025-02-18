import { posts } from "../../../data/content";
import Link from "next/link";
import { use } from "react";

type BlogParams = Promise<{ slug: string }>;

export default function BlogPost({ params }: { params: BlogParams }) {
  const { slug } = use(params);
  const post = posts.find((p) => p.slug === slug);

  if (!post) return <p>Post not found</p>;

  return (
    <div className="container mx-auto p-4 max-w-3xl">
      <Link href="/blog" className="text-blue-600 mb-4 block">
        &larr; Back to all posts
      </Link>

      <h1 className="text-3xl font-bold mb-2">{post.title}</h1>
      <p className="text-gray-500 mb-6">{post.date}</p>

      <div className="prose max-w-none">
        <p>{post.content}</p>
      </div>
    </div>
  );
}

export function generateStaticParams() {
  return posts.map((post) => ({
    slug: post.slug,
  }));
}
