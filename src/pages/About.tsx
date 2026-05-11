import { UtensilsCrossed, Coffee, CalendarCheck } from 'lucide-react';
import { IMAGES } from '../data/defaultData';
import { useScrollReveal } from '../hooks/useScrollReveal';
import './About.css';

const MARQUEE_WORDS = ['GRILLADES', 'ÉPICES', 'CHILL', 'ROOFTOP', 'CONVIVIALITÉ', 'LOMÉ', 'AHOÉ'];

export default function About() {
  const ref = useScrollReveal();

  return (
    <div ref={ref} className="about">
      {/* Hero */}
      <section className="about-hero grain">
        <div className="container">
          <h1 className="about-hero__title text-hero reveal">
            AHOÉ — QUI VIENT DE CHEZ NOUS.
          </h1>
          <p className="about-hero__subtitle text-body reveal">
            Un rooftop. Des épices. Une promesse de convivialité africaine.
          </p>
        </div>
      </section>

      {/* Histoire */}
      <section className="about-story">
        <div className="about-story__inner container">
          <div className="about-story__text reveal">
            <p>
              La Table d'Ahoé est née d'une idée simple : rassembler les gens autour d'une table, avec les saveurs d'ici.
              "Ahoé" signifie "qui vient de chez nous" en langue locale togolaise — un nom qui porte notre promesse
              d'authenticité et de convivialité.
            </p>
            <p>
              Tout a commencé avec les Condiments d'Ahoé, une gamme d'épices artisanales qui accompagnent chaque grillade.
              Puis l'idée d'une "table ambulante" a germé — un lieu éphémère qui rassemble voisins et amis autour
              du charbon et du curry-coco, sous les étoiles de Lomé.
            </p>
            <p>
              Aujourd'hui, La Table d'Ahoé a posé ses braises sur un rooftop à Hédzranawoé. Un décor atypique aux couleurs
              d'Afrique, une ambiance chill et cosy, et des grillades qui parlent d'elles-mêmes. Classé numéro 1 BBQ de Lomé
              par les médias lifestyle locaux, notre rooftop est devenu le rendez-vous incontournable des amoureux de BBQ.
            </p>
          </div>
          <div className="about-story__img-wrap reveal">
            <img src={IMAGES.about} alt="Ambiance La Table d'Ahoé" className="about-story__img img-ember" />
          </div>
        </div>
      </section>

      {/* Valeurs */}
      <section className="about-values">
        <div className="about-values__inner container reveal-stagger">
          {[
            { Icon: UtensilsCrossed, title: 'GRILLADES ARTISANALES', desc: 'Chaque pièce est marinée à la main avec nos épices maison et grillée au charbon de bois — jamais au gaz.' },
            { Icon: Coffee, title: 'COCKTAILS SIGNATURE', desc: 'Des créations tropicales à base de fruits frais, de rhum et de lait de coco — le Bahia est notre fierté.' },
            { Icon: CalendarCheck, title: 'ÉVÉNEMENTS SUR MESURE', desc: 'Service traiteur complet pour vos soirées privées, mariages et célébrations professionnelles.' },
          ].map((v, i) => (
            <div key={i} className="about-value-card reveal">
              <v.Icon size={32} strokeWidth={1.5} color="#C45C1A" />
              <h3>{v.title}</h3>
              <p className="text-description">{v.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* La Maison d'Ahoé */}
      <section className="about-maison">
        <div className="container">
          <div className="about-maison__card reveal">
            <h3>LA MAISON D'AHOÉ</h3>
            <p className="text-body">
              En mars 2022, La Table d'Ahoé a étendu son univers avec l'ouverture de la Maison d'Ahoé —
              une maison d'hôtes de 3 chambres nichée dans un jardin tropical. Un prolongement naturel
              de notre philosophie : accueillir, nourrir, rassembler.
            </p>
          </div>
        </div>
      </section>

      {/* Marquee */}
      <section className="about-marquee">
        <div className="about-marquee__track">
          <div className="about-marquee__content">
            {[...MARQUEE_WORDS, ...MARQUEE_WORDS].map((word, i) => (
              <span key={i} className={`about-marquee__word ${i % 2 === 0 ? '' : 'accent'}`}>
                {word}
                <span className="about-marquee__sep" />
              </span>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
