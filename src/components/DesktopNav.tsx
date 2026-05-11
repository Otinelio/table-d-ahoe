import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './DesktopNav.css';

export default function DesktopNav() {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const links = [
    { to: '/', label: 'Accueil' },
    { to: '/menu', label: 'Menu' },
    { to: '/about', label: 'Ahoé' },
    { to: '/contact', label: 'Contact' },
  ];

  return (
    <nav className={`desktop-nav ${scrolled ? 'desktop-nav--scrolled' : ''}`}>
      <div className="desktop-nav__inner">
        <Link to="/" className="desktop-nav__logo">
          <img src="/logo.png" alt="La Table d'Ahoé" />
        </Link>
        <div className="desktop-nav__links">
          {links.map(link => (
            <Link
              key={link.to}
              to={link.to}
              className={`desktop-nav__link ${location.pathname === link.to ? 'desktop-nav__link--active' : ''}`}
            >
              {link.label}
            </Link>
          ))}
        </div>
        <a
          href="https://wa.me/22891016439?text=Bonjour%20La%20Table%20d'Aho%C3%A9%2C%20je%20voudrais%20r%C3%A9server%20une%20table."
          target="_blank"
          rel="noopener noreferrer"
          className="desktop-nav__cta"
        >
          RÉSERVER
        </a>
      </div>
    </nav>
  );
}
