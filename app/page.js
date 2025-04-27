import Image from "next/image";
import HeroSection from "./conponents/HeroSection";
import AboutSection from "./conponents/AboutSection";
import ProjectSection from "./conponents/ProjectSection";
import ContactSection from "./conponents/ContactSection";
import NavSection from "./conponents/NavSection";
import Footer from "./conponents/Footer";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col w-full mx-auto mt-0">
      <NavSection/>
      <div className="mx-12 lg:mx-25 py-2">
        <HeroSection/>
        <AboutSection/>
        <ProjectSection/>
        <ContactSection/>
      </div>
      <Footer/>
    </div>
  );
}
