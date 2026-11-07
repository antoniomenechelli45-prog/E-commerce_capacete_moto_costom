export type ProductCategory = 'all' | 'full-face' | 'open-face' | 'cafe-racer' | 'custom-cruiser';

export interface ProductAngle {
  id: string;
  label: string;
  image: string;
  type: 'front' | 'side' | 'three-quarter' | 'interior' | 'action';
}

export interface ProductSpec {
  shell: string;
  liner: string;
  closure: string;
  certification: string;
  weight: string;
  visor: string;
}

export interface ProductSize {
  size: 'XS' | 'S' | 'M' | 'L' | 'XL' | 'XXL';
  circumference: string;
  available: boolean;
}

export interface ProductColor {
  name: string;
  hex: string;
  borderHex?: string;
  badge?: string;
}

export interface Review {
  id: string;
  author: string;
  motorcycle: string;
  rating: number;
  date: string;
  title: string;
  comment: string;
  verified: boolean;
}

export interface Product {
  id: string;
  name: string;
  code: string;
  subtitle: string;
  category: 'full-face' | 'open-face' | 'cafe-racer' | 'custom-cruiser';
  categoryLabel: string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviewsCount: number;
  featured?: boolean;
  badge?: string;
  primaryImage: string;
  gallery: ProductAngle[];
  description: string;
  story: string;
  highlights: string[];
  specs: ProductSpec;
  sizes: ProductSize[];
  colors: ProductColor[];
  inStock: boolean;
  reviews: Review[];
}

export interface CartItem {
  id: string;
  productId: string;
  product: Product;
  size: string;
  color: string;
  quantity: number;
  price: number;
}

export interface OrderConfirmation {
  orderNumber: string;
  customerName: string;
  email: string;
  items: CartItem[];
  total: number;
  discount: number;
  paymentMethod: string;
  shippingAddress: string;
  estimatedDelivery: string;
}
