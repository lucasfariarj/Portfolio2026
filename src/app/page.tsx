import About from "@/components/About";
import Contact from "@/components/Contact";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import TechStack from "@/components/TechStack";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Experience />
        {/* <Projects /> */}
        <TechStack />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
