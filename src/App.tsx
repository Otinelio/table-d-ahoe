import { useState, useCallback } from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import ScrollToTop from './components/ScrollToTop';
import SplashScreen from './components/SplashScreen';
import DesktopNav from './components/DesktopNav';
import MobileNav from './components/MobileNav';
import Home from './pages/Home';
import Menu from './pages/Menu';
import About from './pages/About';
import Contact from './pages/Contact';
import Admin from './pages/Admin';
import Kitchen from './pages/Kitchen';

import './styles/index.css';
import './styles/animations.css';

export default function App() {
  const [showSplash, setShowSplash] = useState(true);

  const handleSplashComplete = useCallback(() => {
    setShowSplash(false);
  }, []);

  return (
    <>
      {showSplash && <SplashScreen onComplete={handleSplashComplete} />}
      <div className={showSplash ? 'app--loading' : ''}>
        {!showSplash && <DesktopNav />}
        {!showSplash && <MobileNav />}
        <div style={showSplash ? { opacity: 0 } : { animation: 'splash-page-rise 650ms cubic-bezier(0.22, 1, 0.36, 1) forwards' }}>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Layout><Home /></Layout>} />
            <Route path="/menu" element={<Layout><Menu /></Layout>} />
            <Route path="/about" element={<Layout><About /></Layout>} />
            <Route path="/contact" element={<Layout><Contact /></Layout>} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/menu/scan" element={<Menu scanMode />} />
            <Route path="/cuisine" element={<Kitchen />} />
          </Routes>
        </div>
      </div>
    </>
  );
}
