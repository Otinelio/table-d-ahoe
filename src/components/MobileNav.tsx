import { Link, useLocation } from 'react-router-dom';
import { Home, UtensilsCrossed, Info, MapPin } from 'lucide-react';
import './MobileNav.css';

const tabs = [
  { to: '/', icon: Home, label: 'Home' },
  { to: '/menu', icon: UtensilsCrossed, label: 'Menu' },
  { to: '/about', icon: Info, label: 'Ahoé' },
  { to: '/contact', icon: MapPin, label: 'Contact' },
];

export default function MobileNav() {
  const location = useLocation();

  return (
    <nav className="mobile-nav">
      {tabs.map(tab => {
        const isActive = location.pathname === tab.to;
        const Icon = tab.icon;
        return (
          <Link
            key={tab.to}
            to={tab.to}
            className={`mobile-nav__tab ${isActive ? 'mobile-nav__tab--active' : ''}`}
          >
            <Icon size={20} strokeWidth={1.5} />
            <span className="mobile-nav__label">{tab.label}</span>
          </Link>
        );
      })}
    </nav>
  );
}
