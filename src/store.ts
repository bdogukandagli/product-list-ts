import { createStore, applyMiddleware, compose } from 'redux';
import { rootReducer } from './reducers/index';
import createSagaMiddleware from 'redux-saga';
import productSaga from './reducers/product.sagas';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(rootReducer, compose(applyMiddleware(sagaMiddleware)));

export default store;

sagaMiddleware.run(productSaga);
