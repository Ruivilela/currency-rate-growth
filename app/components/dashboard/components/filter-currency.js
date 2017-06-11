import React, { Component } from 'react';
import { getLastXDays } from './../../../data/currency/api';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'

import Filter , { mapDispatchToProps, mapStateToProps } from './../../filter';

class FilterCurrency extends Filter {
  constructor(props) {
   super(props);
  }

  render(){
    return(
      <select
        onChange={this.handleChange}
        className="form-control"
        style={filterStyle}
      >
        <option defaultValue value="EUR"> EUR </option>
        <option value="USD"> USD </option>
        <option value="GBP"> GBP </option>
      </select>
    )
  }

  componentWillMount(){
    if(this.props.initialState){
      getLastXDays(
        this.props.initialState.last_x_days,
        this.props.initialState.convert_to ,
        this.props.initialState.base_currency
      ).then((result)=> this.props.actions.currency(result))
    }
  }

  handleChange(event){
    let days = !this.props.filter ?
      this.props.initialState.last_x_days : this.props.filter.last_x_days;

    let convert_to = !this.props.filter ?
      this.props.initialState.convert_to : this.props.filter.convert_to;

    getLastXDays(days, convert_to ,event.target.value).then((result)=> {
      this.props.actions.currency(result);
    })

    this.props.actions.filterUpdate({
      last_x_days:days,
      base_currency:event.target.value,
      convert_to: convert_to
    });
  }
}

const filterStyle = {
  display:"inline",
  width:"35%",
  marginLeft:"20%",
}

export default connect(mapStateToProps,mapDispatchToProps)(FilterCurrency);
