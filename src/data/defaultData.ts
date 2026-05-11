// ═══════════════════════════════════════════════
// LA TABLE D'AHOÉ — Default Data & Types
// ═══════════════════════════════════════════════

export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  categoryId: string;
  image: string;
  available: boolean;
}

export interface Category {
  id: string;
  name: string;
  order: number;
}

export interface RestaurantConfig {
  name: string;
  tagline: string;
  whatsapp: string;
  address: string;
  hours: string;
  instagram: string;
  facebook: string;
  instagramUrl: string;
  facebookUrl: string;
}

export interface CartItem {
  id: string;
  name: string;
  price: number;
  qty: number;
}

export interface Order {
  id: string;
  tableNumber: string;
  items: { name: string; qty: number; price: number }[];
  total: number;
  note: string;
  status: 'pending' | 'preparing' | 'ready' | 'done';
  createdAt: number;
  updatedAt: number;
}

// ── Local Images (Offline Access) ──
export const IMAGES = {
  heroGrill: '/images/heroGrill.jpg',
  chickenSkewer: '/images/chickenSkewer.jpg',
  seafood: '/images/seafood.jpg',
  cocktail: '/images/cocktail.jpg',
  traiteur: '/images/traiteur.jpg',
  about: '/images/about.jpg',
  rooftop: '/images/rooftop.jpg',
  grilledChicken: '/images/grilledChicken.jpg',
  grilledShrimp: '/images/grilledShrimp.jpg',
  lamb: '/images/lamb.jpg',
  fishGrilled: '/images/fishGrilled.jpg',
  calamari: '/images/calamari.jpg',
  kanklo: '/images/kanklo.jpg',
  frites: '/images/frites.jpg',
  rizSaute: '/images/rizSaute.jpg',
  mojito: '/images/mojito.jpg',
  virginCoco: '/images/virginCoco.jpg',
  water: '/images/water.jpg',
  juice: '/images/juice.jpg',
  beer: '/images/beer.jpg',
};

// ── Default Categories ──
export const DEFAULT_CATEGORIES: Category[] = [
  { id: 'grillades', name: 'GRILLADES', order: 0 },
  { id: 'fruits-de-mer', name: 'FRUITS DE MER', order: 1 },
  { id: 'accompagnements', name: 'ACCOMPAGNEMENTS', order: 2 },
  { id: 'cocktails', name: 'COCKTAILS', order: 3 },
  { id: 'softs', name: 'SOFTS & EXTRAS', order: 4 },
];

// ── Default Menu Items ──
export const DEFAULT_MENU: MenuItem[] = [
  // GRILLADES
  { id: '1', name: 'Brochettes Curry-Coco', description: 'Brochettes de poulet marinées au curry et lait de coco, grillées au charbon de bois', price: 6500, categoryId: 'grillades', image: IMAGES.chickenSkewer, available: true },
  { id: '2', name: 'Poulet Entier Épicé', description: 'Poulet entier aux épices maison, grillé lentement sur braise', price: 8000, categoryId: 'grillades', image: IMAGES.grilledChicken, available: true },
  { id: '3', name: "Côtes d'Agneau", description: "Côtes d'agneau tendres aux herbes et épices ouest-africaines", price: 7500, categoryId: 'grillades', image: IMAGES.lamb, available: true },
  { id: '4', name: 'Crevettes Grillées', description: 'Crevettes géantes grillées au beurre épicé et citron vert', price: 7000, categoryId: 'grillades', image: IMAGES.grilledShrimp, available: true },
  // FRUITS DE MER
  { id: '5', name: 'Plateau Fruits de Mer', description: 'Assortiment de fruits de mer grillés — crevettes, poisson, calamars', price: 8000, categoryId: 'fruits-de-mer', image: IMAGES.seafood, available: true },
  { id: '6', name: 'Poisson Braisé', description: 'Poisson entier braisé aux oignons, tomates et piments frais', price: 6000, categoryId: 'fruits-de-mer', image: IMAGES.fishGrilled, available: true },
  { id: '7', name: 'Calamars Grillés', description: 'Calamars tendres grillés à la perfection avec sauce piquante', price: 6500, categoryId: 'fruits-de-mer', image: IMAGES.calamari, available: true },
  // ACCOMPAGNEMENTS
  { id: '8', name: 'Kanklo — Beignets de Banane', description: 'Beignets croustillants de banane plantain, spécialité togolaise', price: 1500, categoryId: 'accompagnements', image: IMAGES.kanklo, available: true },
  { id: '9', name: 'Frites Maison', description: 'Frites de pommes de terre fraîches, dorées et croustillantes', price: 1500, categoryId: 'accompagnements', image: IMAGES.frites, available: true },
  { id: '10', name: 'Riz Sauté', description: 'Riz sauté aux légumes et épices, accompagnement parfait', price: 2000, categoryId: 'accompagnements', image: IMAGES.rizSaute, available: true },
  // COCKTAILS
  { id: '11', name: 'Bahia', description: 'Rhum, ananas frais, lait de coco et menthe — notre signature', price: 4500, categoryId: 'cocktails', image: IMAGES.cocktail, available: true },
  { id: '12', name: 'Mojito Tropical', description: 'Mojito revisité aux fruits tropicaux et menthe fraîche', price: 4000, categoryId: 'cocktails', image: IMAGES.mojito, available: true },
  { id: '13', name: 'Virgin Coco', description: 'Lait de coco, ananas et sirop de vanille — sans alcool', price: 2500, categoryId: 'cocktails', image: IMAGES.virginCoco, available: true },
  // SOFTS & EXTRAS
  { id: '14', name: 'Eau Minérale', description: 'Eau minérale naturelle 50cl', price: 500, categoryId: 'softs', image: IMAGES.water, available: true },
  { id: '15', name: 'Jus de Fruits Naturel', description: 'Jus pressé du jour — ananas, mangue ou gingembre', price: 2000, categoryId: 'softs', image: IMAGES.juice, available: true },
  { id: '16', name: 'Bière Pression', description: 'Bière locale servie fraîche à la pression', price: 2500, categoryId: 'softs', image: IMAGES.beer, available: true },
];

// ── Default Config ──
export const DEFAULT_CONFIG: RestaurantConfig = {
  name: "La Table d'Ahoé",
  tagline: 'Le RDV des amoureux de BBQ',
  whatsapp: '22891016439',
  address: 'Hédzranawoé, Rue HDN 180, premier von à droite après la station Yatt & Co en venant de la foire Togo 2000, Lomé, Togo',
  hours: 'Mercredi au Dimanche — à partir de 18h GMT',
  instagram: '@la_table_dahoe',
  facebook: 'La Table d\'Ahoé',
  instagramUrl: 'https://www.instagram.com/la_table_dahoe',
  facebookUrl: 'https://www.facebook.com/latabledahoe16',
};

export interface RestaurantData {
  config: RestaurantConfig;
  categories: Category[];
  menu: MenuItem[];
}

export const DEFAULT_DATA: RestaurantData = {
  config: DEFAULT_CONFIG,
  categories: DEFAULT_CATEGORIES,
  menu: DEFAULT_MENU,
};
