import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import MarqueeTicker from "@/components/MarqueeTicker";
import Showcase from "@/components/Showcase";
import Experience from "@/components/Experience";
import CurrentFocus from "@/components/CurrentFocus";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="w-full">
        <Hero />
        <MarqueeTicker />
        <Experience />
        <CurrentFocus />
        <Showcase />
        <Contact />
      </main>
    </>
  );
}
