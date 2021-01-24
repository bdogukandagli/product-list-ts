import {
  all,
  AllEffect,
  fork,
  ForkEffect,
  put,
  PutEffect,
  takeLatest,
  throttle,
} from 'redux-saga/effects';
import { productData, filterData } from '../data/data';
import {
  GET_ALL_PRODUCTS_START,
  ProductActionTypes,
  GET_PRODUCT_FILTERS_START,
  GET_FILTERED_PRODUCTS_START,
  GetFilteredProductsStart,
  AddToCartStart,
  ADD_TO_CART_START,
} from '../actions/types';
import {
  getAllProductsSuccess,
  getAllProductsError,
  getProductFiltersSuccess,
  getProductFiltersError,
  getFilteredProductsError,
  getFilteredProductsSuccess,
  addToCartSuccess,
  addToCartError,
} from '../actions/productAction';

export function* handleFetchAll(): Generator<PutEffect<ProductActionTypes>> {
  try {
    yield put(getAllProductsSuccess(productData));
  } catch (err) {
    if (err instanceof Error && err.stack) {
      yield put(getAllProductsError(err.stack));
    } else {
      yield put(getAllProductsError('Network Error.'));
    }
  }
}

function* watchGetAllRequest() {
  yield takeLatest(GET_ALL_PRODUCTS_START, handleFetchAll);
}

export function* handleFetchFilters(): Generator<PutEffect<ProductActionTypes>> {
  try {
    yield put(getProductFiltersSuccess(filterData));
  } catch (err) {
    if (err instanceof Error && err.stack) {
      yield put(getProductFiltersError(err.stack));
    } else {
      yield put(getProductFiltersError('Network Error.'));
    }
  }
}

function* watchGetFiltersRequest() {
  yield takeLatest(GET_PRODUCT_FILTERS_START, handleFetchFilters);
}

export function* handleFetchFiltered(
  action: GetFilteredProductsStart
): Generator<PutEffect<ProductActionTypes>> {
  try {
    let data = productData;

    const colors = action.payload.colors;
    const sizes = action.payload.sizes;
    const categories = action.payload.categories;
    const prices = action.payload.prices;

    if (colors.length > 0) {
      data = productData.filter(function (item) {
        return colors.indexOf(item.color) !== -1;
      });
    }

    if (sizes.length > 0) {
      data = data.filter(function (item) {
        return sizes.indexOf(item.size) !== -1;
      });
    }

    if (categories.length > 0) {
      data = data.filter(function (item) {
        return categories.indexOf(item.category) !== -1;
      });
    }

    if (prices.length > 0) {
      data = data.filter(function (item) {
        return prices[0] <= item.price && item.price <= prices[1];
      });
    }

    yield put(getFilteredProductsSuccess(data));
  } catch (err) {
    if (err instanceof Error && err.stack) {
      yield put(getFilteredProductsError(err.stack));
    } else {
      yield put(getFilteredProductsError('Network Error.'));
    }
  }
}

function* watchGetFilteredRequest() {
  yield throttle(500, GET_FILTERED_PRODUCTS_START, handleFetchFiltered);
}

export function* addToCartRequest(
  action: AddToCartStart
): Generator<PutEffect<ProductActionTypes>> {
  try {
    yield put(addToCartSuccess(action.payload.cartProducts));
  } catch (err) {
    if (err instanceof Error && err.stack) {
      yield put(addToCartError(err.stack));
    } else {
      yield put(addToCartError('Network Error.'));
    }
  }
}

function* watchAddToCardRequest() {
  yield throttle(500, ADD_TO_CART_START, addToCartRequest);
}

function* productSaga(): Generator<AllEffect<ForkEffect>> {
  yield all([
    fork(watchGetAllRequest),
    fork(watchGetFiltersRequest),
    fork(watchGetFilteredRequest),
    fork(watchAddToCardRequest),
  ]);
}

export default productSaga;
