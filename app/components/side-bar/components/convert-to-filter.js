import React from 'react';
import { connect } from 'react-redux';
import Filter, { mapStateToProps, mapDispatchToProps } from './../../filter';
import { getLastXDays } from './../../../data/currency/api';

export class ConvertToFilter extends Filter {
  constructor(props){
    super(props)
  }
  render(){
    return(
      <select
        className="form-control"
        style={convertToStyle}
        onChange={this.handleChange}
      >
        <option defaultValue value="USD"> USD </option>
        <option value="GBP"> GBP </option>
        <option value="EUR"> EUR </option>
      </select>
    )
  }

  handleChange(event){
    const filter = {};
    const target_value = event.target.parentNode.attributes.value.value;

    filter[target_value] = {
      convert_to: event.target.value
    }

    this.props.actions.convertToFilterUpdate(filter);
  }
}

const convertToStyle = {
  marginLeft:"2%",
  display:"inline",
  width:"10%"
}

export default connect(mapStateToProps, mapDispatchToProps)(ConvertToFilter);
