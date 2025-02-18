import Link from "next/link";

function Navbar() {
  return (
    <ul className="fixed top-0 left-0  bg-white w-full z-50 flex justify-center gap-8 py-6 px-4 border-b-zinc-100 border-b-1">
      <li>
        <Link href="/">Home</Link>
      </li>
      <li>
        <Link href="/about">About</Link>
      </li>
      <li>
        <Link href="/blog">Blog</Link>
      </li>
    </ul>
  );
}

export { Navbar };
