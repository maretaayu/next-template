import Link from "next/link";
import { posts } from "./dummy-data";

export default function PostsPage() {
  return (
    <div>
      <h1>Daftar Post</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.slug}>
            <Link href={`/posts/${post.slug}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
