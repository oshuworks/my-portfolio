import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Projects from "../components/Projects";
import Experience from "../components/Experience";
import TechStack from "../components/TechStack";
import Education from "../components/Education";
import Certifications from "../components/Certifications";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex flex-col w-full bg-background min-h-screen">
        <Hero />
        <About />
        <Projects />
        <Experience />
        <TechStack />
        <Education />
        <Certifications />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
