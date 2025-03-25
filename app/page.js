import Image from "next/image";
import HeroSection from "./conponents/HeroSection";
import AboutSection from "./conponents/AboutSection";
import ProjectSection from "./conponents/ProjectSection";
import ContactSection from "./conponents/ContactSection";


export default function Home() {
  return (
    <div className="flex min-h-screen flex-col container w-full place-self-center mt-15 lg:mt-0 ">
      <div className="mx-6 py-2">
        <HeroSection/>
        <AboutSection/>
        <ProjectSection/>
        <ContactSection/>
      </div>
    </div>
  );
}
