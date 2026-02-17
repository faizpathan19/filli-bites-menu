
import { MenuItem, MenuCategory } from './types';

export const WHATSAPP_NUMBER = "+917888192744"; // Placeholder, replace with actual
export const WHATSAPP_LINK = (msg: string) => `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;

export const MENU_ITEMS: MenuItem[] = [
  // BURGERS
  {
    id: 1,
    category: MenuCategory.BURGERS,
    name: 'Spicy Zinger',
    price: 130,
    comboPrice: 180,
    description: 'Crispy fried chicken, spicy house mayo, and fresh lettuce in a toasted bun.',
    image: 'https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?auto=format&fit=crop&w=600&q=80',
    isBestseller: true
  },
  {
    id: 2,
    category: MenuCategory.BURGERS,
    name: 'Supreme Burger',
    price: 120,
    comboPrice: 170,
    description: 'Premium patty with gourmet ingredients and our secret signature sauce.',
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 3,
    category: MenuCategory.BURGERS,
    name: 'Mexican Spicy Supreme',
    price: 130,
    comboPrice: 180,
    description: 'Kick of jalapeños and signature Mexican hot sauce for heat lovers.',
    image: 'https://images.unsplash.com/photo-1571091718767-18b5b1457add?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 4,
    category: MenuCategory.BURGERS,
    name: 'Zinger Burger',
    price: 120,
    comboPrice: 170,
    description: 'The classic crunch that hits the spot every single time.',
    image: 'https://images.unsplash.com/photo-1512152272829-e3139592d56f?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 5,
    category: MenuCategory.VEG,
    name: 'Veg Burger',
    price: 100,
    comboPrice: 150,
    description: 'Garden fresh veggie patty with crisp lettuce and creamy mayo.',
    image: 'https://images.unsplash.com/photo-1520072959219-c595dc870360?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 6,
    category: MenuCategory.BURGERS,
    name: 'Filli Jumbo Burger',
    price: 150,
    comboPrice: 200,
    description: 'Double patty, double cheese, and double the satisfaction.',
    image: 'https://images.unsplash.com/photo-1553979459-d2229ba7433b?auto=format&fit=crop&w=600&q=80'
  },

  // INDIVIDUAL MEALS
  {
    id: 7,
    category: MenuCategory.MEALS,
    name: 'Snack Meal',
    price: 210,
    description: '1pc Chicken, 2pcs Strips, French Fries, Garlic Paste, 1 Bun, and Pepsi (250ml).',
    image: 'https://images.unsplash.com/photo-1529003600303-bd51f39627fb?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 8,
    category: MenuCategory.MEALS,
    name: 'Dinner Meal',
    price: 310,
    description: '1pc Chicken, Khabsa Rice, French Fries (S), Garlic Paste, 1 Bun, and Pepsi (250ml).',
    image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 9,
    category: MenuCategory.MEALS,
    name: 'Strip Meal',
    price: 200,
    description: '3pcs Strips, Garlic Paste, French Fries, 1 Bun, and Pepsi (250ml).',
    image: 'https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?auto=format&fit=crop&w=600&q=80'
  },

  // BUCKET MEALS
  {
    id: 10,
    category: MenuCategory.BUCKETS,
    name: 'Royal Box',
    price: 650,
    description: '6pc Chicken, 3 Buns, 1 Coleslaw, 3 Garlic Pastes, 1 French Fries, Pepsi (600ml).',
    image: 'https://images.unsplash.com/photo-1623653387945-2fd25214f8fc?auto=format&fit=crop&w=600&q=80',
    isBestseller: true
  },
  {
    id: 11,
    category: MenuCategory.BUCKETS,
    name: 'Golden Family',
    price: 1000,
    description: '9pc Chicken, 4 Buns, 2 Coleslaw, 4 Garlic Pastes, 1 French Fries, Pepsi (1 Ltr).',
    image: 'https://images.unsplash.com/photo-1524182620194-81789d99723c?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 12,
    category: MenuCategory.BUCKETS,
    name: 'Family Meal',
    price: 1260,
    description: '12pc Chicken, 6 Buns, 2 Coleslaw, 6 Garlic Pastes, 1 French Fries, Pepsi (2 Ltr).',
    image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=600&q=80'
  },

  // SIDES & SNACKS
  {
    id: 13,
    category: MenuCategory.SIDES,
    name: 'Chicken Popcorn',
    price: 200,
    description: 'Bite-sized pieces of premium breaded chicken snack.',
    image: 'https://images.unsplash.com/photo-1562967914-6c82c68e4975?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 14,
    category: MenuCategory.SIDES,
    name: 'French Fries',
    price: 80,
    description: 'Golden crispy salted fries - the perfect companion.',
    image: 'https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 15,
    category: MenuCategory.SIDES,
    name: 'Peri Peri Fries',
    price: 100,
    description: 'Crispy fries tossed in our signature peri peri spice mix.',
    image: 'https://images.unsplash.com/photo-1585109649139-366815a0d713?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 16,
    category: MenuCategory.VEG,
    name: 'Veg Roll',
    price: 100,
    description: 'Flavorful veggie filling wrapped in a soft tortilla.',
    image: 'https://images.unsplash.com/photo-1626700051175-6818013e1d4f?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 17,
    category: MenuCategory.MEALS,
    name: 'Chicken Kabsa Rice',
    price: 200,
    description: 'Authentic spiced rice served with a piece of succulent chicken.',
    image: 'https://images.unsplash.com/photo-1633945274405-b6c8069047b0?auto=format&fit=crop&w=600&q=80'
  }
];
