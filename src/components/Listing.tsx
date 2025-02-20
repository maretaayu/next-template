// src/components/Listing.tsx
import { posts } from "../data/content";
import Card from "./Card";

type ListingProps = {
  limit?: number;
};

export default function Listing({ limit }: ListingProps) {
  const displayedPosts = limit ? posts.slice(0, limit) : posts;

  return (
    <div className="page-center grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {displayedPosts.map((post) => (
        <div key={post.slug}>
          <Card
            thumbnail={post.thumbnail}
            title={post.title}
            url={`/blog/${post.slug}`}
            subtitle={post.category}
            description={post.date}
          />
        </div>
      ))}
    </div>
  );
}
