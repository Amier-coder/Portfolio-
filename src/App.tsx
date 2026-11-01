import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Marquee } from "./components/Marquee";
import { About } from "./components/About";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Experience } from "./components/Experience";
import { Education } from "./components/Education";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { Background } from "./components/ui/Background";
import { CursorGlow } from "./components/ui/CursorGlow";
import { ScrollProgress } from "./components/ui/ScrollProgress";
import { Preloader } from "./components/ui/Preloader";
import { FloatingActions } from "./components/ui/FloatingActions";

export default function App() {
  return (
    <div className="relative w-full max-w-full overflow-x-hidden">
      <Preloader />
      <Background />
      <CursorGlow />
      <ScrollProgress />
      <Navbar />

      <main className="relative z-10 w-full max-w-full overflow-hidden">
        <Hero />
        <Marquee />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Education />
        <Contact />
      </main>

      <Footer />
      <FloatingActions />
    </div>
  );
}
