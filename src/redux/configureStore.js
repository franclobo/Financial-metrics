import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import reducer from './cryptocurrency';

const RootReducer = combineReducers({
  cryptos: reducer,
});

const store = createStore(RootReducer, applyMiddleware(thunk, logger));

export default store;
