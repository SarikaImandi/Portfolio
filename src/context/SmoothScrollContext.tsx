import { createContext, useContext, useEffect, useState, type ReactNode } from 'react';
import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const SmoothScrollContext = createContext<Lenis | null>(null);

export function SmoothScrollProvider({ children }: { children: ReactNode }) {
  const [lenis, setLenis] = useState<Lenis | null>(null);

  useEffect(() => {
    const instance = new Lenis({
      duration: 1.2,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      // We drive the raf loop ourselves via GSAP's ticker below,
      // so Lenis shouldn't run its own.
      autoRaf: false,
    });

    // Keep ScrollTrigger's measurements in sync with Lenis on every scroll tick.
    instance.on('scroll', ScrollTrigger.update);

    // Drive Lenis from GSAP's ticker instead of its own rAF loop, so every
    // animation (Lenis's smoothing + all our ScrollTriggers) is on one clock.
    const tick = (time: number) => {
      instance.raf(time * 1000);
    };
    gsap.ticker.add(tick);
    gsap.ticker.lagSmoothing(0);

    setLenis(instance);

    return () => {
      gsap.ticker.remove(tick);
      instance.destroy();
      setLenis(null);
    };
  }, []);

  return <SmoothScrollContext.Provider value={lenis}>{children}</SmoothScrollContext.Provider>;
}

export function useSmoothScroll() {
  return useContext(SmoothScrollContext);
}