export interface IProduct {
  id: number;
  name: string;
  price: number;
  photoUrl: string;
  size: string;
  color: string;
  category: string;
}

export interface IFilter {
  colors: IColor[];
  sizes: ISize[];
  categories: ICategory[];
  priceInfo: IPrice;
}

export interface IColor {
  id: number;
  text: string;
}

export interface ICategory {
  id: number;
  text: string;
}

export interface ISize {
  id: number;
  text: string;
}

export interface IPrice {
  minPrice: number;
  minPriceText: string;
  maxPrice: number;
  maxPriceText: string;
}
