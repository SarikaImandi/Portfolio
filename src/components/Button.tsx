import { useRef, type ReactNode } from 'react';
import gsap from 'gsap';
import '../css/Button.css';

interface ButtonProps {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: 'solid' | 'outline';
  as?: 'a' | 'button';
  type?: 'button' | 'submit';
  target?: string;
}

export default function Button({
  children,
  href,
  onClick,
  variant = 'solid',
  as,
  type = 'button',
  target,
}: ButtonProps) {
  const ref = useRef<HTMLAnchorElement & HTMLButtonElement>(null);

  const handleEnter = () => {
    gsap.to(ref.current, { scale: 1.045, duration: 0.35, ease: 'power3.out' });
  };
  const handleLeave = () => {
    gsap.to(ref.current, { scale: 1, duration: 0.35, ease: 'power3.out' });
  };

  const className = `btn btn--${variant}`;
  const Tag = as ?? (href ? 'a' : 'button');

  if (Tag === 'a') {
    return (
      <a
        ref={ref}
        href={href}
        target={target}
        rel={target === '_blank' ? 'noopener noreferrer' : undefined}
        className={className}
        onMouseEnter={handleEnter}
        onMouseLeave={handleLeave}
        onClick={onClick}
      >
        <span>{children}</span>
      </a>
    );
  }

  return (
    <button
      ref={ref}
      type={type}
      className={className}
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
      onClick={onClick}
    >
      <span>{children}</span>
    </button>
  );
}
