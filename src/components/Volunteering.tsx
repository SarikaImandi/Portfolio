import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { volunteering } from '../data/volunteering';
import '../css/Volunteering.css';

gsap.registerPlugin(ScrollTrigger);

export default function Volunteering() {
  const rootRef = useRef<HTMLDivElement>(null);
  const [activeId, setActiveId] = useState<string | null>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  const active = volunteering.find((v) => v.id === activeId) ?? null;

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.volunteering__heading', {
        opacity: 0,
        y: 40,
        duration: 0.9,
        ease: 'power3.out',
        scrollTrigger: { trigger: '.volunteering__heading', start: 'top 85%' },
      });

      gsap.from('.volunteering__row', {
        opacity: 0,
        y: 24,
        duration: 0.7,
        stagger: 0.1,
        ease: 'power3.out',
        scrollTrigger: { trigger: '.volunteering__list', start: 'top 80%' },
      });
    }, rootRef);

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    if (cardRef.current) {
      gsap.fromTo(
        cardRef.current,
        { opacity: 0, x: 40 },
        { opacity: 1, x: 0, duration: 0.55, ease: 'power3.out' }
      );
    }
  }, [activeId]);

  const toggle = (id: string) => {
    setActiveId((cur) => (cur === id ? null : id));
  };

  return (
    <section id="volunteering" className="section volunteering" ref={rootRef}>
      <div className="container volunteering__container">
        <div className={`volunteering__main ${activeId ? 'volunteering__main--shifted' : ''}`}>
          <p className="eyebrow">Giving Back</p>
          <h2 className="volunteering__heading">Volunteering</h2>

          <ul className="volunteering__list">
            {volunteering.map((entry) => {
              const isActive = entry.id === activeId;
              return (
                <li key={entry.id} className={`volunteering__row ${isActive ? 'volunteering__row--active' : ''}`}>
                  <button className="volunteering__row-btn" onClick={() => toggle(entry.id)}>
                    <div className="volunteering__row-text">
                      <span className="volunteering__org">{entry.organization}</span>
                      <span className="volunteering__role">{entry.role}</span>
                    </div>
                    <span className="volunteering__toggle">{isActive ? '×' : '+'}</span>
                  </button>
                </li>
              );
            })}
          </ul>
        </div>

        {active && (
          <div className="volunteering__card" ref={cardRef}>
            <div className="volunteering__card-image" style={{ backgroundImage: `url(${active.image})` }} />
            <div className="volunteering__card-body">
              <span className="volunteering__card-duration">{active.duration}</span>
              <h3 className="volunteering__card-org">{active.organization}</h3>
              <p className="volunteering__card-role">{active.role}</p>
              <p className="volunteering__card-desc">{active.description}</p>
            </div>
          </div>
        )}

        <p className="volunteering__vertical" aria-hidden="true">
          VOLUNTEERING
        </p>
      </div>
    </section>
  );
}
