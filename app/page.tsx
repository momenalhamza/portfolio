import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Journey from "./components/Journey";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <hr className="rule mx-auto max-w-7xl" />
      <About />
      <hr className="rule mx-auto max-w-7xl" />
      <Skills />
      <hr className="rule mx-auto max-w-7xl" />
      <Projects />
      <hr className="rule mx-auto max-w-7xl" />
      <Journey />
      <Contact />
    </>
  );
}
