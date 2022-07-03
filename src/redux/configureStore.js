import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import { legacy_createStore as createStore, applyMiddleware } from 'redux';
import { persistStore } from 'redux-persist';
import rootReducer from './reducers/root.reducer';
import rootSaga from './sagas/root.saga';

let middlewares = [];
const sagaMiddleware = createSagaMiddleware();

middlewares = [...middlewares, logger, sagaMiddleware];

const middleware = applyMiddleware(...middlewares);

export const store = createStore(rootReducer, middleware);
export const persistor = persistStore(store);

sagaMiddleware.run(rootSaga);
