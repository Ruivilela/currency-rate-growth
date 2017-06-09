import React, { Component } from 'react';
import getCurrency from './../../../data/currency/action';
import filterUpdate from './../../../state/filters/action';
import { getLastXDays } from './../../../data/currency/api';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'

export class FilterCurrency extends Component {
  constructor(props) {
   super(props);

   this.state = {
     base_currency:"EUR",
     last_x_days: 7
   };

   this.handleChange = this.handleChange.bind(this);
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
    let days = !this.props.filter ?
      this.state.last_x_days : this.props.filter.last_x_days;

    this.setState({
      last_x_days:days,
      base_currency:event.target.value
    }); // TODO CHANGE to an observable 

    getLastXDays(days, event.target.value).then((result)=> {
      this.props.actions.currency(result);
    })

    this.props.actions.filterUpdate({
      last_x_days:days,
      base_currency:event.target.value
    });
  }
}

const filterStyle = {
  display:"inline",
  marginTop:"2%",
  marginLeft:"5%",
  width:"13%"
}

function mapStateToProps(state){
  return {
    filter: state.filter
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(
      {
        currency: getCurrency,
        filterUpdate: filterUpdate
      },
      dispatch
    )
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(FilterCurrency);
