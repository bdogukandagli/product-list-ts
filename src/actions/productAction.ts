import {
  GET_ALL_PRODUCTS_ERROR,
  GET_ALL_PRODUCTS_START,
  GET_ALL_PRODUCTS_SUCCESS,
  GET_FILTERED_PRODUCTS_ERROR,
  GET_FILTERED_PRODUCTS_START,
  GET_FILTERED_PRODUCTS_SUCCESS,
  GET_PRODUCT_FILTERS_ERROR,
  GET_PRODUCT_FILTERS_START,
  GET_PRODUCT_FILTERS_SUCCESS,
  ADD_TO_CART_ERROR,
  ADD_TO_CART_SUCCESS,
  ADD_TO_CART_START,
  ProductActionTypes,
} from './types';
import { IProduct, IFilter } from '../utils/interfaces';

export function getAllProductsStart(): ProductActionTypes {
  return {
    type: GET_ALL_PRODUCTS_START,
  };
}

export function getAllProductsSuccess(products: IProduct[]): ProductActionTypes {
  return {
    type: GET_ALL_PRODUCTS_SUCCESS,
    payload: products,
  };
}

export function getAllProductsError(error: string): ProductActionTypes {
  return {
    type: GET_ALL_PRODUCTS_ERROR,
    payload: error,
  };
}

export function getFilteredProductsStart(
  sizes: string[],
  categories: string[],
  colors: string[],
  prices: number[]
): ProductActionTypes {
  return {
    type: GET_FILTERED_PRODUCTS_START,
    payload: {
      sizes: sizes,
      categories: categories,
      colors: colors,
      prices: prices,
    },
  };
}

export function getFilteredProductsSuccess(products: IProduct[]): ProductActionTypes {
  return {
    type: GET_FILTERED_PRODUCTS_SUCCESS,
    payload: products,
  };
}

export function getFilteredProductsError(error: string): ProductActionTypes {
  return {
    type: GET_FILTERED_PRODUCTS_ERROR,
    payload: error,
  };
}

export function getProductFiltersStart(): ProductActionTypes {
  return {
    type: GET_PRODUCT_FILTERS_START,
  };
}

export function getProductFiltersSuccess(filters: IFilter): ProductActionTypes {
  return {
    type: GET_PRODUCT_FILTERS_SUCCESS,
    payload: filters,
  };
}

export function getProductFiltersError(error: string): ProductActionTypes {
  return {
    type: GET_PRODUCT_FILTERS_ERROR,
    payload: error,
  };
}

export function addToCartStart(cartProducts: IProduct[]): ProductActionTypes {
  return {
    type: ADD_TO_CART_START,
    payload: {
      cartProducts,
    },
  };
}

export function addToCartSuccess(cartProducts: IProduct[]): ProductActionTypes {
  return {
    type: ADD_TO_CART_SUCCESS,
    payload: cartProducts,
  };
}

export function addToCartError(error: string): ProductActionTypes {
  return {
    type: ADD_TO_CART_ERROR,
    payload: error,
  };
}
