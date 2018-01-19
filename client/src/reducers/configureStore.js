import { combineReducers, createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { routerReducer, routerMiddleware } from 'react-router-redux';

import history from '../services/History';
import userReducer from './user';
import orderReducer from './order';
import wishlistReducer from './wishlist';
import addressReducer from './address';

const loggerMiddleware = createLogger();
const routerHistoryMiddleware = routerMiddleware(history);

const reducers = combineReducers({
  routing: routerReducer,
  user: userReducer,
  order: orderReducer,
  wishlist: wishlistReducer,
  address: addressReducer
});

const middlewares = applyMiddleware(
  thunkMiddleware,
  loggerMiddleware,
  routerHistoryMiddleware
);

const configureStore =
  createStore(
    reducers,
    composeWithDevTools(
      middlewares
    )
  );

export default configureStore;
