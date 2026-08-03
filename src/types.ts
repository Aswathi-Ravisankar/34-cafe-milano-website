export type MenuCategory = 'all' | 'coffee' | 'pastas' | 'pizzas' | 'desserts' | 'drinks';

export interface MenuItem {
  id: string;
  name: string;
  category: MenuCategory;
  description: string;
  price: number;
  image: string;
  rating: number;
  reviewsCount: number;
  isBestSeller?: boolean;
  isVegetarian?: boolean;
  isGlutenFree?: boolean;
  isChefSpecial?: boolean;
  calories?: number;
  prepTime?: string;
  tags: string[];
}

export interface Review {
  id: string;
  author: string;
  avatar: string;
  rating: number;
  date: string;
  comment: string;
  source: 'Google Review' | 'Verified Guest';
  tag: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'all' | 'coffee' | 'food' | 'interiors' | 'patio';
  image: string;
  description: string;
}

export interface BusinessDay {
  day: string;
  hours: string;
  isOpenToday: boolean;
}

export interface ReservationForm {
  name: string;
  email: string;
  phone: string;
  date: string;
  time: string;
  guests: number;
  seatingPreference: 'indoor' | 'patio' | 'bar';
  specialRequest?: string;
}

export interface ContactForm {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}
