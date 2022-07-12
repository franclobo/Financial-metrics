import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import HomeReducer from './Home/home';
import DetailsReducer from './Details/details';

const RootReducer = combineReducers({
  home: HomeReducer,
  details: DetailsReducer,
});

const store = createStore(RootReducer, applyMiddleware(thunk, logger));

export default store;
