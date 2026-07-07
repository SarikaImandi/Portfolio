import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import emailjs from '@emailjs/browser';
import Button from './Button';
import '../css/Contact.css';

gsap.registerPlugin(ScrollTrigger);

// Replace these with your own EmailJS credentials from https://www.emailjs.com/
const EMAILJS_SERVICE_ID = 'YOUR_SERVICE_ID';
const EMAILJS_TEMPLATE_ID = 'YOUR_TEMPLATE_ID';
const EMAILJS_PUBLIC_KEY = 'YOUR_PUBLIC_KEY';

type Status = 'idle' | 'sending' | 'success' | 'error';

export default function Contact() {
  const rootRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const successRef = useRef<HTMLDivElement>(null);
  const [status, setStatus] = useState<Status>('idle');

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.contact__heading, .contact__form, .contact__subtitle', {
        opacity: 0,
        y: 40,
        duration: 0.9,
        stagger: 0.12,
        ease: 'power3.out',
        scrollTrigger: { trigger: rootRef.current, start: 'top 75%' },
      });
    }, rootRef);
    return () => ctx.revert();
  }, []);

  useEffect(() => {
    if (status === 'success' && successRef.current) {
      gsap.fromTo(
        successRef.current,
        { opacity: 0, scale: 0.85 },
        { opacity: 1, scale: 1, duration: 0.5, ease: 'back.out(1.8)' }
      );
    }
  }, [status]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;
    setStatus('sending');

    try {
      await emailjs.sendForm(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, formRef.current, {
        publicKey: EMAILJS_PUBLIC_KEY,
      });
      setStatus('success');
      formRef.current.reset();
    } catch (err) {
      console.error('EmailJS error:', err);
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="section contact" ref={rootRef}>
      <div className="container contact__inner">
        <p className="eyebrow">Let's Talk</p>
        <h2 className="contact__heading">Contact Me</h2>
        <p className="contact__subtitle">
          Have an opportunity, a project, or just want to say hello? My inbox is always open.
        </p>

        {status === 'success' ? (
          <div className="contact__success" ref={successRef}>
            <span className="contact__success-icon">✓</span>
            <p>Message sent — thank you! I'll get back to you soon.</p>
            <Button variant="outline" onClick={() => setStatus('idle')}>
              Send another message
            </Button>
          </div>
        ) : (
          <form className="contact__form" ref={formRef} onSubmit={handleSubmit}>
            <div className="contact__field">
              <label htmlFor="name">Name</label>
              <input id="name" name="user_name" type="text" placeholder="Your name" required />
            </div>
            <div className="contact__field">
              <label htmlFor="email">Email</label>
              <input id="email" name="user_email" type="email" placeholder="you@example.com" required />
            </div>
            <div className="contact__field">
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" rows={5} placeholder="Tell me a little about it..." required />
            </div>

            {status === 'error' && (
              <p className="contact__error">Something went wrong — please try again in a moment.</p>
            )}

            <Button type="submit">{status === 'sending' ? 'Sending...' : 'Send Message'}</Button>
          </form>
        )}
      </div>
    </section>
  );
}
