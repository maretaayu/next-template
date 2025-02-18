import { posts } from "../../../data/content";
type Params = { params: { slug: string } };

export default function BlogPost({ params }: Params) {
  const post = posts.find((p) => p.slug === params.slug);
  if (!post) return <p>Post not found</p>;

  return (
    <main>
      <h1 className="text-2xl font-bold">{post.title}</h1>
      <p>{post.content}</p>
    </main>
  );
}
