import { MenuItem, Review, GalleryItem, BusinessDay } from '../types';

export const HERO_IMAGE = '/src/assets/images/hero_cafe_milano_1785742454116.jpg';
export const COFFEE_ART_IMAGE = '/src/assets/images/signature_coffee_art_1785742467660.jpg';
export const PISTACHIO_LATTE_IMAGE = '/src/assets/images/bronte_pistachio_latte_1785751121598.jpg';
export const PASTA_SPECIAL_IMAGE = '/src/assets/images/milano_pasta_special_1785742477389.jpg';
export const MARGHERITA_PIZZA_IMAGE = '/src/assets/images/neapolitan_margherita_pizza_1785751077929.jpg';
export const PROSCIUTTO_PANINI_IMAGE = '/src/assets/images/prosciutto_focaccia_panini_1785751108086.jpg';
export const TIRAMISU_IMAGE = '/src/assets/images/classic_italian_tiramisu_1785751093082.jpg';
export const CANNOLI_IMAGE = '/src/assets/images/sicilian_cannoli_dessert_1785751147785.jpg';
export const PASSIONFRUIT_SPRITZ_IMAGE = '/src/assets/images/passionfruit_sparkling_spritz_1785751134625.jpg';

export const CAFE_INFO = {
  name: '34 Cafe Milano',
  tagline: 'Artisanal Italian Coffee & Handcrafted Culinary Excellence',
  googleRating: 4.8,
  totalReviews: 1420,
  address: '34 Milano Blvd, Italian Quarter, Downtown',
  phone: '+1 (800) 34-MILANO',
  email: 'ciao@34cafemilano.com',
  instagram: '@34cafemilano',
  instagramUrl: 'https://www.instagram.com/34cafemilano/?hl=en',
  googleMapsUrl: 'https://www.google.com/search?q=34+Cafe+Milano',
  googleBusinessProfileUrl: 'https://share.google/THe8qr9W9xgWhSKgt',
  storyText: `Born from a passion for authentic Italian café culture and Milano's timeless elegance, 34 Cafe Milano brings together masterfully roasted 100% Arabica espresso, handcrafted pasta, wood-fired artisan paninis, and luxurious desserts. Every cup is brewed with precision on our custom La Marzocco espresso machine, and every dish is prepared fresh daily with imported Italian ingredients. Whether you're lingering over a velvety pistachio latte on our lush outdoor patio or sharing a slice of warm tiramisu, 34 Cafe Milano offers an exquisite retreat designed for warm hospitality and unforgettable moments.`,
};

