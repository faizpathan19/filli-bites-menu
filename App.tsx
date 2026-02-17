
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Menu from './components/Menu';
import About from './components/About'
import Contact from './components/Contact';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';

const App: React.FC = () => {
  const [activePage, setActivePage] = useState<'home' | 'menu' | 'about'>('home');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [activePage]);

  const renderContent = () => {
    switch (activePage) {
      case 'home':
        return (
          <>
            <Hero onExplore={() => setActivePage('menu')} />
            <About compact={true} />
            <Menu limit={3} onSeeFull={() => setActivePage('menu')} />
            <Contact />
          </>
        );
      case 'menu':
        return <Menu />;
      case 'about':
        return <About />;
      default:
        return <Hero onExplore={() => setActivePage('menu')} />;
    }
  };

  return (
    <div className="min-h-screen bg-[#fdfaf7] flex flex-col">
      <Navbar activePage={activePage} onNavigate={setActivePage} />
      <main className="flex-grow pt-20">
        {renderContent()}
      </main>
      <Footer onNavigate={setActivePage} />
      <FloatingWhatsApp />
    </div>
  );
};

export default App;
