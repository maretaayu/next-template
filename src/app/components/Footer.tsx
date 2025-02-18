import Image from "next/image";

function Footer() {
  return (
    <div className="flex flex-col md:flex-row gap-8 py-[80px] justify-center items-center bg-black text-white">
      <p className=" opacity-70">© 2025 Personal Showcase</p>
      <div className="flex justify-center flex-wrap items-center gap-8">
        <ul className="flex gap-8 items-center">
          <li>Home</li>
          <li>About</li>
          <li>Portfolio</li>
          <li>Contact</li>
        </ul>
        <span className="hidden md:block opacity-40">|</span>
        <div className="flex gap-8">
          <Image src="/logo-x.png" alt="X" width={40} height={40} />
          <Image src="/logo-in.png" alt="LinkedIn" width={40} height={40} />
          <Image src="/logo-gh.png" alt="GitHub" width={40} height={40} />
        </div>
      </div>
    </div>
  );
}

export { Footer };
