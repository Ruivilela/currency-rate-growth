import {createStore, applyMiddleware, combineReducers} from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import promise from 'redux-promise';
import getCurrency from './data/currency/action';
import {getLastXDays} from './data/currency/api';
// add reducers
import currencyReducer from './data/currency/reducer'

const allReducers = combineReducers({
  currency: currencyReducer
})

const middleware = applyMiddleware(thunk, promise, logger)
const store = createStore(allReducers,middleware)   //window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;
