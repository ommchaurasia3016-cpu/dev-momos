import { MenuItem, MenuCategory, Coupon, Testimonial, OutletLocation, FaqItem, GalleryItem } from '../types';

export const BRAND_TAGLINES = [
  "Hand-Folded. Steam-Kissed. Fired Up in Fiery Chili Oil.",
  "Life Happens, Momos Help. Authentic Desi Himalayan Street Cravings.",
  "Wrapped with Pure Obsession, Served with Spicy Devil Chutney.",
  "Crispy, Steamy, Sizzling — The Ultimate Street Momo Experience."
];

export const STATS_DATA = [
  { value: "500K+", label: "Momos Folded & Served", subtext: "Freshly crafted every morning" },
  { value: "4.8 ★", label: "Zomato & Swiggy Rating", subtext: "Over 25,000+ verified foodies" },
  { value: "14", label: "Outlets & Cloud Hubs", subtext: "Across Delhi, Bangalore & Mumbai" },
  { value: "8", label: "Artisan Secret Dips", subtext: "From Garlic Devil to Truffle Mayo" }
];

export const MENU_CATEGORIES: MenuCategory[] = [
  { id: 'all', label: 'All Items', iconName: 'Sparkles', badge: 'Full Menu' },
  { id: 'steamed', label: 'Steamed Classics', iconName: 'Flame', badge: 'Traditional' },
  { id: 'fried', label: 'Crispy & Kurkure', iconName: 'Sparkles', badge: 'Crunchy' },
  { id: 'tandoori', label: 'Charcoal Tandoori', iconName: 'Flame', badge: 'Smoky' },
  { id: 'sizzlers', label: 'Sizzlers & Platters', iconName: 'Utensils', badge: 'Chef Special' },
  { id: 'soup', label: 'Momo Soups & Thukpa', iconName: 'Coffee', badge: 'Warm & Comfort' },
  { id: 'fusion', label: 'Fusion & Exotic', iconName: 'Zap', badge: 'Innovative' },
  { id: 'dips', label: 'Artisan Dips & Jars', iconName: 'Shield', badge: 'Signatures' },
  { id: 'beverages', label: 'Mocktails & Chai', iconName: 'Wine', badge: 'Chilled' },
  { id: 'combos', label: 'Feast Combos & Boxes', iconName: 'Package', badge: 'Save ₹120' }
];

export const SIGNATURE_DIPS = [
  "Spicy Red Garlic Devil Chutney (House Secret)",
  "Creamy Mayo Mint Coriander Dip",
  "Tibetan Roasted Sesame-Peanut Sauce",
  "Smoky Ghost Pepper Schezwan Dip",
  "Honey Mustard Dip"
];

