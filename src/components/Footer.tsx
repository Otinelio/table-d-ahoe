import { Link } from 'react-router-dom';
import { MapPin, Clock, MessageCircle } from 'lucide-react';
import './Footer.css';

const InstagramIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
  </svg>
);

const FacebookIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
  </svg>
);

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner container">
        <div className="footer__col footer__identity">
          <div className="footer__logo">
            <img src="/logo.png" alt="La Table d'Ahoé" />
          </div>
          <p className="footer__tagline">Le RDV des amoureux de BBQ.</p>
          <div className="footer__socials">
            <a href="https://www.instagram.com/la_table_dahoe" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <InstagramIcon />
            </a>
            <a href="https://www.facebook.com/latabledahoe16" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <FacebookIcon />
            </a>
          </div>
        </div>

        <div className="footer__col footer__info">
          <h4 className="footer__col-title">INFOS</h4>
          <ul className="footer__list">
            <li><MapPin size={14} strokeWidth={1.5} /> Hédzranawoé, Lomé, Togo</li>
            <li><Clock size={14} strokeWidth={1.5} /> Mer–Dim · 18h GMT</li>
            <li>
              <MessageCircle size={14} strokeWidth={1.5} />
              <a href="https://wa.me/22891016439" target="_blank" rel="noopener noreferrer">+228 91 01 64 39</a>
            </li>
          </ul>
        </div>

        <div className="footer__col footer__navigation">
          <h4 className="footer__col-title">NAVIGATION</h4>
          <ul className="footer__list footer__nav-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/menu">Menu</Link></li>
            <li><Link to="/about">À propos</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>
      </div>

      <div className="footer__legal">
        <hr className="footer__hr" />
        <p>&copy; 2025 La Table d'Ahoé — Hédzranawoé, Lomé, Togo. Tous droits réservés.</p>
      </div>
    </footer>
  );
}
