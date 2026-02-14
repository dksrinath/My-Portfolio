import React from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';
import { StarBackground } from './components/StarBackground';

const App: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen pb-24 md:pb-0 relative bg-slate-950">
      <StarBackground />
      <Navbar />
      <main className="flex-grow">
        <section id="home" className="bg-gradient-to-b from-slate-950/40 via-slate-900/40 to-slate-900/40 pt-16 relative z-10">
          <Hero />
        </section>
        <section id="about" className="bg-gradient-to-b from-slate-900/40 via-blue-950/30 to-slate-900/40 relative z-10">
          <About />
        </section>
        <section id="projects" className="bg-gradient-to-b from-slate-900/40 via-slate-900/20 to-slate-900/40 relative z-10">
          <Projects />
        </section>
        <section id="contact" className="bg-gradient-to-b from-slate-900/40 via-slate-900/40 to-transparent relative z-10">
          <Contact />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default App;