export const MENU_ITEMS: MenuItem[] = [
  // Steamed Classics
  {
    id: 'm1',
    name: 'Darjeeling Juicy Chicken Steamed Momos',
    nativeName: 'दार्जिलिंग चिकन मोमो',
    category: 'steamed',
    description: 'Thin-skin hand-pinched wrappers packed with coarsely minced chicken thigh, scallions, ginger, and aromatic Himalayan herbs.',
    price: 189,
    originalPrice: 220,
    isVeg: false,
    spiceLevel: 1,
    isBestSeller: true,
    piecesCount: 6,
    rating: 4.9,
    reviewCount: 3420,
    image: 'https://images.unsplash.com/photo-1496116218417-1a781b1c416c?auto=format&fit=crop&w=800&q=85',
    calories: 240,
    prepTime: '12-15 mins',
    tags: ['Juicy', 'Classic', 'Himalayan Favorite'],
    dipRecommendations: ['Spicy Red Garlic Devil Chutney', 'Creamy Mayo Mint'],
    allergenInfo: 'Contains Gluten, Soy'
  },
  {
    id: 'm2',
    name: 'Classic Veg Darjeeling Steamed Momos',
    nativeName: 'पारंपरिक वेज मोमो',
    category: 'steamed',
    description: 'Finely shredded crisp cabbage, sweet onions, organic carrots, coriander stem, and a hint of butter in a translucent wrapper.',
    price: 159,
    originalPrice: 180,
    isVeg: true,
    spiceLevel: 1,
    isBestSeller: true,
    piecesCount: 6,
    rating: 4.7,
    reviewCount: 2890,
    image: 'https://images.unsplash.com/photo-1541696432-82c6da8ce7bf?auto=format&fit=crop&w=800&q=85',
    calories: 190,
    prepTime: '10-12 mins',
    tags: ['Pure Veg', 'Light & Fresh'],
    dipRecommendations: ['Spicy Red Garlic Devil Chutney', 'Sesame-Peanut Dip'],
    allergenInfo: 'Contains Gluten'
  },
  {
    id: 'm3',
    name: 'Paneer Makhani Butter Steamed Momos',
    nativeName: 'पनीर बटर मसाला मोमो',
    category: 'steamed',
    description: 'Crumbled malai paneer infused with smoked butter spices, green chilies, and fresh mint. Silky and melt-in-mouth.',
    price: 199,
    originalPrice: 230,
    isVeg: true,
    spiceLevel: 2,
    isChefSpecial: true,
    piecesCount: 6,
    rating: 4.8,
    reviewCount: 1640,
    image: 'https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&w=800&q=85',
    calories: 260,
    prepTime: '12-15 mins',
    tags: ['Rich Paneer', 'Desi Flavor'],
    dipRecommendations: ['Creamy Mayo Mint', 'Spicy Garlic Chutney'],
    allergenInfo: 'Contains Milk, Gluten'
  },
  {
    id: 'm4',
    name: 'Smoked Mutton Himalayan Steamed Momos',
    nativeName: 'हिमालयन मटन मोमो',
    category: 'steamed',
    description: 'Hand-minced tender goat meat slow-infused with whole black cardamom, shallots, and mountain broth inside delicate pleats.',
    price: 249,
    originalPrice: 289,
    isVeg: false,
    spiceLevel: 2,
    isChefSpecial: true,
    piecesCount: 6,
    rating: 4.9,
    reviewCount: 1980,
    image: 'https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&w=800&q=85',
    calories: 310,
    prepTime: '15-18 mins',
    tags: ['Gourmet', 'Tender Meat', 'Limited Batch'],
    dipRecommendations: ['Smoky Ghost Pepper Dip', 'Roasted Sesame-Peanut'],
    allergenInfo: 'Contains Gluten'
  },

  // Fried & Kurkure
  {
    id: 'm5',
    name: 'Delhi-Style Kurkure Chicken Momos',
    nativeName: 'कुरकुरे चिकन मोमो',
    category: 'fried',
    description: 'Double-battered in spiced cornflakes and panko crumb, flash-fried till golden crisp. Tossed in special chatpata peri-peri dust.',
    price: 229,
    originalPrice: 260,
    isVeg: false,
    spiceLevel: 2,
    isBestSeller: true,
    piecesCount: 6,
    rating: 4.9,
    reviewCount: 4120,
    image: 'https://images.unsplash.com/photo-1606491956689-2ea866880c84?auto=format&fit=crop&w=800&q=85',
    calories: 380,
    prepTime: '14-16 mins',
    tags: ['Ultra Crunchy', 'Street Bestseller'],
    dipRecommendations: ['Spicy Red Garlic Devil Chutney', 'Smoky Ghost Mayo'],
    allergenInfo: 'Contains Gluten, Dairy'
  },
  {
    id: 'm6',
    name: 'Golden Fried Cheese & Corn Kurkure Momos',
    nativeName: 'चीज कॉर्न कुरकुरे मोमो',
    category: 'fried',
    description: 'Oozing mozzarella, sweet American corn kernels, and bell peppers in an explosive golden crispy shell.',
    price: 219,
    originalPrice: 249,
    isVeg: true,
    spiceLevel: 1,
    isNew: true,
    piecesCount: 6,
    rating: 4.8,
    reviewCount: 1210,
    image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=85',
    calories: 360,
    prepTime: '12-15 mins',
    tags: ['Cheese Pull', 'Kids Favorite'],
    dipRecommendations: ['Creamy Mayo Mint', 'Spicy Garlic Chutney'],
    allergenInfo: 'Contains Dairy, Gluten'
  },
  {
    id: 'm7',
    name: 'Fiery Schezwan Tossed Fried Chicken Momos',
    nativeName: 'शेजवान फ्राइड मोमो',
    category: 'fried',
    description: 'Deep-fried crispy dumplings wok-tossed in high-flame garlic chili oil, spring onions, bell peppers, and Sichuan peppercorns.',
    price: 239,
    originalPrice: 270,
    isVeg: false,
    spiceLevel: 3,
    isChefSpecial: true,
    piecesCount: 6,
    rating: 4.9,
    reviewCount: 2100,
    image: 'https://images.unsplash.com/photo-1569058242253-92a9c755a0ec?auto=format&fit=crop&w=800&q=85',
    calories: 340,
    prepTime: '14-16 mins',
    tags: ['Devil Spice', 'Wok-Tossed'],
    dipRecommendations: ['Creamy Mayo Mint'],
    allergenInfo: 'Contains Gluten, Soy, Sesame'
  },

  // Tandoori & Afghan
  {
    id: 'm8',
    name: 'Charcoal Roasted Tandoori Chicken Momos',
    nativeName: 'तंदूरी चिकन मोमो',
    category: 'tandoori',
    description: 'Marinated in Kashmiri chili yogurt, mustard oil, and 14 secret spices, skewered and roasted in a clay tandoor over open charcoal.',
    price: 249,
    originalPrice: 280,
    isVeg: false,
    spiceLevel: 2,
    isBestSeller: true,
    piecesCount: 6,
    rating: 5.0,
    reviewCount: 4890,
    image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=800&q=85',
    calories: 290,
    prepTime: '18-20 mins',
    tags: ['Charcoal Smoked', 'Signature Flavor'],
    dipRecommendations: ['Spicy Red Garlic Chutney', 'Lachha Onion Salad'],
    allergenInfo: 'Contains Dairy, Mustard, Gluten'
  },
  {
    id: 'm9',
    name: 'Creamy Afghan Malai Paneer Momos',
    nativeName: 'अफ़गानी मलाई पनीर मोमो',
    category: 'tandoori',
    description: 'Bathed in cashew paste, fresh cream, green cardamom, roasted kasuri methi, and mild green chilies. Charred gently.',
    price: 239,
    originalPrice: 270,
    isVeg: true,
    spiceLevel: 1,
    isChefSpecial: true,
    piecesCount: 6,
    rating: 4.8,
    reviewCount: 1850,
    image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=800&q=85',
    calories: 320,
    prepTime: '18-20 mins',
    tags: ['Velvety Cream', 'Mild & Royal'],
    dipRecommendations: ['Mint Chutney', 'Garlic Devil'],
    allergenInfo: 'Contains Tree Nuts (Cashew), Dairy, Gluten'
  },
  {
    id: 'm10',
    name: 'Hariyali Mint & Coriander Chicken Momos',
    nativeName: 'हरियाली चिकन मोमो',
    category: 'tandoori',
    description: 'Fresh garden mint, crushed coriander, raw mango powder, and green chili marinade roasted in clay oven.',
    price: 249,
    originalPrice: 280,
    isVeg: false,
    spiceLevel: 2,
    piecesCount: 6,
    rating: 4.7,
    reviewCount: 940,
    image: 'https://images.unsplash.com/photo-1589302168068-964664d93dc0?auto=format&fit=crop&w=800&q=85',
    calories: 270,
    prepTime: '16-18 mins',
    tags: ['Herbal Fresh', 'Tandoor Char'],
    dipRecommendations: ['Spicy Garlic Dip', 'Lemon Wedges'],
    allergenInfo: 'Contains Dairy, Gluten'
  },

  // Sizzlers & Platters
  {
    id: 'm11',
    name: 'DEV’s Fiery Sizzler Momo Platter',
    nativeName: 'देव सिग्नेचर मोमो सिज़लर',
    category: 'sizzlers',
    description: 'A smoking cast iron sizzler loaded with butter noodles, cabbage bed, 4 Kurkure Momos, 4 Tandoori Momos, French fries, and our signature sizzler gravy.',
    price: 399,
    originalPrice: 450,
    isVeg: false,
    spiceLevel: 2,
    isBestSeller: true,
    isChefSpecial: true,
    piecesCount: 8,
    rating: 4.9,
    reviewCount: 3120,
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=85',
    calories: 580,
    prepTime: '20-25 mins',
    tags: ['Table Showstopper', 'Heavy Meal for Two'],
    dipRecommendations: ['Comes with 3 Signature Dips'],
    allergenInfo: 'Contains Dairy, Gluten, Soy'
  },
  {
    id: 'm12',
    name: 'Grand 16-Piece Tasting Sampler Platter',
    nativeName: 'ग्रैंड 16 पीस मोमो प्लेटर',
    category: 'sizzlers',
    description: 'The ultimate tasting box: 4 Steamed Chicken, 4 Kurkure Paneer, 4 Tandoori Charcoal, and 4 Schezwan Fried momos with all 4 signature dips.',
    price: 499,
    originalPrice: 599,
    isVeg: false,
    spiceLevel: 2,
    isBestSeller: true,
    piecesCount: 16,
    rating: 5.0,
    reviewCount: 2750,
    image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=85',
    calories: 820,
    prepTime: '20-22 mins',
    tags: ['Party Favorite', 'Try Everything'],
    dipRecommendations: ['All 4 Dips Included'],
    allergenInfo: 'Contains Gluten, Dairy, Soy'
  },

  // Momo Soups & Thukpa
  {
    id: 'm13',
    name: 'Spicy Tibetan Broth Momo Soup (Mokthuk)',
    nativeName: 'तिब्बती मोकथुक सूप',
    category: 'soup',
    description: 'Rich, comforting bone broth slow-simmered for 8 hours with star anise, bok choy, spring onions, and 5 juicy steamed momos floating inside.',
    price: 219,
    originalPrice: 250,
    isVeg: false,
    spiceLevel: 2,
    piecesCount: 5,
    rating: 4.8,
    reviewCount: 1450,
    image: 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=800&q=85',
    calories: 220,
    prepTime: '15 mins',
    tags: ['Soul Food', 'Immunity Booster'],
    dipRecommendations: ['Chili Crisp Infused in Soup'],
    allergenInfo: 'Contains Gluten, Soy'
  },
  {
    id: 'm14',
    name: 'Desi Manchow Momo Hot Pot',
    nativeName: 'देसी मनचाओ मोमो सूप',
    category: 'soup',
    description: 'Thick, spicy, and tangy Indo-Chinese soup loaded with shredded veggies, crispy fried noodles on top, and 5 succulent steamed veg momos.',
    price: 199,
    originalPrice: 229,
    isVeg: true,
    spiceLevel: 2,
    piecesCount: 5,
    rating: 4.7,
    reviewCount: 890,
    image: 'https://images.unsplash.com/photo-1541832676-9b763b0239ab?auto=format&fit=crop&w=800&q=85',
    calories: 210,
    prepTime: '12-14 mins',
    tags: ['Tangy & Spicy', 'Street Legend'],
    dipRecommendations: ['Chili Garlic Sauce'],
    allergenInfo: 'Contains Gluten, Soy'
  },

  // Fusion & Exotic
  {
    id: 'm15',
    name: 'Smoked Truffle Butter & Cheese Momos',
    nativeName: 'ट्रफल बटर चीज मोमो',
    category: 'fusion',
    description: 'Gourmet wild mushrooms, smoked gouda, cream cheese, and white truffle oil drizzle. An exquisite fusion experience.',
    price: 279,
    originalPrice: 320,
    isVeg: true,
    spiceLevel: 0,
    isNew: true,
    isChefSpecial: true,
    piecesCount: 6,
    rating: 4.9,
    reviewCount: 780,
    image: 'https://images.unsplash.com/photo-1555126634-323283e090fa?auto=format&fit=crop&w=800&q=85',
    calories: 310,
    prepTime: '15-18 mins',
    tags: ['Luxury Fusion', 'Truffle Aroma'],
    dipRecommendations: ['Truffle Garlic Aioli'],
    allergenInfo: 'Contains Dairy, Gluten'
  },
  {
    id: 'm16',
    name: 'Belgian Dark Chocolate Molten Lava Momos',
    nativeName: 'डार्क चॉकलेट लावा मोमो',
    category: 'fusion',
    description: 'Sweet, cocoa-infused dough filled with warm Belgian 70% dark chocolate ganache that erupts on the first bite. Dusted with cinnamon sugar.',
    price: 199,
    originalPrice: 230,
    isVeg: true,
    spiceLevel: 0,
    isBestSeller: true,
    piecesCount: 4,
    rating: 4.9,
    reviewCount: 2300,
    image: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=800&q=85',
    calories: 340,
    prepTime: '10-12 mins',
    tags: ['Dessert Momo', 'Decadent Ganache'],
    dipRecommendations: ['Salted Caramel Drizzle'],
    allergenInfo: 'Contains Dairy, Gluten'
  },

  // Artisan Dips & Jars
  {
    id: 'm17',
    name: 'DEV’s Red Garlic Devil Chutney Jar (250g)',
    nativeName: 'रेड गार्लिक डेविल चटनी जार',
    category: 'dips',
    description: 'Our iconic, slow-simmered fiery red chili garlic sauce in a reusable glass jar. 0 preservatives, 100% authentic kick.',
    price: 149,
    originalPrice: 179,
    isVeg: true,
    spiceLevel: 3,
    isBestSeller: true,
    piecesCount: 1,
    rating: 5.0,
    reviewCount: 3900,
    image: 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=800&q=85',
    calories: 120,
    prepTime: 'Ready to dispatch',
    tags: ['House Secret', 'Takeaway Jar'],
    dipRecommendations: ['Pairs with Everything'],
    allergenInfo: 'Garlic, Chili'
  },
  {
    id: 'm18',
    name: 'Tibetan Roasted Sesame & Peanut Dip (200g)',
    nativeName: 'तिब्बती सेसमे पीनट सॉस',
    category: 'dips',
    description: 'Nutty, creamy, mild dip made from stone-ground toasted white sesame seeds, peanuts, and cold-pressed mustard oil.',
    price: 129,
    originalPrice: 150,
    isVeg: true,
    spiceLevel: 1,
    piecesCount: 1,
    rating: 4.8,
    reviewCount: 1100,
    image: 'https://images.unsplash.com/photo-1528751014936-863e6e7a319c?auto=format&fit=crop&w=800&q=85',
    calories: 180,
    prepTime: 'Ready to dispatch',
    tags: ['Nutty & Rich', 'Mild'],
    dipRecommendations: ['Steamed Momos Special'],
    allergenInfo: 'Contains Peanuts, Sesame'
  },

  // Beverages
  {
    id: 'm19',
    name: 'Spicy Masala Guava Fizz with Chili Rim',
    nativeName: 'स्पाइसी अमरूद फ़िज़',
    category: 'beverages',
    description: 'Pink guava nectar, sparkling soda, black salt, and roasted cumin with a fiery red chili-sugar rim.',
    price: 129,
    originalPrice: 149,
    isVeg: true,
    spiceLevel: 1,
    isBestSeller: true,
    piecesCount: 1,
    rating: 4.8,
    reviewCount: 1650,
    image: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=800&q=85',
    calories: 110,
    prepTime: '5 mins',
    tags: ['Refreshing', 'Chili-Rimmed'],
    dipRecommendations: [],
    allergenInfo: 'None'
  },
  {
    id: 'm20',
    name: 'Darjeeling Mountain Spiced Masala Chai',
    nativeName: 'दार्जिलिंग मसाला चाय',
    category: 'beverages',
    description: 'Strong single-estate orthodox black tea brewed with crushed green cardamom, cinnamon bark, fresh ginger, and creamy milk.',
    price: 79,
    originalPrice: 99,
    isVeg: true,
    spiceLevel: 0,
    piecesCount: 1,
    rating: 4.9,
    reviewCount: 2200,
    image: 'https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=800&q=85',
    calories: 85,
    prepTime: '5 mins',
    tags: ['Fresh Brewed', 'Authentic Aroma'],
    dipRecommendations: [],
    allergenInfo: 'Contains Milk'
  },

  // Combos
  {
    id: 'm21',
    name: 'Solo Momo Binge Box (8 Pcs + Drink + 2 Dips)',
    nativeName: 'सोलो मोमो बिंज बॉक्स',
    category: 'combos',
    description: '4 Steamed Chicken + 4 Kurkure Chicken momos, 1 Masala Guava Fizz, and twin signature dips. Perfect single feast.',
    price: 319,
    originalPrice: 389,
    isVeg: false,
    spiceLevel: 2,
    isBestSeller: true,
    piecesCount: 8,
    rating: 4.9,
    reviewCount: 3800,
    image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=85',
    calories: 590,
    prepTime: '15-18 mins',
    tags: ['Save ₹70', 'Best Value Solo'],
    dipRecommendations: ['Devil Chutney & Mint Mayo Included'],
    allergenInfo: 'Contains Gluten, Dairy'
  },
  {
    id: 'm22',
    name: 'Squad Game Night Mega Box (24 Pcs + 4 Drinks)',
    nativeName: 'स्क्वाड मेगा मोमो क्रेट',
    category: 'combos',
    description: '8 Steamed Veg/Chicken, 8 Kurkure Crispy, 8 Charcoal Tandoori, 4 Peach Iced Teas, and 4 Dip Jars. Serves 3-4 hungry foodies.',
    price: 799,
    originalPrice: 999,
    isVeg: false,
    spiceLevel: 2,
    isChefSpecial: true,
    piecesCount: 24,
    rating: 5.0,
    reviewCount: 1950,
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=85',
    calories: 1400,
    prepTime: '22-25 mins',
    tags: ['Party Crate', 'Save ₹200'],
    dipRecommendations: ['All 4 Dips Included in Big Jars'],
    allergenInfo: 'Contains Gluten, Dairy, Soy'
  }
];

