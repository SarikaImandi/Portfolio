import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Code2, Globe, Database, Wrench } from 'lucide-react';
import { skillNodes } from '../data/skills';
import '../css/Skills.css';

gsap.registerPlugin(ScrollTrigger);

const NODE_ICONS: Record<string, React.ComponentType<{ size?: number; strokeWidth?: number }>> = {
  programming: Code2,
  'web-development': Globe,
  databases: Database,
  'frameworks-tools': Wrench,
};

export default function Skills() {
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.skills__heading', {
        opacity: 0,
        y: 40,
        duration: 0.9,
        ease: 'power3.out',
        scrollTrigger: { trigger: '.skills__heading', start: 'top 85%' },
      });

      const tl = gsap.timeline({
        scrollTrigger: { trigger: '.skills__grid', start: 'top 80%' },
      });

      tl.from('.skills__panel', {
        opacity: 0,
        y: 32,
        duration: 0.6,
        stagger: 0.1,
        ease: 'power3.out',
      })
        .from(
          '.skills__panel-icon',
          {
            opacity: 0,
            scale: 0.5,
            duration: 0.5,
            stagger: 0.1,
            ease: 'back.out(2)',
          },
          '-=0.45'
        )
        .from(
          '.skills__panel-rule',
          {
            scaleX: 0,
            transformOrigin: 'left center',
            duration: 0.5,
            stagger: 0.1,
            ease: 'power2.out',
          },
          '-=0.35'
        )
        .from(
          '.skills__tag',
          {
            opacity: 0,
            y: 6,
            duration: 0.35,
            stagger: 0.025,
            ease: 'power2.out',
          },
          '-=0.3'
        );
    }, rootRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="skills" className="section skills" ref={rootRef}>
      <div className="container">
        <p className="eyebrow skills__heading-eyebrow" style={{ textAlign: 'center' }}>
          Toolkit
        </p>
        <h2 className="skills__heading">Skills</h2>

        <div className="skills__grid">
          {skillNodes.map((node) => {
            const Icon = NODE_ICONS[node.id] ?? Code2;
            return (
              <div className="skills__panel" key={node.id}>
                <div className="skills__panel-head">
                  <h3 className="skills__panel-title">{node.label}</h3>
                  <span className="skills__panel-icon">
                    <Icon size={20} strokeWidth={2} />
                  </span>
                </div>
                <div className="skills__panel-rule" />
                <ul className="skills__taglist">
                  {node.items.map((item) => (
                    <li className="skills__tag" key={item}>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}