export const MENU_ITEMS: MenuItem[] = [
  {
    id: 'm1',
    name: '34 Signature Pistachio Latte',
    category: 'coffee',
    description: 'Double ristretto espresso infused with handcrafted Bronte pistachio cream, steamed oat milk, topped with crushed roasted pistachios.',
    price: 7.50,
    image: PISTACHIO_LATTE_IMAGE,
    rating: 4.9,
    reviewsCount: 380,
    isBestSeller: true,
    isVegetarian: true,
    isChefSpecial: true,
    prepTime: '4 mins',
    tags: ['Signature', 'House Blend', 'Hot/Iced']
  },
  {
    id: 'm2',
    name: 'Milano Cappuccino Artisanal',
    category: 'coffee',
    description: '100% Single-origin Arabica beans roasted in Lombardy with velvety microfoam and handcrafted rosette latte art.',
    price: 5.50,
    image: COFFEE_ART_IMAGE,
    rating: 4.85,
    reviewsCount: 290,
    isBestSeller: true,
    isVegetarian: true,
    isGlutenFree: true,
    prepTime: '3 mins',
    tags: ['Authentic Espresso', 'Latte Art']
  },
  {
    id: 'm3',
    name: 'Truffle Tagliatelle al Parmigiano',
    category: 'pastas',
    description: 'Fresh egg pasta tossed in a silky black truffle butter cream sauce, aged 24-month Parmigiano-Reggiano, and fresh shaved Umbrian truffles.',
    price: 22.00,
    image: PASTA_SPECIAL_IMAGE,
    rating: 4.95,
    reviewsCount: 420,
    isBestSeller: true,
    isChefSpecial: true,
    isVegetarian: true,
    prepTime: '15 mins',
    tags: ['Fresh Pasta', 'Black Truffle']
  },
  {
    id: 'm4',
    name: 'Artisanal Neapolitan Margherita Pizza',
    category: 'pizzas',
    description: 'San Marzano DOP tomato sauce, fresh Fior di Latte mozzarella, extra virgin olive oil, and fragrant sweet basil on 72-hour fermented crust.',
    price: 17.00,
    image: MARGHERITA_PIZZA_IMAGE,
    rating: 4.85,
    reviewsCount: 385,
    isBestSeller: true,
    isVegetarian: true,
    prepTime: '12 mins',
    tags: ['Wood-Fired', '72hr Dough']
  },
  {
    id: 'm5',
    name: 'Prosciutto di Parma & Stracciatella Panini',
    category: 'pizzas',
    description: 'Crusty focaccia layered with 18-month cured Prosciutto di Parma, melted stracciatella, wild arugula, and white truffle oil drizzle.',
    price: 16.50,
    image: PROSCIUTTO_PANINI_IMAGE,
    rating: 4.75,
    reviewsCount: 260,
    prepTime: '8 mins',
    tags: ['Artisan Bread', 'Cured Prosciutto']
  },
  {
    id: 'm6',
    name: '34 Traditional Classic Tiramisù',
    category: 'desserts',
    description: 'Ladyfingers soaked in our Milano espresso and dark rum, layered with whipped mascarpone cream and dusted with Valrhona cocoa powder.',
    price: 9.50,
    image: TIRAMISU_IMAGE,
    rating: 4.95,
    reviewsCount: 510,
    isBestSeller: true,
    isChefSpecial: true,
    isVegetarian: true,
    prepTime: 'Ready',
    tags: ['House Recipe', 'Authentic Italian']
  },
  {
    id: 'm7',
    name: 'Sicilian Pistachio Cannoli Croccante',
    category: 'desserts',
    description: 'Crisp fried pastry shells filled with sweet ricotta cream, dark chocolate chips, dipped in crushed Bronte pistachios.',
    price: 8.50,
    image: CANNOLI_IMAGE,
    rating: 4.8,
    reviewsCount: 190,
    isVegetarian: true,
    prepTime: 'Ready',
    tags: ['Sicilian Specialty']
  },
  {
    id: 'm8',
    name: 'Passionfruit & Mint Sparkling Spritz',
    category: 'drinks',
    description: 'Fresh passionfruit puree, sparkling San Pellegrino, fresh mint leaves, lime juice, and gold sparkle garnish.',
    price: 7.50,
    image: PASSIONFRUIT_SPRITZ_IMAGE,
    rating: 4.85,
    reviewsCount: 175,
    isVegetarian: true,
    isGlutenFree: true,
    prepTime: '4 mins',
    tags: ['Mocktail', 'Sparkling']
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'g1',
    title: '34 Cafe Milano Interior Lounge',
    category: 'interiors',
    image: HERO_IMAGE,
    description: 'Warm ambient lighting, brass accents, and comfortable leather seating inside 34 Cafe Milano.'
  },
  {
    id: 'g2',
    title: 'Signature Milano Cappuccino Art',
    category: 'coffee',
    image: COFFEE_ART_IMAGE,
    description: 'Masterfully poured espresso with rosette latte art using lombardy roasted beans.'
  },
  {
    id: 'g3',
    title: 'Fresh Bronte Pistachio Cream Latte',
    category: 'coffee',
    image: PISTACHIO_LATTE_IMAGE,
    description: 'Layered double espresso with pistachio cream and crushed green roasted pistachios.'
  },
  {
    id: 'g4',
    title: 'Truffle Tagliatelle al Parmigiano',
    category: 'food',
    image: PASTA_SPECIAL_IMAGE,
    description: 'Handmade fresh egg pasta tossed with black truffles and 24-month Parmigiano.'
  },
  {
    id: 'g5',
    title: 'Neapolitan Wood-Fired Margherita Pizza',
    category: 'food',
    image: MARGHERITA_PIZZA_IMAGE,
    description: '72-hour fermented sourdough crust with San Marzano tomatoes and melted Fior di Latte.'
  },
  {
    id: 'g6',
    title: 'Prosciutto di Parma Focaccia Panini',
    category: 'food',
    image: PROSCIUTTO_PANINI_IMAGE,
    description: 'Artisanal crusty focaccia with 18-month cured prosciutto and creamy stracciatella.'
  },
  {
    id: 'g7',
    title: 'Authentic House Classic Tiramisù',
    category: 'food',
    image: TIRAMISU_IMAGE,
    description: 'Layered espresso-soaked ladyfingers with light whipped mascarpone cream.'
  },
  {
    id: 'g8',
    title: 'Sicilian Pistachio Cannoli',
    category: 'food',
    image: CANNOLI_IMAGE,
    description: 'Crisp fried pastry shells filled with fresh sweet ricotta and crushed pistachios.'
  },
  {
    id: 'g9',
    title: 'Passionfruit Mint Sparkling Spritz',
    category: 'food',
    image: PASSIONFRUIT_SPRITZ_IMAGE,
    description: 'Refreshing sparkling San Pellegrino spritz infused with fresh mint and passionfruit.'
  }
];

