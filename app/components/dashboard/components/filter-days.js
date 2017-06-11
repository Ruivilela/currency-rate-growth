import React, { Component } from 'react';
import { getLastXDays } from './../../../data/currency/api';
import Filter , { mapDispatchToProps, mapStateToProps } from './../../filter';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

export class FilterDays extends Filter {
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
        <option defaultValue value={7}> 1 week </option>
        <option value={15}> 2 weeks </option>
        <option value={30}> 1 month </option>
      </select>
    )
  }

  handleChange(event) {
    let base_currency = !this.props.filter ?
      this.props.initialState.base_currency : this.props.filter.base_currency;

    let convert_to = !this.props.filter ?
      this.props.initialState.convert_to : this.props.filter.convert_to

    getLastXDays(parseInt(event.target.value), convert_to , base_currency)
      .then((result)=> this.props.actions.currency(result));

    this.props.actions.filterUpdate({
      convert_to: convert_to,
      base_currency: base_currency,
      last_x_days: event.target.value
    });
  }
}

const filterStyle = {
  display:"inline",
  marginLeft:"10%",
  width:"35%"
}

export default connect(mapStateToProps, mapDispatchToProps)(FilterDays);
