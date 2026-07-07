import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { education } from '../data/education';
import '../css/Education.css';

gsap.registerPlugin(ScrollTrigger);

export default function Education() {
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.education__heading', {
        opacity: 0,
        y: 40,
        duration: 0.9,
        ease: 'power3.out',
        scrollTrigger: { trigger: '.education__heading', start: 'top 85%' },
      });

      gsap.to('.education__line-fill', {
        scaleY: 1,
        ease: 'none',
        scrollTrigger: {
          trigger: '.education__timeline',
          start: 'top 70%',
          end: 'bottom 60%',
          scrub: 0.6,
        },
      });

      gsap.utils.toArray<HTMLElement>('.education__node').forEach((node, i) => {
        gsap.from(node, {
          opacity: 0,
          x: i % 2 === 0 ? -50 : 50,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: { trigger: node, start: 'top 85%' },
        });
      });
    }, rootRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="education" className="section education" ref={rootRef}>
      <div className="container">
        <p className="eyebrow education__heading-eyebrow">Journey</p>
        <h2 className="education__heading">Education</h2>

        <div className="education__timeline">
          <div className="education__line">
            <div className="education__line-fill" />
          </div>

          {education.map((entry, i) => (
            <div className={`education__node ${i % 2 === 0 ? 'education__node--left' : 'education__node--right'}`} key={entry.id}>
              <div className="education__dot" />
              <div className="education__card">
                <span className="education__year">{entry.year}</span>
                <h3 className="education__qualification">{entry.qualification}</h3>
                <p className="education__institution">{entry.institution}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
