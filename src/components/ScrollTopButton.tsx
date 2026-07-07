import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { useSmoothScroll } from '../context/SmoothScrollContext';
import '../css/ScrollTopButton.css';

export default function ScrollTopButton() {
  const btnRef = useRef<HTMLButtonElement>(null);
  const [visible, setVisible] = useState(false);
  const lenis = useSmoothScroll();

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > window.innerHeight * 0.6);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (!btnRef.current) return;
    gsap.to(btnRef.current, {
      opacity: visible ? 1 : 0,
      y: visible ? 0 : 16,
      scale: visible ? 1 : 0.85,
      pointerEvents: visible ? 'auto' : 'none',
      duration: 0.4,
      ease: 'power3.out',
    });
  }, [visible]);

  const handleEnter = () => gsap.to(btnRef.current, { y: -4, duration: 0.3, ease: 'power3.out' });
  const handleLeave = () => gsap.to(btnRef.current, { y: 0, duration: 0.3, ease: 'power3.out' });

  const scrollToTop = () => {
    if (lenis) {
      lenis.scrollTo(0, { duration: 1.4 });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <button
      ref={btnRef}
      className="scroll-top"
      onClick={scrollToTop}
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
      aria-label="Scroll back to top"
    >
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M12 19V5M12 5L5 12M12 5l7 7" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </button>
  );
}