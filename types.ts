
export interface Product {
  id: string;
  name: string;
  category: string;
  image: string;
  description: string;
  features: string[];
}

export interface NewsItem {
  id: string;
  title: string;
  date: string;
  summary: string;
  image: string;
}

export enum Section {
  HOME = 'home',
  ABOUT = 'about',
  PRODUCTS = 'products',
  NEWS = 'news',
  CONTACT = 'contact'
}
