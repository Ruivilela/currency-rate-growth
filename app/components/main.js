import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import store from './../store';
// import components
import Dashboard from './dashboard/index';
import SideBar from './side-bar/index';


const App = () => {
  return(
    <div>
      <SideBar />
      <Dashboard />
    </div>
  )
}

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, document.getElementById('app'));