export const COUPONS: Coupon[] = [
  {
    code: 'FIRSTMOMO',
    title: 'Flat 20% OFF First Direct Order',
    discountText: '20% OFF',
    minOrder: 199,
    discountType: 'percentage',
    discountValue: 20,
    maxDiscount: 100,
    terms: 'Valid on all steamed, tandoori & kurkure momos for first-time orders.',
    validUntil: '31 Dec 2026',
    isPopular: true
  },
  {
    code: 'BOGOMOMO',
    title: 'Buy 1 Get 1 on Fried & Kurkure Momos',
    discountText: 'BOGO FREE',
    minOrder: 299,
    discountType: 'flat',
    discountValue: 150,
    terms: 'Valid on any 6-pc crispy or kurkure momos (Mon to Thu).',
    validUntil: 'Ongoing Deal',
    isPopular: true
  },
  {
    code: 'FREEDIP',
    title: 'Free Red Devil Chutney Jar on ₹349+',
    discountText: 'FREE CHUTNEY',
    minOrder: 349,
    discountType: 'flat',
    discountValue: 149,
    terms: 'Complimentary 250g signature garlic chutney jar with your delivery.',
    validUntil: 'Active Today'
  },
  {
    code: 'PARTY150',
    title: 'Flat ₹150 OFF on Mega Boxes & Platters',
    discountText: 'FLAT ₹150 OFF',
    minOrder: 599,
    discountType: 'flat',
    discountValue: 150,
    terms: 'Applicable on 16-pc Platter and Squad Game Night Crate.',
    validUntil: 'Weekend Special'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    name: 'Aarav Mehta',
    roleOrCity: 'Food Blogger & Critic, Delhi',
    rating: 5,
    comment: "I have eaten momos from Majnu Ka Tila to Darjeeling street carts, and DEV MOMO'S tandoori chicken momo easily beats 99% of them! The charcoal char combined with their devil garlic dip is pure euphoria.",
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
    verifiedPlatform: 'Zomato',
    favoriteDish: 'Charcoal Tandoori Chicken Momos',
    date: '2 days ago',
    badge: 'Top Reviewer'
  },
  {
    id: 't2',
    name: 'Pooja Sharma',
    roleOrCity: 'Tech Lead, Indiranagar, Bengaluru',
    rating: 5,
    comment: "The Kurkure Paneer momos are insane. Super crunchy exterior with piping hot, juicy paneer filling that doesn't feel rubbery. Also, ordering directly on the site saved me ₹80 compared to other apps!",
    avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=200&q=80',
    verifiedPlatform: 'Swiggy',
    favoriteDish: 'Delhi-Style Kurkure Paneer',
    date: '1 week ago',
    badge: 'Verified Buyer'
  },
  {
    id: 't3',
    name: 'Rohan Deshmukh',
    roleOrCity: 'Bandra, Mumbai',
    rating: 5,
    comment: "The Sizzler Momo platter was the highlight of our Friday dinner. Sizzling hot noodles with 8 momos and dripping garlic sauce. Great rooftop ambience too. 10/10 recommend booking in advance!",
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
    verifiedPlatform: 'Google',
    favoriteDish: 'DEV’s Fiery Sizzler Momo Platter',
    date: '3 days ago',
    badge: 'Local Guide'
  },
  {
    id: 't4',
    name: 'Sneha Roy',
    roleOrCity: 'Kolkata Native in Delhi',
    rating: 5,
    comment: "Finally, momos with REAL thin skin and not thick raw dough! The broth in the Darjeeling chicken steamed momos explodes like a soup dumpling. The devil chutney has the exact kick of Dalle Khursani chili.",
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80',
    verifiedPlatform: 'Zomato',
    favoriteDish: 'Darjeeling Steamed Chicken Momos',
    date: '5 days ago',
    badge: 'Super Foodie'
  }
];

