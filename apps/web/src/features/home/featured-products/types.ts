export interface Product {
  id: number;
  name: string;
  slug: string;
  image: string;
  price: number;
  originalPrice: number;
  rating: number;
  reviews: number;
  badge?: string;
}