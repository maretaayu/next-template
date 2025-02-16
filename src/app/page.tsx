import { Achievement } from "./components/Achievement";
import { Hero } from "./components/Hero";
import { Portfolio } from "./components/Portfolio";
import { Testimony } from "./components/Testimony";
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
