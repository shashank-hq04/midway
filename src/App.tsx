import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Idea } from './components/Idea';
import { Experience } from './components/Experience';
import { Features } from './components/Features';
import { Philosophy } from './components/Philosophy';
import { ExploreGithub } from './components/ExploreGithub';
import { Footer } from './components/Footer';

export function App() {
  return (
    <div className="relative min-h-screen bg-[#060913] text-[#F8FAFC] selection:bg-[#00F0FF]/30 selection:text-[#00F0FF] overflow-x-hidden">
      {/* Global Tech Ambient Backgrounds */}
      <div className="fixed inset-0 tech-grid-pattern opacity-30 pointer-events-none -z-50" />
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-gradient-to-b from-[#00F0FF]/8 via-transparent to-transparent blur-[160px] pointer-events-none -z-40" />

      {/* Navigation */}
      <Navbar />

      {/* Main Sections */}
      <main>
        <Hero />
        <Idea />
        <Experience />
        <Features />
        <Philosophy />
        <ExploreGithub />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
