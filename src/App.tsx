import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ThemeProvider } from './context/ThemeContext';
import { SmoothScrollProvider } from './context/SmoothScrollContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Education from './components/Education';
import Skills from './components/Skills';
import Volunteering from './components/Volunteering';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollTopButton from './components/ScrollTopButton.tsx';

gsap.registerPlugin(ScrollTrigger);

export default function App() {
  useEffect(() => {
    const refresh = () => ScrollTrigger.refresh();
    window.addEventListener('load', refresh);
    return () => {
      window.removeEventListener('load', refresh);
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, []);

  return (
    <ThemeProvider>
      <SmoothScrollProvider>
        <Navbar />
        <main>
          <Hero />
          <Projects />
          <Education />
          <Skills />
          <Volunteering />
          <Contact />
        </main>
        <Footer />
        <ScrollTopButton />
      </SmoothScrollProvider>
    </ThemeProvider>
  );
}
