// src/components/Listing.tsx
import Link from "next/link";
import Image from "next/image";
import { posts } from "../data/content";

interface ListingProps {
  limit?: number;
}

export default function Listing({ limit }: ListingProps) {
  const displayedPosts = limit ? posts.slice(0, limit) : posts;

  return (
    <div className="page-center grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {displayedPosts.map((post) => (
        <div
          key={post.slug}
          className=" text-left border p-4 rounded-lg shadow-sm"
        >
          <Image
            src={post.thumbnail}
            alt={post.title}
            width={400}
            height={250}
            className="rounded-md w-full h-48 object-cover"
          />
          <h2 className="text-lg font-semibold mt-3">
            <Link
              href={`/blog/${post.slug}`}
              className="text-blue-600 hover:underline"
            >
              {post.title}
            </Link>
          </h2>
          <p className="text-sm text-gray-500">
            {post.category} • {post.date}
          </p>
        </div>
      ))}
    </div>
  );
}
