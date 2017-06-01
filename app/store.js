import {createStore, applyMiddleware, combineReducers} from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
// add reducers
import currencyReducer from './data/currency/reducer'

const allReducers = combineReducers({
  currency: currencyReducer
})

const middleware = applyMiddleware(thunk, logger)
const store = createStore(allReducers, middleware)

store.dispatch((dispatch) => {
   dispatch({type: "initialState"})
});

export default store;
