import Navbar from "@/components/Navbar";
import HeroSection from "@/sections/Hero-section";
import Services from "@/sections/Services";
import Image from "next/image";

// font-[family-name:var(--font-geist-sans)]

export default function Home() {
  return (
    <>
      <main>
        <section className="relative h-screen bg-secondaryBackground ">
          <figure className="absolute top-0 left-0 w-full h-full">
            <Image
              src={"/backgrounds/hero.svg"}
              width={1512}
              height={969}
              alt="America"
              className="w-full h-full object-cover"
              priority
            />
          </figure>

          <Navbar />

          <section>
            <h2></h2>
            <h1></h1>
            <h3></h3>
          </section>
        </section>
        <Services />
      </main>
      <footer></footer>
    </>
  );
}
