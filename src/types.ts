export type DietaryType = 'veg' | 'non-veg';

export interface MenuItem {
  id: string;
  name: string;
  nativeName?: string;
  category: string;
  description: string;
  price: number;
  originalPrice?: number;
  isVeg: boolean;
  spiceLevel: 0 | 1 | 2 | 3; // 0 = mild, 1 = medium, 2 = spicy, 3 = devil hot
  isBestSeller?: boolean;
  isNew?: boolean;
  isChefSpecial?: boolean;
  piecesCount: number;
  rating: number;
  reviewCount: number;
  image: string;
  calories: number;
  prepTime: string;
  tags: string[];
  dipRecommendations: string[];
  allergenInfo?: string;
}

export interface MenuCategory {
  id: string;
  label: string;
  iconName: string;
  badge?: string;
}

export interface CartItem {
  item: MenuItem;
  quantity: number;
  selectedDip?: string;
  spicePreference?: string;
  customNotes?: string;
}

export interface Coupon {
  code: string;
  title: string;
  discountText: string;
  minOrder: number;
  discountType: 'percentage' | 'flat';
  discountValue: number;
  maxDiscount?: number;
  terms: string;
  validUntil: string;
  isPopular?: boolean;
}

export interface Testimonial {
  id: string;
  name: string;
  roleOrCity: string;
  rating: number;
  comment: string;
  avatar: string;
  verifiedPlatform: 'Zomato' | 'Swiggy' | 'Google';
  favoriteDish: string;
  date: string;
  badge?: string;
}

export interface OutletLocation {
  id: string;
  name: string;
  area: string;
  city: string;
  address: string;
  landmark: string;
  phone: string;
  email: string;
  openingHours: string;
  closingTimeHour: number; // 23 for 11pm
  seatingCapacity: number;
  image: string;
  amenities: string[];
  directionsUrl: string;
  mapQuery: string;
}

export interface TableBooking {
  id: string;
  name: string;
  phone: string;
  email: string;
  date: string;
  timeSlot: string;
  partySize: number;
  outletId: string;
  seatingArea: 'Indoor AC' | 'Rooftop Lounge' | 'Chef Live Counter';
  occasion: string;
  specialRequests?: string;
  createdAt: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category: 'Orders & Delivery' | 'Food & Ingredients' | 'Table Booking' | 'Catering';
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'Dishes' | 'Sizzlers' | 'Ambience' | 'Kitchen Behind The Scenes';
  image: string;
  caption: string;
}
