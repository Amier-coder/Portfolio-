import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Marquee } from "./components/Marquee";
import { About } from "./components/About";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Experience } from "./components/Experience";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { Background } from "./components/ui/Background";
import { CursorGlow } from "./components/ui/CursorGlow";
import { ScrollProgress } from "./components/ui/ScrollProgress";
import { Preloader } from "./components/ui/Preloader";
import { FloatingActions } from "./components/ui/FloatingActions";

export default function App() {
  return (
    <>
      <Preloader />
      <Background />
      <CursorGlow />
      <ScrollProgress />
      <Navbar />

      <main className="relative z-10">
        <Hero />
        <Marquee />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>

      <Footer />
      <FloatingActions />
    </>
  );
}
