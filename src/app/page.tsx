import { Achievement } from "./components/achievement";
import { Hero } from "./components/hero";
import { Portfolio } from "./components/portfolio";
import { Testimony } from "./components/testimony";

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
