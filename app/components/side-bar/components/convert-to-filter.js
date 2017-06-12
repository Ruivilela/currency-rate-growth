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
      <div>
        <h4 style={convertToStyle.text}> Convert to: </h4>
        <select
          className="form-control"
          style={convertToStyle}
          onChange={this.handleChange}
        >
          <option defaultValue value="USD"> USD </option>
          <option value="GBP"> GBP </option>
          <option value="EUR"> EUR </option>
        </select>
      </div>
    )
  }

  handleChange(event){
    // const filter = {};
    // TODO add more than one currency
    // filter[target_value] = {
    //   convert_to: event.target.value
    // }
    this.props.actions.convertToFilterUpdate(event.target.value);
  }
}

const convertToStyle = {
  text:{
    marginLeft:"2%"
  },
  marginLeft:"2%",
  display:"inline",
  width:"20%"
}

export default connect(mapStateToProps, mapDispatchToProps)(ConvertToFilter);
