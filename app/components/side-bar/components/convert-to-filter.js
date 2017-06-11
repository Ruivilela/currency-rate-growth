import React from 'react';
import { connect } from 'react-redux';
import Filter, { mapStateToProps, mapDispatchToProps } from './../../filter';

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
    let base_currency = !this.props.filter ?
      this.state.base_currency : this.props.filter.base_currency;

    let last_x_days = !this.props.filter ?
      this.state.last_x_days : this.props.filter.last_x_days;

      this.props.actions.filterUpdate({
        convert_to: event.target.value,
        base_currency: base_currency,
        last_x_days: last_x_days
      });
  }
}

const convertToStyle = {
  marginLeft:"2%",
  display:"inline",
  width:"10%"
}

export default connect(mapStateToProps, mapDispatchToProps)(ConvertToFilter);
