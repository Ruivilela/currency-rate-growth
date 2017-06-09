import React, { Component } from 'react';
import { getLastXDays } from './../../../data/currency/api';
import getCurrency from './../../../data/currency/action';
import filterUpdate from './../../../state/filters/action';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

export class FilterDays extends Component {
  constructor(props) {
   super(props);

   this.state = {
     base_currency:"EUR",
     last_x_days: 7
   }

   this.handleChange = this.handleChange.bind(this);
 }

  render(){
    return(
      <select
        onChange={this.handleChange}
        className="form-control"
        style={filterStyle}
      >
        <option defaultValue value={7}> 1 week </option>
        <option value={30}> 1 month </option>
        <option value={90}> 3 months </option>
      </select>
    )
  }

  componentWillMount(){
    getLastXDays(this.state.last_x_days, this.state.base_currency).then((result)=> {
      this.props.actions.currency(result);
    })
  }

  handleChange(event) {
    let base_currency = !this.props.filter ?
      this.state.base_currency : this.props.filter.base_currency;

    this.setState({
      last_x_days: event.target.value,
      base_currency: base_currency
    }); // TODO CHANGE to an observable

    getLastXDays(parseInt(event.target.value), base_currency).then((result)=> {
      this.props.actions.currency(result);
    })

    this.props.actions.filterUpdate({
      base_currency: base_currency,
      last_x_days: event.target.value
    });
  }
}

const filterStyle = {
  display:"inline",
  marginTop:"2%",
  marginLeft:"35%",
  width:"13%"
}

function mapStateToProps(state){
  return {
    filter: state.filter
  };
}

function mapDispatchToProps(dispatch) {
  return { actions:
    bindActionCreators(
      {
        currency: getCurrency,
        filterUpdate: filterUpdate
      },
      dispatch
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(FilterDays);
