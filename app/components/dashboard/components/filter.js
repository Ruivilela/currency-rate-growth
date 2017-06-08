import React, {Component} from 'react';
import store from './../../../store';
import {getLastXDays} from './../../../data/currency/api';
import getCurrency from './../../../data/currency/action';

export default class Filter extends Component {
  render(){
    
    getLastXDays(7,"USD").then((result)=> {
      store.dispatch(getCurrency(result));
    })

    return(
      <select
        onChange={this.handleChange}
        className="form-control"
        style={filterStyle}
      >
        <option defaultValue value="1-week"> 1 week </option>
        <option value="1-month"> 1 month </option>
        <option value="3-months"> 3 months </option>
      </select>
    )
  }

  handleChange(event) {
    switch(event.target.value){
      case "1-week":
        getLastXDays(7,"USD").then((result)=> {
          store.dispatch(getCurrency(result));
        })
      case "1-month":
        getLastXDays(30,"USD").then((result)=> {
          store.dispatch(getCurrency(result));
        })
      case "3-months":
        getLastXDays(90,"USD").then((result)=> {
          store.dispatch(getCurrency(result));
        })
    }
  }
}

const filterStyle = {
  marginTop:"2%",
  marginLeft:"30%",
  width:"13%"
}
