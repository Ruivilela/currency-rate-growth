import React , { Component } from 'react';
import { bindActionCreators } from 'redux';
import getCurrency from './../data/currency/action';
import filterUpdate from './../state/filters/action';

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
