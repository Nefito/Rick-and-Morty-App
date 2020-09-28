import { createBrowserHistory } from 'history';
import { applyMiddleware, compose, createStore } from 'redux';

import middleware from './middleware';
import rootReducer from './rootReducer';

export const history = createBrowserHistory();

const middlewares = middleware(history);

const rootReducers = rootReducer(history);

const composeEnhancers =
  (process.env.NODE_ENV === 'development' && window && (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const store = createStore(rootReducers, composeEnhancers(applyMiddleware(...middlewares)));

export default store; // connect later
export * from './domains';
export * from './types';
