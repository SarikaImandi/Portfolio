import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import ThemeToggle from './ThemeToggle';
import { useSmoothScroll } from '../context/SmoothScrollContext';
import '../css/Navbar.css';

const LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Education', href: '#education' },
  { label: 'Skills', href: '#skills' },
  { label: 'Volunteering', href: '#volunteering' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const navRef = useRef<HTMLElement>(null);
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const lenis = useSmoothScroll();

  useEffect(() => {
    gsap.fromTo(
      navRef.current,
      { y: -40, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.9, ease: 'power3.out', delay: 0.2 }
    );

    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleLinkClick = (href: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    setMenuOpen(false);
    const target = document.querySelector<HTMLElement>(href);
    if (!target) return;
    if (lenis) {
      lenis.scrollTo(target, { duration: 1.2 });
    } else {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav ref={navRef} className={`navbar ${scrolled ? 'navbar--shrink' : ''}`}>
      <div className="navbar__inner">
        <a href="#hero" className="navbar__brand" onClick={handleLinkClick('#hero')}>
          SARIKA
        </a>

        <ul className="navbar__links">
          {LINKS.map((link) => (
            <li key={link.href}>
              <a href={link.href} onClick={handleLinkClick(link.href)}>
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="navbar__actions">
          <ThemeToggle />
          <button
            className="navbar__burger"
            onClick={() => setMenuOpen((o) => !o)}
            aria-label="Toggle menu"
            data-open={menuOpen}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>

      <div className={`navbar__mobile ${menuOpen ? 'navbar__mobile--open' : ''}`}>
        {LINKS.map((link) => (
          <a key={link.href} href={link.href} onClick={handleLinkClick(link.href)}>
            {link.label}
          </a>
        ))}
      </div>
    </nav>
  );
}