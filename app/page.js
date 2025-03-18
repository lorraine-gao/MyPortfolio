import Image from "next/image";
import HeroSection from "./conponents/HeroSection";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col container place-self-center">
      <div className="container mx-auto px-12 py-2">
        <HeroSection/>
      </div>
    </div>
  );
}