export const OUTLETS: OutletLocation[] = [
  {
    id: 'cp-flagship',
    name: "Connaught Place Flagship & Rooftop",
    area: "Inner Circle, Connaught Place",
    city: "New Delhi",
    address: "Block C-14, Inner Circle, Above Metro Gate 4, Connaught Place, New Delhi - 110001",
    landmark: "Opposite Regal Cinema",
    phone: "+91 98710 44220",
    email: "cp@devmomos.com",
    openingHours: "11:00 AM – 11:30 PM (Mon-Sun)",
    closingTimeHour: 23,
    seatingCapacity: 65,
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80",
    amenities: ["Rooftop Lounge", "Live Tandoor Counter", "Valet Parking", "Free High-Speed Wi-Fi", "Cocktail Bar"],
    directionsUrl: "https://maps.google.com/?q=Connaught+Place+Delhi",
    mapQuery: "Connaught Place, New Delhi"
  },
  {
    id: 'indiranagar-hub',
    name: "Indiranagar Craft Dine & Kitchen",
    area: "100ft Road, Indiranagar",
    city: "Bengaluru",
    address: "Plot 742, 100 Feet Rd, HAL 2nd Stage, Indiranagar, Bengaluru, Karnataka 560038",
    landmark: "Near Sony Center Signal",
    phone: "+91 98450 88310",
    email: "blr@devmomos.com",
    openingHours: "11:30 AM – 12:00 AM Midnight (Mon-Sun)",
    closingTimeHour: 24,
    seatingCapacity: 50,
    image: "https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&w=800&q=80",
    amenities: ["Indoor Air-Conditioned", "Outdoor Patio", "Board Games", "Pet Friendly Area"],
    directionsUrl: "https://maps.google.com/?q=Indiranagar+Bangalore",
    mapQuery: "Indiranagar, Bengaluru"
  },
  {
    id: 'bandra-kitchen',
    name: "Bandra West Bistro & Cloud Hub",
    area: "Pali Hill, Bandra West",
    city: "Mumbai",
    address: "Shop 4, Silver Beach Arcade, Near Carter Road, Bandra West, Mumbai, Maharashtra 400050",
    landmark: "Next to Carter's Promenade",
    phone: "+91 98200 66140",
    email: "mumbai@devmomos.com",
    openingHours: "12:00 PM – 1:00 AM Late Night (Mon-Sun)",
    closingTimeHour: 1,
    seatingCapacity: 40,
    image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80",
    amenities: ["Late Night Delivery", "Chef's Tasting Counter", "Sea Breeze Seating"],
    directionsUrl: "https://maps.google.com/?q=Bandra+West+Mumbai",
    mapQuery: "Bandra West, Mumbai"
  },
  {
    id: 'koregaon-express',
    name: "Koregaon Park Street Kitchen",
    area: "Lane 6, Koregaon Park",
    city: "Pune",
    address: "Liberty Arcade, North Main Rd, Koregaon Park, Pune, Maharashtra 411001",
    landmark: "Near Osho Ashram",
    phone: "+91 98900 33120",
    email: "pune@devmomos.com",
    openingHours: "11:30 AM – 11:30 PM (Mon-Sun)",
    closingTimeHour: 23,
    seatingCapacity: 35,
    image: "https://images.unsplash.com/photo-1578474846511-04ba529f0b88?auto=format&fit=crop&w=800&q=80",
    amenities: ["Garden Seating", "Live Music Weekends", "Direct Takeaway Counter"],
    directionsUrl: "https://maps.google.com/?q=Koregaon+Park+Pune",
    mapQuery: "Koregaon Park, Pune"
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'g1',
    title: 'Translucent Steamed Momos in Emerald Ceramic Glaze',
    category: 'Dishes',
    image: 'https://images.unsplash.com/photo-1496116218417-1a781b1c416c?auto=format&fit=crop&w=1200&q=85',
    caption: 'Paper-thin delicate wrappers filled with minced chicken thigh & mountain herbs, resting in handcrafted jade ceramic with fresh scallion oil.'
  },
  {
    id: 'g2',
    title: 'Tongs Dipping Delhi-Style Kurkure Momo',
    category: 'Dishes',
    image: 'https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&w=1200&q=85',
    caption: 'Golden panko & spiced cornflake crust lifted straight from the fryer, plunged into our fiery red garlic devil dip.'
  },
  {
    id: 'g3',
    title: 'Charcoal Tandoor Momo Skewers with Charred Lemon',
    category: 'Kitchen Behind The Scenes',
    image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=1200&q=85',
    caption: 'Skewered dumplings steeped in Kashmiri chili marinade roasted over glowing hard lump charcoal in our traditional clay tandoor.'
  },
  {
    id: 'g4',
    title: 'Spoon Drizzling 3-Chili Garlic Devil Chutney',
    category: 'Kitchen Behind The Scenes',
    image: 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=1200&q=85',
    caption: 'Slow-simmered Dalle Khursani chili oil and roasted garlic paste ladled piping hot over freshly steamed dumplings.'
  },
  {
    id: 'g5',
    title: 'Smoking Cast-Iron Momo Sizzler on Dark Teak',
    category: 'Sizzlers',
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1200&q=85',
    caption: 'Sizzling hot platter with garlic noodles, shredded cabbage, crunchy kurkure momos, and smoking pepper reduction sauce.'
  },
  {
    id: 'g6',
    title: 'Tibetan Mokthuk Broth in Artisan Pottery',
    category: 'Dishes',
    image: 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=1200&q=85',
    caption: 'Eight-hour bone broth infused with star anise, bok choy, and five juicy steamed momos served in a deep cobalt bowl.'
  },
  {
    id: 'g7',
    title: 'Creamy Afghan Malai Momos on Mustard Terracotta',
    category: 'Dishes',
    image: 'https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&w=1200&q=85',
    caption: 'Cashew cream, green cardamom, and toasted kasuri methi glaze lightly charred under open fire on a warm ochre plate.'
  },
  {
    id: 'g8',
    title: 'Grand 16-Piece Tasting Sampler on Live-Edge Olive Wood',
    category: 'Sizzlers',
    image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1200&q=85',
    caption: 'An editorial spread featuring Steamed, Kurkure, Charcoal, and Schezwan momos accompanied by four signature sauce ramekins.'
  },
  {
    id: 'g9',
    title: 'Belgian Dark Chocolate Molten Lava Momos',
    category: 'Dishes',
    image: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=1200&q=85',
    caption: 'Warm 70% dark cocoa ganache bursting through a cinnamon-dusted wrapper in an artisan terracotta bowl.'
  },
  {
    id: 'g10',
    title: 'Master Artisan Hand-Pinched 18 Pleats at Dawn',
    category: 'Kitchen Behind The Scenes',
    image: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=1200&q=85',
    caption: 'Our chef hand-rolling translucent 0.8mm dough discs and pinching precise airtight pleats every morning at 6:00 AM.'
  },
  {
    id: 'g11',
    title: 'Cozy Chiaroscuro Dining Room & Neon Mood',
    category: 'Ambience',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=85',
    caption: 'Warm polished wood tables, low pendant lighting, and relaxed lounge ambiance at our Connaught Place Flagship.'
  },
  {
    id: 'g12',
    title: 'Spicy Masala Guava Fizz with Red Chili Rim',
    category: 'Dishes',
    image: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=1200&q=85',
    caption: 'Cold sparkling guava nectar served in highball crystal with a spicy red rock-salt and Kashmiri chili rim.'
  }
];

