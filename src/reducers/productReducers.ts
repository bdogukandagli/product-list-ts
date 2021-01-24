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
  ProductState,
} from '../actions/types';
import { IProduct, IFilter } from '../utils/interfaces';

const initialState: ProductState = {
  products: [],
  filters: {
    colors: [],
    categories: [],
    sizes: [],
    priceInfo: { minPrice: 0, minPriceText: '', maxPrice: 0, maxPriceText: '' },
  },
  cartProducts: [],
  isLoading: false,
  error: '',
};

export function productReducer(
  state = initialState,
  action: ProductActionTypes
): ProductState {
  switch (action.type) {
    case GET_ALL_PRODUCTS_START:
      return {
        ...state,
        isLoading: true,
      };
    case GET_ALL_PRODUCTS_SUCCESS:
      return {
        ...state,
        products: [...state.products, ...action.payload],
        isLoading: false,
      };
    case GET_ALL_PRODUCTS_ERROR:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    case GET_FILTERED_PRODUCTS_START:
      return {
        ...state,
        isLoading: true,
      };
    case GET_FILTERED_PRODUCTS_SUCCESS:
      return {
        ...state,
        products: [...action.payload],
        isLoading: false,
      };
    case GET_FILTERED_PRODUCTS_ERROR:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    case GET_PRODUCT_FILTERS_START:
      return {
        ...state,
        isLoading: true,
      };
    case GET_PRODUCT_FILTERS_SUCCESS:
      return {
        ...state,
        filters: { ...state.filters, ...action.payload },
        isLoading: false,
      };
    case GET_PRODUCT_FILTERS_ERROR:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    case ADD_TO_CART_START:
      return {
        ...state,
        isLoading: true,
      };
    case ADD_TO_CART_SUCCESS:
      return {
        ...state,
        cartProducts: [...state.cartProducts, ...action.payload],
        isLoading: false,
      };
    case ADD_TO_CART_ERROR:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    default:
      return state;
  }
}
