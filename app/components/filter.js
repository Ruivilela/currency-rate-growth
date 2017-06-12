import React , { Component } from 'react';
import { bindActionCreators } from 'redux';
// Actions
import getCurrency from './../data/currency/action';
import filterUpdate from './../state/filters/action';
import convertToFilterUpdate from './../state/convert-to-filter/action';

export default class Filter extends Component {
  constructor(props){
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }
  render(){
    return( <div> </div>);
  }
}

export const mapStateToProps = (state) => {
  return {
    initialState: state.initialState,
    filter: state.filter,
    convert_to_filter: state.convert_to_filter
  };
}

export const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(
      {
        currency: getCurrency,
        filterUpdate: filterUpdate,
        convertToFilterUpdate: convertToFilterUpdate
      },
      dispatch
    )
  }
}
