import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import store from './../store';
// import components
import Dashboard from './dashboard/index';

const App = () => {
  return(<Dashboard />)
}

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, document.getElementById('app'));
