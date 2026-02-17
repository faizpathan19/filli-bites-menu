
import React, { useState, useEffect } from 'react';

interface NavbarProps {
  activePage: string;
  onNavigate: (page: 'home' | 'menu' | 'about') => void;
}

const Navbar: React.FC<NavbarProps> = ({ activePage, onNavigate }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks: { label: string; value: 'home' | 'menu' | 'about' }[] = [
    { label: 'Home', value: 'home' },
    { label: 'Our Menu', value: 'menu' },
    { label: 'Our Story', value: 'about' },
  ];

  const handleLinkClick = (page: 'home' | 'menu' | 'about') => {
    onNavigate(page);
    setIsMenuOpen(false);
  };

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-md py-3 shadow-md' : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <button 
          onClick={() => onNavigate('home')}
          className="flex items-center gap-3 group focus:outline-none"
        >
          <img 
            src="/images/logo-filli.png" 
            alt="Filli Bites Logo" 
            className="h-10 w-auto transition-transform group-hover:scale-105"
          />
          <span className={`text-2xl font-bold font-serif ${isScrolled ? 'text-[#3d2b1f]' : 'text-[#3d2b1f] md:text-white'}`}>
            Filli Bites
          </span>
        </button>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-10">
          <ul className="flex gap-8 list-none m-0 p-0">
            {navLinks.map((link) => (
              <li key={link.value}>
                <button
                  onClick={() => handleLinkClick(link.value)}
                  className={`text-sm font-semibold uppercase tracking-wider transition-colors focus:outline-none ${
                    activePage === link.value 
                      ? 'text-[#c49b63]' 
                      : (isScrolled ? 'text-[#3d2b1f] hover:text-[#c49b63]' : 'text-white hover:text-[#c49b63]')
                  }`}
                >
                  {link.label}
                </button>
              </li>
            ))}
          </ul>
          <button 
            onClick={() => handleLinkClick('menu')}
            className="bg-[#c49b63] text-white px-6 py-2 rounded-full font-bold text-sm uppercase tracking-widest hover:bg-[#b08b58] transition-all hover:shadow-lg focus:outline-none"
          >
            Order Online
          </button>
        </div>

        {/* Mobile Toggle */}
        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden flex flex-col gap-1.5 focus:outline-none"
          aria-label="Toggle Menu"
        >
          <div className={`w-6 h-0.5 transition-all ${isScrolled ? 'bg-[#3d2b1f]' : 'bg-white'} ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <div className={`w-6 h-0.5 transition-all ${isScrolled ? 'bg-[#3d2b1f]' : 'bg-white'} ${isMenuOpen ? 'opacity-0' : ''}`} />
          <div className={`w-6 h-0.5 transition-all ${isScrolled ? 'bg-[#3d2b1f]' : 'bg-white'} ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 bg-[#3d2b1f] z-40 flex flex-col items-center justify-center transition-all duration-500 md:hidden ${
        isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
      }`}>
        <ul className="flex flex-col gap-8 list-none m-0 p-0 text-center">
          {navLinks.map((link) => (
            <li key={link.value}>
              <button
                onClick={() => handleLinkClick(link.value)}
                className={`text-2xl font-serif font-bold transition-colors focus:outline-none ${
                  activePage === link.value ? 'text-[#c49b63]' : 'text-white'
                }`}
              >
                {link.label}
              </button>
            </li>
          ))}
          <li>
            <button 
              onClick={() => handleLinkClick('menu')}
              className="bg-[#25d366] text-white px-8 py-3 rounded-full font-bold text-lg hover:shadow-xl transition-all"
            >
              Order on WhatsApp
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
