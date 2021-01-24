import { IFilter, IProduct } from '../utils/interfaces';

export const GET_ALL_PRODUCTS_START = 'GET_ALL_PRODUCTS_START';
export const GET_ALL_PRODUCTS_SUCCESS = 'GET_ALL_PRODUCTS_SUCCESS';
export const GET_ALL_PRODUCTS_ERROR = 'GET_ALL_PRODUCTS_ERROR';
export const GET_FILTERED_PRODUCTS_START = 'GET_FILTERED_PRODUCTS_START';
export const GET_FILTERED_PRODUCTS_SUCCESS = 'GET_FILTERED_PRODUCTS_SUCCESS';
export const GET_FILTERED_PRODUCTS_ERROR = 'GET_FILTERED_PRODUCTS_ERROR';
export const GET_PRODUCT_FILTERS_START = 'GET_PRODUCT_FILTERS_START';
export const GET_PRODUCT_FILTERS_SUCCESS = 'GET_PRODUCT_FILTERS_SUCCESS';
export const GET_PRODUCT_FILTERS_ERROR = 'GET_PRODUCT_FILTERS_ERROR';

export interface GetAllProductsStart {
  type: typeof GET_ALL_PRODUCTS_START;
}

export interface GetAllProductsSuccess {
  type: typeof GET_ALL_PRODUCTS_SUCCESS;
  payload: IProduct[];
}

export interface GetAllProductsError {
  type: typeof GET_ALL_PRODUCTS_ERROR;
  payload: string;
}

export interface GetFilteredProductsStart {
  type: typeof GET_FILTERED_PRODUCTS_START;
  payload: {
    sizes: string[];
    categories: string[];
    colors: string[];
    prices: number[];
  };
}

export interface GetFilteredProductsSuccess {
  type: typeof GET_FILTERED_PRODUCTS_SUCCESS;
  payload: IProduct[];
}

export interface GetFilteredProductsError {
  type: typeof GET_FILTERED_PRODUCTS_ERROR;
  payload: string;
}

export interface ProductState {
  products: IProduct[];
  filters: IFilter;
  isLoading: boolean;
  error: string;
}

export interface GetProductFiltersStart {
  type: typeof GET_PRODUCT_FILTERS_START;
}

export interface GetProductFiltersSuccess {
  type: typeof GET_PRODUCT_FILTERS_SUCCESS;
  payload: IFilter;
}

export interface GetProductFiltersError {
  type: typeof GET_PRODUCT_FILTERS_ERROR;
  payload: string;
}

export type ProductActionTypes =
  | GetAllProductsError
  | GetAllProductsStart
  | GetAllProductsSuccess
  | GetFilteredProductsError
  | GetFilteredProductsStart
  | GetFilteredProductsSuccess
  | GetProductFiltersStart
  | GetProductFiltersSuccess
  | GetProductFiltersError;
