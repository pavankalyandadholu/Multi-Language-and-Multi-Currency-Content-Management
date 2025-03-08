export type Language = {
  code: string;
  name: string;
  dir: 'ltr' | 'rtl';
};

export type Currency = {
  code: string;
  symbol: string;
  position: 'before' | 'after';
};

export type Product = {
  id: string;
  name: Record<string, string>;
  description: Record<string, string>;
  price: number;
  image: string;
  inventory: number;
};

export type Theme = 'light' | 'dark';