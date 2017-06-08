import React , {Component} from 'react';
import {connect} from 'react-redux';
import Filter from './components/filter';
import Graph  from './components/graph';
import getCurrency from './../../data/currency/action';

export default class Dashboard extends Component {
  render(){
    return(
      <div>
        <Filter />
        <Graph />
      </div>
    )
  }
}
