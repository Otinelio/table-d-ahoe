import { Link } from 'react-router-dom';
import { ArrowDown, CalendarCheck } from 'lucide-react';
import { IMAGES } from '../data/defaultData';
import { useScrollReveal } from '../hooks/useScrollReveal';
import './Home.css';

const testimonials = [
  { text: "Hidden gem in Lomé! Great for nights out, great food, great service.", author: "Sarah M." },
  { text: "Un rooftop au décor atypique — une ambiance chill unique dans tout Lomé.", author: "Koffi A." },
  { text: "No electricity when I came but still experienced an electrified moment.", author: "James T." },
];

export default function Home() {
  const ref = useScrollReveal();

  return (
    <div ref={ref} className="home">
      {/* HERO */}
      <section className="hero grain">
        <div className="hero__content container">
          <div className="hero__left">
            <p className="hero__tagline text-tagline">Mercredi – Dimanche · 18h GMT</p>
            <h1 className="hero__title">
              <span className="hero__title-line">LE RDV DES</span>
              <span className="hero__title-line">AMOUREUX</span>
              <span className="hero__title-line hero__title-accent">DE BBQ</span>
            </h1>
            <div className="hero__divider" />
            <p className="hero__location text-description">Lomé, Hédzranawoé</p>
            <div className="hero__actions">
              <Link to="/menu" className="btn-primary">VOIR LE MENU</Link>
              <a
                href="https://wa.me/22891016439?text=Bonjour%20La%20Table%20d'Aho%C3%A9%2C%20je%20voudrais%20un%20devis%20pour%20un%20service%20traiteur."
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
              >
                RÉSERVER UN ÉVÉNEMENT
              </a>
            </div>
          </div>
          <div className="hero__right">
            <div className="hero__image-wrap">
              <img src={IMAGES.heroGrill} alt="Grillades au charbon" className="hero__image img-ember" />
            </div>
          </div>
        </div>
        <div className="hero__arrow">
          <ArrowDown size={22} strokeWidth={1.5} color="#C45C1A" />
        </div>
      </section>

      {/* MANIFESTE */}
      <section className="manifeste grain">
        <div className="manifeste__inner container">
          <h2 className="manifeste__quote reveal text-section-title">
            AHOÉ — QUI VIENT DE CHEZ NOUS.
          </h2>
          <div className="manifeste__cols reveal-stagger">
            <div className="manifeste__col reveal">
              <div className="manifeste__bar" />
              <p>Grillades épicées au feu de bois, marinées curry-coco</p>
            </div>
            <div className="manifeste__col reveal">
              <div className="manifeste__bar" />
              <p>Cocktails artisanaux aux saveurs tropicales</p>
            </div>
            <div className="manifeste__col reveal">
              <div className="manifeste__bar" />
              <p>Ambiance chill rooftop sous les étoiles de Lomé</p>
            </div>
          </div>
        </div>
      </section>

      {/* CARTE SIGNATURE */}
      <section className="signature">
        <div className="signature__inner container">
          <h2 className="text-section-title reveal">NOS SPÉCIALITÉS</h2>
          <div className="signature__grid reveal-stagger">
            {[
              { name: 'Brochettes Curry-Coco', desc: 'Poulet mariné au curry et lait de coco, grillé au charbon', price: '6 500 FCFA', cat: 'GRILLADE', img: IMAGES.chickenSkewer },
              { name: 'Plateau Fruits de Mer', desc: 'Assortiment de fruits de mer grillés — crevettes, poisson, calamars', price: '8 000 FCFA', cat: 'FRUITS DE MER', img: IMAGES.seafood },
              { name: 'Cocktail Bahia', desc: 'Rhum, ananas frais, lait de coco et menthe — notre signature', price: '4 500 FCFA', cat: 'COCKTAIL', img: IMAGES.cocktail },
            ].map((item, i) => (
              <div key={i} className="sig-card reveal">
                <div className="sig-card__img-wrap">
                  <img src={item.img} alt={item.name} className="sig-card__img img-ember" />
                  <span className="sig-card__cat">{item.cat}</span>
                </div>
                <div className="sig-card__body">
                  <h3 className="sig-card__name">{item.name}</h3>
                  <p className="sig-card__desc text-description">{item.desc}</p>
                  <div className="sig-card__footer">
                    <span className="sig-card__price text-price">{item.price}</span>
                    <Link to="/menu" className="sig-card__btn">+</Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TRAITEUR */}
      <section className="traiteur grain">
        <div className="traiteur__inner container">
          <div className="traiteur__text reveal">
            <CalendarCheck size={32} strokeWidth={1.5} color="#C45C1A" />
            <h2 className="text-section-title">VOTRE ÉVÉNEMENT, NOS BRAISES.</h2>
            <p className="text-body">
              La Table d'Ahoé met son savoir-faire au service de vos événements privés et professionnels.
              Grillades sur mesure, cocktails signature et service traiteur complet pour vos soirées, mariages et célébrations.
            </p>
            <a
              href="https://wa.me/22891016439?text=Bonjour%20La%20Table%20d'Aho%C3%A9%2C%20je%20voudrais%20un%20devis%20pour%20un%20service%20traiteur."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              DEMANDER UN DEVIS
            </a>
          </div>
          <div className="traiteur__img-wrap reveal">
            <img src={IMAGES.traiteur} alt="Service traiteur" className="traiteur__img img-ember" />
          </div>
        </div>
      </section>

      {/* TÉMOIGNAGES */}
      <section className="temoignages">
        <div className="temoignages__inner container">
          <h2 className="text-section-title reveal">ILS EN PARLENT</h2>
          <div className="temoignages__grid reveal-stagger">
            {testimonials.map((t, i) => (
              <div key={i} className="temo-card reveal">
                <p className="temo-card__text">"{t.text}"</p>
                <div className="temo-card__rating">
                  {[...Array(5)].map((_, j) => (
                    <span key={j} className="temo-card__dash" />
                  ))}
                </div>
                <p className="temo-card__author">{t.author}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
