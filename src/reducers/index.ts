import { combineReducers } from 'redux';
import { productReducer } from './productReducers';

export const rootReducer = combineReducers({
  products: productReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
