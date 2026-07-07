import '../css/Footer.css';

const SOCIALS = [
  { label: 'LinkedIn', href: 'https://linkedin.com/' },
  { label: 'GitHub', href: 'https://github.com/' },
  { label: 'Email', href: 'mailto:imandik2007@gmail.com' },
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__logo">
          <p className="footer__logo-name">S A R I K A</p>
          <p className="footer__logo-sub">Imandi Kariyapperuma</p>
        </div>

        <ul className="footer__socials">
          {SOCIALS.map((social) => (
            <li key={social.label}>
              <a href={social.href} target="_blank" rel="noopener noreferrer">
                {social.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <p className="footer__copy">© {new Date().getFullYear()} Sarika Imandi Kariyapperuma. All rights reserved.</p>
    </footer>
  );
}
