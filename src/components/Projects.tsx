import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { projects } from '../data/projects';
import ProjectCard from './ProjectCard';
import '../css/Projects.css';

gsap.registerPlugin(ScrollTrigger);

export default function Projects() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const introRef = useRef<HTMLDivElement>(null);
  const stackRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to('.projects__intro-subtitle', {
        y: 10,
        repeat: -1,
        yoyo: true,
        duration: 1.2,
        ease: 'sine.inOut',
      });

      gsap.from('.projects__intro-title', {
        opacity: 0,
        y: 60,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: introRef.current,
          start: 'top 70%',
        },
      });

      const cards = cardRefs.current.filter(Boolean) as HTMLDivElement[];
      const total = cards.length;

      cards.forEach((card, i) => {
        gsap.set(card, { zIndex: total - i, xPercent: i === 0 ? 0 : 100, opacity: i === 0 ? 1 : 1 });
      });

      const clamp = (v: number, min = 0, max = 1) => Math.min(max, Math.max(min, v));

      ScrollTrigger.create({
        trigger: stackRef.current,
        start: 'top top',
        end: () => `+=${(total - 1) * (window.innerHeight * 0.9)}`,
        pin: true,
        scrub: 0.6,
        onUpdate: (self) => {
          const progress = self.progress * (total - 1);
          cards.forEach((card, i) => {
            const enter = i === 0 ? 1 : clamp(progress - (i - 1));
            const exit = clamp(progress - i);
            const x = (1 - enter) * 100 + exit * -100;
            gsap.set(card, { xPercent: x });
          });
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="projects" className="section projects" ref={sectionRef}>
      <div className="projects__intro" ref={introRef}>
        <h2 className="projects__intro-title">PROJECTS</h2>
        <p className="projects__intro-subtitle">Scroll to Explore ↓</p>
      </div>

      <div className="projects__stack" ref={stackRef}>
        <div className="projects__stack-inner">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              ref={(el) => {
                cardRefs.current[index] = el;
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
