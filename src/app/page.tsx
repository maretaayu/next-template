import { Achievement } from "./components/achievement";
import { Hero } from "./components/hero";
import { Portfolio } from "./components/portfolio";
import { Testimony } from "./components/testimony";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home Page John",
  description: "Welcome to my website",
};

export default function Home() {
  return (
    <>
      <Hero />
      <Achievement />
      <div className="page-center">
        <Portfolio />
        <Testimony />
      </div>
    </>
  );
}