export const REVIEWS: Review[] = [
  {
    id: 'r1',
    author: 'Elena R.',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=150&auto=format&fit=crop',
    rating: 5,
    date: '3 days ago',
    comment: '34 Cafe Milano is hands down the best Italian cafe in town! The Pistachio Latte and Truffle Fettuccine are absolute magic. The atmosphere feels like a luxury cafe straight out of Milan.',
    source: 'Google Review',
    tag: 'Verified Diner'
  },
  {
    id: 'r2',
    author: 'Marco V.',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150&auto=format&fit=crop',
    rating: 5,
    date: '1 week ago',
    comment: 'As someone born in Italy, I am super picky about espresso. 34 Cafe Milano pulls genuine espresso with perfect crema. The tiramisu is melt-in-your-mouth perfection.',
    source: 'Google Review',
    tag: 'Coffee Enthusiast'
  },
  {
    id: 'r3',
    author: 'Sophia Chen',
    avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=150&auto=format&fit=crop',
    rating: 5,
    date: '2 weeks ago',
    comment: 'An aesthetic dream! Incredible lighting, aesthetic interiors, friendly staff, and the wood-fired Margherita pizza was divine. Highly recommend booking a table on the outdoor patio.',
    source: 'Google Review',
    tag: 'Local Guide'
  },
  {
    id: 'r4',
    author: 'David K.',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=150&auto=format&fit=crop',
    rating: 5,
    date: '1 month ago',
    comment: 'Came here for brunch and was thoroughly impressed. The Burrata Rigatoni and Affogato were outstanding. The customer service is warm, welcoming, and attentive.',
    source: 'Google Review',
    tag: 'Verified Diner'
  }
];

export const BUSINESS_HOURS: BusinessDay[] = [
  { day: 'Monday', hours: '08:00 AM - 11:00 PM', isOpenToday: true },
  { day: 'Tuesday', hours: '08:00 AM - 11:00 PM', isOpenToday: true },
  { day: 'Wednesday', hours: '08:00 AM - 11:00 PM', isOpenToday: true },
  { day: 'Thursday', hours: '08:00 AM - 11:00 PM', isOpenToday: true },
  { day: 'Friday', hours: '08:00 AM - 11:30 PM', isOpenToday: true },
  { day: 'Saturday', hours: '08:30 AM - 11:30 PM', isOpenToday: true },
  { day: 'Sunday', hours: '08:30 AM - 10:30 PM', isOpenToday: true }
];

export const WHY_CHOOSE_US = [
  {
    icon: 'Coffee',
    title: '100% Italian Roast Espresso',
    description: 'Single-origin & custom Milano roasts pulled with artisanal precision on our La Marzocco.'
  },
  {
    icon: 'UtensilsCrossed',
    title: 'Handcrafted Fresh Pastas',
    description: 'Prepared daily with imported San Marzano tomatoes, Parmigiano-Reggiano, and fresh truffles.'
  },
  {
    icon: 'Sparkles',
    title: 'Luxury Milano Interior',
    description: 'Sophisticated marble counters, warm ambient glow, and lush garden outdoor patio.'
  },
  {
    icon: 'HeartHandshake',
    title: 'Warm Hospitality',
    description: 'Attentive, friendly service where every guest is welcomed like family.'
  },
  {
    icon: 'Dog',
    title: 'Pet-Friendly Patio',
    description: 'Enjoy outdoor seating with water bowls and treats provided for your furry companions.'
  },
  {
    icon: 'Award',
    title: 'Top Rated Google Business',
    description: 'Over 1,400+ 5-star reviews celebrating our food, coffee, and magical ambiance.'
  }
];
