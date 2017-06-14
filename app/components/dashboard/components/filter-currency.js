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

  handleChange(event){
    this.props.actions.filterUpdate({base_currency:event.target.value, should_update:true});
  }
}

const filterStyle = {
  display:"inline",
  width:"35%",
  marginLeft:"20%",
}

export default connect(mapStateToProps,mapDispatchToProps)(FilterCurrency);
