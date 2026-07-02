import { useState } from 'react';
import IntroAnimation from '@/components/IntroAnimation';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  const [showIntro, setShowIntro] = useState(true);

  return (
    <div className="min-h-screen">
      {showIntro && (
        <IntroAnimation
          onComplete={() => {
            setShowIntro(false);
            // give React a tick to unmount the intro, then scroll smoothly to Home
            setTimeout(() => document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' }), 50);
          }}
        />
      )}

      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
