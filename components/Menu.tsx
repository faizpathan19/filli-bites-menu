
import React, { useState } from 'react';
import { MENU_ITEMS, WHATSAPP_LINK } from '../constants';
import { MenuCategory, MenuItem } from '../types';
import SectionHeader from './SectionHeader';

interface MenuProps {
  limit?: number;
  onSeeFull?: () => void;
}

const Menu: React.FC<MenuProps> = ({ limit, onSeeFull }) => {
  const [activeTab, setActiveTab] = useState<MenuCategory>(MenuCategory.ALL);

  const categories = [
    { label: 'All Items', value: MenuCategory.ALL },
    { label: 'Burgers', value: MenuCategory.BURGERS },
    { label: 'Bucket Meals', value: MenuCategory.BUCKETS },
    { label: 'Meals', value: MenuCategory.MEALS },
    { label: 'Veg Special', value: MenuCategory.VEG },
    { label: 'Sides & Addons', value: MenuCategory.SIDES },
  ];

  const filteredItems = MENU_ITEMS.filter(item => 
    activeTab === MenuCategory.ALL || item.category === activeTab
  );

  const displayItems = limit ? filteredItems.slice(0, limit) : filteredItems;

  return (
    <section id="menu" className="py-24 bg-[#fdfaf7]">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader 
          subtitle="Our Premium Menu" 
          title="Deliciously Crafted Bites" 
          center={true} 
        />

        {!limit && (
          <div className="flex flex-wrap justify-center gap-2 mb-16">
            {categories.map((cat) => (
              <button
                key={cat.value}
                onClick={() => setActiveTab(cat.value)}
                className={`px-6 py-2.5 rounded-full text-sm font-bold uppercase tracking-wider transition-all ${
                  activeTab === cat.value 
                    ? 'bg-[#3d2b1f] text-white shadow-lg' 
                    : 'bg-white text-[#3d2b1f] hover:bg-gray-100 border border-gray-100'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayItems.map((item) => (
            <MenuCard key={item.id} item={item} />
          ))}
        </div>

        {limit && (
          <div className="text-center mt-16">
            <button 
              onClick={onSeeFull}
              className="inline-flex items-center gap-2 text-[#c49b63] font-bold uppercase tracking-widest hover:gap-4 transition-all"
            >
              View Full Menu 
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

const MenuCard: React.FC<{ item: MenuItem }> = ({ item }) => {
  return (
    <div className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 flex flex-col h-full border border-gray-50">
      <div className="relative h-64 overflow-hidden">
        <img 
          src={item.image} 
          alt={item.name} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        {item.isBestseller && (
          <div className="absolute top-4 left-4 bg-[#c49b63] text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest">
            Bestseller
          </div>
        )}
      </div>
      
      <div className="p-8 flex flex-col flex-grow">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-2xl font-bold font-serif text-[#3d2b1f]">{item.name}</h3>
          <div className="text-right">
             <span className="text-xl font-bold text-[#c49b63]">₹{item.price}</span>
             {item.comboPrice && (
               <div className="text-[10px] text-gray-400 uppercase font-bold mt-1">
                 Combo: ₹{item.comboPrice}
               </div>
             )}
          </div>
        </div>
        
        <p className="text-gray-500 text-sm mb-8 flex-grow leading-relaxed">
          {item.description}
        </p>
        
        <a 
          href={WHATSAPP_LINK(`I want to order ${item.name}`)}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full bg-[#fdfaf7] text-[#3d2b1f] border border-[#3d2b1f] hover:bg-[#3d2b1f] hover:text-white py-3 rounded-xl font-bold uppercase text-xs tracking-[0.2em] transition-all text-center"
        >
          Add to Order
        </a>
      </div>
    </div>
  );
};

export default Menu;
