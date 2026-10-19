import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import AboutMe from "./components/AboutMe";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-[#030617] text-slate-100 flex flex-col selection:bg-purple-500/30 selection:text-white">
      {/* Top Navigation */}
      <Navbar />

      {/* Main Single Page Sections */}
      <main className="grow">
        <Hero />
        <AboutMe />
        <Skills />
        <Education />
        <Projects />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;