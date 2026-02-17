
import React from 'react';
import SectionHeader from './SectionHeader';

interface AboutProps {
  compact?: boolean;
}

const About: React.FC<AboutProps> = ({ compact }) => {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className={`flex flex-col lg:flex-row items-center gap-16 ${compact ? '' : 'mb-24'}`}>
          <div className="flex-1 relative">
            <div className="relative z-10 rounded-[2.5rem] overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&w=800&q=80" 
                alt="Filli Bites Interior"
                className="w-full h-auto object-cover"
              />
            </div>
            {/* Decorative Elements */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#c49b63] rounded-3xl -z-0 opacity-20 hidden md:block" />
            <div className="absolute -top-6 -left-6 w-48 h-48 border-2 border-[#3d2b1f] rounded-full -z-0 opacity-10 hidden md:block" />
          </div>

          <div className="flex-1">
            <SectionHeader 
              subtitle="Our Story" 
              title="A Culinary Journey of Taste & Passion" 
            />
            <div className="space-y-6 text-gray-600 leading-relaxed mb-10">
              <p>
                Filli Bites isn't just a restaurant; it's a celebration of flavor. Born from a simple mission to deliver premium fast-casual food, we focus on what matters most: <span className="text-[#3d2b1f] font-semibold italic">Quality, Freshness, and Soul.</span>
              </p>
              <p>
                Our chefs are culinary artisans who believe that even a simple burger patty or a shawarma wrap deserves perfection. Every ingredient is hand-picked, every sauce is house-made, and every bite is crafted to linger in your memory.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-[#fdfaf7] rounded-xl flex items-center justify-center text-[#c49b63]">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-[#3d2b1f]">Certified Quality</h4>
                  <p className="text-xs text-gray-500 mt-1">Premium meat and farm-fresh local produce.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-[#fdfaf7] rounded-xl flex items-center justify-center text-[#c49b63]">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-[#3d2b1f]">Made with Love</h4>
                  <p className="text-xs text-gray-500 mt-1">Every order is prepared with meticulous care.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
