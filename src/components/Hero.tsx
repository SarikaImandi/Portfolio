import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import Button from './Button';
import '../img/imandi.jpg';
import '../css/Hero.css';

export default function Hero() {
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 0.4 });
      tl.from('.hero__logo-line', { y: 24, opacity: 0, duration: 0.8, ease: 'power3.out', stagger: 0.15 })
        .from('.hero__photo', { scale: 0.9, opacity: 0, duration: 0.9, ease: 'power3.out' }, '-=0.5')
        .from('.hero__intro > *', { y: 20, opacity: 0, duration: 0.7, ease: 'power3.out', stagger: 0.1 }, '-=0.6');
    }, rootRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="hero" className="section hero" ref={rootRef}>
      <div className="container hero__inner">
        <div className="hero__logo">
          <p className="hero__logo-line hero__logo-name">S A R I K A</p>
          <p className="hero__logo-line hero__logo-sub">Imandi Kariyapperuma</p>
        </div>

        <div className="hero__content">
          <div className="hero__photo">
            <img src="src/img/imandi.jpg" alt="Portrait of Sarika Imandi Kariyapperuma" />
          </div>

          <div className="hero__intro">
            <p className="eyebrow">Computer Science Undergraduate</p>
            <p className="hero__text">
              I'm a Computer Science undergraduate at the Informatics Institute of Technology
              (affiliated with the University of Westminster, UK) with a passion for building
              modern, user-focused software. I enjoy turning ideas into practical solutions
              through clean code, problem-solving, and continuous learning. Beyond development,
              I have experience leading group projects, coordinating teams, and keeping projects
              on track by managing tasks and timelines effectively. I'm always eager to learn new
              technologies and contribute to meaningful software that makes a difference.
            </p>
            <Button href="/cv.pdf" target="_blank">
              Download CV
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
