
export interface MenuItem {
  id: number;
  category: string;
  name: string;
  price: number | string;
  comboPrice?: number;
  description: string;
  image: string;
  isBestseller?: boolean;
}

export enum MenuCategory {
  ALL = 'all',
  BURGERS = 'burgers',
  MEALS = 'meals',
  BUCKETS = 'buckets',
  SIDES = 'sides',
  VEG = 'veg'
}