export const FAQ_ITEMS: FaqItem[] = [
  {
    id: 'f1',
    category: 'Orders & Delivery',
    question: 'What is your delivery radius and average dispatch time?',
    answer: 'We deliver up to 8 km from any of our 14 kitchen hubs. Our average kitchen prep and hot dispatch time is 15-20 minutes, with average delivery completed within 28-35 minutes in thermal-insulated food bags.'
  },
  {
    id: 'f2',
    category: 'Food & Ingredients',
    question: 'Are your momos prepared fresh daily or pre-frozen?',
    answer: '100% freshly rolled and hand-folded every single morning! We never use pre-frozen factory batches or artificial dough softeners. Our meats are fresh grade-A and vegetables are locally sourced daily.'
  },
  {
    id: 'f3',
    category: 'Food & Ingredients',
    question: 'How spicy is the Devil Chutney, and can I get milder sauces?',
    answer: 'Our Red Garlic Devil Chutney is a spicy 3-chili house secret! However, all orders automatically come with our soothing Mayo Mint Dip and Mild Roasted Sesame-Peanut dip so you can balance the heat to your preference.'
  },
  {
    id: 'f4',
    category: 'Table Booking',
    question: 'Do I need to pay an advance reservation fee for table booking?',
    answer: 'No! Table reservations on our website are completely FREE. Once you submit the booking form, you will receive an instant WhatsApp confirmation code. We hold your table for up to 15 minutes past your chosen time.'
  },
  {
    id: 'f5',
    category: 'Catering',
    question: 'Do you cater for office parties, birthdays, or weddings with live counters?',
    answer: 'Yes! We provide live Steamed, Kurkure, and Tandoori Momo counters for events from 30 to 1,000+ guests with custom chef stations and signature dip bars. Check our Catering box or reach out via WhatsApp.'
  },
  {
    id: 'f6',
    category: 'Orders & Delivery',
    question: 'Why is it better to order directly on this website instead of third-party apps?',
    answer: 'Ordering directly gives you 15-20% lower base prices (0% aggregator commission markup), priority kitchen dispatch, and free bonus dip jars with coupon FIRSTMOMO!'
  }
];
