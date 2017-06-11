import { createStore, applyMiddleware, combineReducers } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import promise from 'redux-promise';
import initialState from './state/initial-state/action';

// reducers import
import initialStateReducer from './state/initial-state/reducer';
import currencyReducer from './data/currency/reducer';
import filterReducer from './state/filters/reducer';
import addCurrencyReducer from './state/add-currency/reducer';

const allReducers = combineReducers({
  initialState: initialStateReducer,
  currency: currencyReducer,
  filter: filterReducer,
  increment_currency: addCurrencyReducer
})

const middleware = applyMiddleware(thunk, promise, logger) //logger)
const store = createStore(allReducers,middleware)   //window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

store.dispatch(initialState())

export default store;
