
import React from 'react';
import { WHATSAPP_LINK } from '../constants';

interface HeroProps {
  onExplore: () => void;
}

const Hero: React.FC<HeroProps> = ({ onExplore }) => {
  return (
    <section className="relative h-[95vh] min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center transition-transform duration-10000 scale-110"
        style={{ 
          backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.4)), url('https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=1920&q=80')` 
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center text-white">
        <span className="inline-block bg-[#c49b63] px-4 py-1 rounded-full text-xs font-bold uppercase tracking-[0.2em] mb-6 animate-bounce">
          Fresh & Hot Every Day
        </span>
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          Savor the <span className="text-[#c49b63]">Premium</span> Crunch
        </h1>
        <p className="text-lg md:text-xl mb-10 text-gray-200 max-w-2xl mx-auto leading-relaxed">
          Experience the most premium Burgers, Shawarma, and Café favorites crafted with passion and fresh ingredients.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-5 justify-center">
          <button 
            onClick={onExplore}
            className="bg-[#c49b63] hover:bg-[#b08b58] text-white px-10 py-4 rounded-full font-bold uppercase tracking-widest transition-all hover:shadow-2xl hover:-translate-y-1"
          >
            Explore Menu
          </button>
          <a 
            href={WHATSAPP_LINK("Hi Filli Bites, I would like to place an order.")}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#25d366] hover:bg-[#20ba58] text-white px-10 py-4 rounded-full font-bold uppercase tracking-widest transition-all flex items-center justify-center gap-3 hover:shadow-2xl hover:-translate-y-1"
          >
            <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.411 0 .01 5.403.007 12.04c0 2.123.555 4.196 1.61 6.006L0 24l6.132-1.61a11.787 11.787 0 005.912 1.57h.005c6.637 0 12.038-5.403 12.041-12.04a11.75 11.75 0 00-3.475-8.52" />
            </svg>
            Order Now
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 hidden md:block animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center pt-2">
          <div className="w-1 h-2 bg-white rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
