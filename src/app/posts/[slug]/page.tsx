import Image from "next/image";
import { posts } from "../dummy-data";
export default function PostDetail({ params }: { params: { slug: string } }) {
  const post = posts.find((p) => p.slug === params.slug);
  if (!post) return <h1>Post tidak ditemukan</h1>;

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.date}</p>
      {post.content.map((block, index) => {
        if (block.type === "text") return <p key={index}>{block.value}</p>;
        if (block.type === "image")
          return (
            <Image
              key={index}
              src={block.value}
              alt={`Gambar ${index + 1}`}
              width={200}
              height={200}
            />
          );
      })}
    </div>
  );
}
