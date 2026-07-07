import { useRef } from 'react';
import gsap from 'gsap';
import { useTheme } from '../context/ThemeContext';
import '../css/ThemeToggle.css';

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const knobRef = useRef<HTMLSpanElement>(null);

  const handleClick = () => {
    gsap.to(knobRef.current, {
      rotate: '+=180',
      duration: 0.5,
      ease: 'back.out(1.7)',
    });
    toggleTheme();
  };

  return (
    <button
      className="theme-toggle"
      onClick={handleClick}
      aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
      data-active={theme}
    >
      <span className="theme-toggle__track">
        <span className="theme-toggle__thumb" style={{ transform: theme === 'dark' ? 'translateX(0)' : 'translateX(22px)' }}>
          <span ref={knobRef} className="theme-toggle__icon">
            {theme === 'dark' ? '☾' : '☀'}
          </span>
        </span>
      </span>
    </button>
  );
}
