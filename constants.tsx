import React from 'react';
import { ProductUsage, Nutrient } from './types';
import { 
  GlassWater, 
  Salad, 
  Apple, 
  Martini, 
  Utensils, 
  Sandwich,
  WheatOff,
  Award,
  Leaf
} from 'lucide-react';

export const WHATSAPP_NUMBER = "919876543210"; 
export const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=Hi%20HAVESOME,%20I%20am%20interested%20in%20your%20products.`;

export const USAGE_IDEAS: ProductUsage[] = [
  { id: '1', title: 'Buttermilk (Chaas)', description: 'The classic refresher.', iconName: 'GlassWater' },
  { id: '2', title: 'Lemon Water', description: 'Zesty twist to hydration.', iconName: 'Martini' },
  { id: '3', title: 'Fresh Salads', description: 'Sprinkle for instant flavor.', iconName: 'Salad' },
  { id: '4', title: 'Cut Fruits', description: 'Enhances natural sweetness.', iconName: 'Apple' },
  { id: '5', title: 'Nimbu Soda', description: 'Fizz with a spicy kick.', iconName: 'GlassWater' },
  { id: '6', title: 'Raita', description: 'Perfect seasoning companion.', iconName: 'Utensils' },
  { id: '7', title: 'Chaat Items', description: 'Authentic street food taste.', iconName: 'Utensils' },
  { id: '8', title: 'Dips', description: 'Mix with yogurt or mayo.', iconName: 'Sandwich' },
];

export const NUTRITION_DATA: Nutrient[] = [
  { name: 'Carbohydrates', value: 45, unit: 'g', fill: '#d97706' }, // Brand Gold
  { name: 'Sodium', value: 25, unit: 'g', fill: '#166534' }, // Brand Green
  { name: 'Protein', value: 5, unit: 'g', fill: '#84cc16' },
  { name: 'Fat', value: 2, unit: 'g', fill: '#fcd34d' },
];

export const INGREDIENTS_LIST = [
  "Black Salt",
  "Cumin Seeds",
  "Dry Mango Powder",
  "Black Pepper",
  "Mint Leaves",
  "Asafetida",
  "Rock Salt"
];

// Helper to render icons dynamically
export const getIcon = (name: string, className?: string) => {
  const props = { className: className || "w-6 h-6" };
  switch (name) {
    case 'GlassWater': return <GlassWater {...props} />;
    case 'Salad': return <Salad {...props} />;
    case 'Apple': return <Apple {...props} />;
    case 'Martini': return <Martini {...props} />;
    case 'Utensils': return <Utensils {...props} />;
    case 'Sandwich': return <Sandwich {...props} />;
    default: return <Leaf {...props} />;
  }
};

export const CERTIFICATIONS = [
  { name: "Gluten Free", icon: <WheatOff className="w-6 h-6 text-brand-green" /> },
  { name: "ISO Certified", icon: <Award className="w-6 h-6 text-brand-green" /> },
  { name: "100% Natural", icon: <Leaf className="w-6 h-6 text-brand-green" /> },
];