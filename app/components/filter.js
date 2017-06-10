import React , { Component } from 'react';
import { bindActionCreators } from 'redux';

export class Filter extends Component {
  constructor(props){
    super(props);
    this.handleChange = this.handleChange.bind(this);

    this.state = {
      convert_to:"USD",
      base_currency:"EUR",
      last_x_days: 7,
    }
  }
  render(){
    return( <div> </div>);
  }
}

export const mapStateToProps = (state) => {
  return {
    filter: state.filter
  };
}

export const mapDispatchToProps = (dispatch) => {
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
