import {createStore, applyMiddleware, combineReducers} from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import promise from 'redux-promise';
import getCurrency from './data/currency/action';
import {getLastXDays} from './data/currency/api';

// reducers import
import currencyReducer from './data/currency/reducer';
import filterReducer from './state/filters/reducer';

const allReducers = combineReducers({
  currency: currencyReducer,
  filter: filterReducer
})

const middleware = applyMiddleware(thunk, promise, logger) //logger)
const store = createStore(allReducers,middleware)   //window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;
