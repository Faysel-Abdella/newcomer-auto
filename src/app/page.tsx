import Image from "next/image";

// font-[family-name:var(--font-geist-sans)]

export default function Home() {
  return (
    <main className="relative h-screen bg-[#F3F1F4]">
      <div className="absolute top-0 left-0 w-full h-full">
        <Image
          src={"/backgrounds/hero.svg"}
          width={1512}
          height={969}
          alt="America"
          className="w-full h-full object-cover"
          priority
        />
      </div>

      <section></section>
    </main>
  );
}
