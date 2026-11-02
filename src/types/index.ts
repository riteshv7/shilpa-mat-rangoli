export type SpaceCategory = 
  | 'all'
  | 'entrance'
  | 'staircase'
  | 'mandir-chowki'
  | 'living-center'
  | 'corridor-runner';

export interface Product {
  id: string;
  code: string;
  name: string;
  marathiHindiTitle?: string;
  category: SpaceCategory;
  categoryName: string;
  image: string;
  additionalImages?: string[];
  dimensions: string;
  material: string;
  tagline: string;
  description: string;
  idealFor: string[];
  features: string[];
  badge?: 'Bestseller' | 'Diwali Special' | 'Handmade' | 'Combo Set' | 'New Design';
  estimatedPriceRange: string;
  inStock: boolean;
}

export interface Review {
  id: string;
  author: string;
  location: string;
  occasion: string;
  rating: number;
  comment: string;
  productName: string;
}
