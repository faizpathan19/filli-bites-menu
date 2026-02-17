
import React from 'react';

interface FooterProps {
  onNavigate: (page: 'home' | 'menu' | 'about') => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-[#0f0f0f] text-gray-400 pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          {/* Brand Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-8">
              <img 
                src="https://m.media-amazon.com/images/I/71N-E6kO-XL.png" 
                alt="Filli Bites Logo" 
                className="h-10 w-auto invert brightness-0"
              />
              <span className="text-2xl font-bold font-serif text-white">Filli Bites</span>
            </div>
            <p className="text-sm leading-relaxed mb-8">
              Elevating the café experience with premium bites and exceptional service. Taste the difference today with our signature recipes crafted with love.
            </p>
            <div className="flex gap-4">
              <SocialIcon icon="instagram" />
              <SocialIcon icon="facebook" />
              <SocialIcon icon="twitter" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold text-lg mb-8 uppercase tracking-widest border-l-4 border-[#c49b63] pl-4">Quick Links</h4>
            <ul className="space-y-4 list-none m-0 p-0 text-sm">
              <li><button onClick={() => onNavigate('home')} className="hover:text-[#c49b63] transition-colors focus:outline-none">Home</button></li>
              <li><button onClick={() => onNavigate('menu')} className="hover:text-[#c49b63] transition-colors focus:outline-none">Our Menu</button></li>
              <li><button onClick={() => onNavigate('about')} className="hover:text-[#c49b63] transition-colors focus:outline-none">Our Story</button></li>
              <li><button onClick={() => onNavigate('menu')} className="hover:text-[#c49b63] transition-colors focus:outline-none">Order Online</button></li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="text-white font-bold text-lg mb-8 uppercase tracking-widest border-l-4 border-[#c49b63] pl-4">Reach Us</h4>
            <ul className="space-y-6 text-sm m-0 p-0 list-none">
              <li className="flex gap-4">
                <svg className="w-5 h-5 text-[#c49b63]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                </svg>
                123 Spice Street, Flavor Town, India
              </li>
              <li className="flex gap-4">
                <svg className="w-5 h-5 text-[#c49b63]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                +91 000 000 0000
              </li>
              <li className="flex gap-4">
                <svg className="w-5 h-5 text-[#c49b63]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Daily: 11 AM - 11 PM
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-white font-bold text-lg mb-8 uppercase tracking-widest border-l-4 border-[#c49b63] pl-4">Stay Updated</h4>
            <p className="text-sm mb-6">Join our newsletter for exclusive offers and new menu launches.</p>
            <div className="flex">
              <input 
                type="email" 
                placeholder="Email" 
                className="flex-grow bg-[#1a1a1a] border-none rounded-l-lg px-4 py-3 text-sm focus:ring-1 focus:ring-[#c49b63]"
              />
              <button className="bg-[#c49b63] text-white px-4 py-3 rounded-r-lg hover:bg-[#b08b58] transition-all">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-800 pt-12 flex flex-col md:flex-row justify-between items-center gap-8 text-center md:text-left">
          <div className="flex items-center gap-4">
            <span className="text-xs uppercase tracking-widest text-gray-500">Water Partner:</span>
            <div className="flex items-center gap-2">
              <img src="https://files.catbox.moe/k2cl3w.png" alt="FIMSA AQUA Logo" className="h-8 w-auto brightness-150" />
              <span className="text-white font-bold text-sm">FIMSA AQUA</span>
            </div>
          </div>
          
          <p className="text-xs text-gray-500 font-medium tracking-wide">
            &copy; 2024 Filli Bites. All Rights Reserved | Powered by <span className="text-[#c49b63]">FIMSA AQUA</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

const SocialIcon: React.FC<{ icon: string }> = ({ icon }) => (
  <a 
    href="#" 
    className="w-10 h-10 bg-[#1a1a1a] rounded-full flex items-center justify-center hover:bg-[#c49b63] hover:text-white transition-all transform hover:-translate-y-1"
  >
    <i className={`fab fa-${icon}`}></i>
    {/* Using placeholder dots for icons as per demo style if font awesome isn't loaded */}
    <span className="sr-only">{icon}</span>
    <div className="w-2 h-2 bg-current rounded-full" />
  </a>
);

export default Footer;
