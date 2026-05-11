import { useState, useEffect } from 'react';
import './SplashScreen.css';

interface SplashScreenProps {
  onComplete: () => void;
}

export default function SplashScreen({ onComplete }: SplashScreenProps) {
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    const timers = [
      setTimeout(() => setPhase(1), 200),
      setTimeout(() => setPhase(2), 600),
      setTimeout(() => setPhase(3), 1100),
      setTimeout(() => setPhase(4), 1750),
      setTimeout(() => onComplete(), 2400),
    ];
    return () => timers.forEach(clearTimeout);
  }, [onComplete]);

  return (
    <div className={`splash ${phase >= 4 ? 'splash--fadeout' : ''}`}>
      {/* Phase 1 & 2: Ember dot + glow */}
      <div className={`splash__ember ${phase >= 1 ? 'splash__ember--visible' : ''} ${phase >= 2 ? 'splash__ember--glow' : ''}`} />

      {/* Phase 3: Logo reveal */}
      <div className={`splash__content ${phase >= 3 ? 'splash__content--visible' : ''}`}>
        <img src="/logo.png" alt="La Table d'Ahoé" className="splash__logo" />
        <p className="splash__subtitle">Lomé · Togo</p>
      </div>
    </div>
  );
}
