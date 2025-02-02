import Navbar from "@/components/Navbar";
import Image from "next/image";

const HeroSection = () => {
  return (
    <section className="relative h-screen bg-secondaryBackground ">
      <div className=" absolute top-0 left-0 w-full h-full">
        <Image
          src={"/backgrounds/hero.svg"}
          width={1512}
          height={969}
          alt="America"
          className=" w-full h-full object-cover"
          priority
        />
      </div>

      <Navbar />
      <section>
        <h2></h2>
        <h1></h1>
        <h3></h3>
      </section>
    </section>
  );
};

export default HeroSection;
