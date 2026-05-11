import { MapPin, Clock, MessageCircle } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import './Contact.css';

const InstagramIcon = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
  </svg>
);

const FacebookIcon = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
  </svg>
);

const TIMELINE = [
  { time: '18h', label: 'Ouverture' },
  { time: '19h', label: 'Apéro' },
  { time: '20h', label: 'Grillades' },
  { time: '22h', label: 'Chill & Cocktails' },
  { time: '00h', label: 'Late Night' },
];

export default function Contact() {
  const ref = useScrollReveal();

  return (
    <div ref={ref} className="contact">
      {/* Hero */}
      <section className="contact-hero grain">
        <div className="container">
          <h1 className="contact-hero__title reveal">OÙ NOUS TROUVER</h1>
        </div>
      </section>

      {/* Content Grid */}
      <section className="contact-content">
        <div className="contact-content__inner container">
          {/* Left: Info */}
          <div className="contact-info reveal">
            <ul className="contact-info__list">
              <li>
                <MapPin size={20} strokeWidth={1.5} />
                <span>Hédzranawoé, Rue HDN 180 — 1er von à droite après la station Yatt & Co, en venant de la foire Togo 2000, Lomé</span>
              </li>
              <li>
                <Clock size={20} strokeWidth={1.5} />
                <span>Mercredi au Dimanche · À partir de 18h GMT</span>
              </li>
              <li>
                <MessageCircle size={20} strokeWidth={1.5} color="#25D366" />
                <a href="https://wa.me/22891016439" target="_blank" rel="noopener noreferrer">+228 91 01 64 39</a>
              </li>
              <li>
                <InstagramIcon size={20} />
                <a href="https://www.instagram.com/la_table_dahoe" target="_blank" rel="noopener noreferrer">@la_table_dahoe</a>
              </li>
              <li>
                <FacebookIcon size={20} />
                <a href="https://www.facebook.com/latabledahoe16" target="_blank" rel="noopener noreferrer">La Table d'Ahoé</a>
              </li>
            </ul>

            <a
              href="https://wa.me/22891016439?text=Bonjour%20La%20Table%20d'Aho%C3%A9%2C%20je%20souhaite%20un%20devis%20pour%20un%20service%20traiteur."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary contact-info__cta"
            >
              DEMANDER UN DEVIS TRAITEUR
            </a>

            {/* Access note */}
            <div className="contact-access">
              <p>Premier von à droite juste après la station Yatt & Co en venant de la foire Togo 2000.</p>
            </div>
          </div>

          {/* Right: Map */}
          <div className="contact-map reveal">
            <iframe
              title="La Table d'Ahoé - Localisation"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.9!2d1.2!3d6.17!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNsKwMTAnMjQuMCJOIDHCsDEyJzAwLjAiRQ!5e0!3m2!1sfr!2stg!4v1"
              width="100%"
              height="360"
              style={{ border: 0, borderRadius: 16 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="contact-timeline">
        <div className="contact-timeline__inner container reveal">
          <h3 className="contact-timeline__title">UNE SOIRÉE À AHOÉ</h3>
          <div className="contact-timeline__track">
            {TIMELINE.map((item, i) => (
              <div key={i} className="contact-timeline__item">
                <span className="contact-timeline__time">{item.time}</span>
                <div className="contact-timeline__dot" />
                <span className="contact-timeline__label">{item.label}</span>
              </div>
            ))}
            <div className="contact-timeline__line" />
          </div>
        </div>
      </section>
    </div>
  );
}
