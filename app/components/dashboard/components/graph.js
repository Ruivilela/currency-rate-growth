import React, {Component} from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux'
import getCurrency from './../../../data/currency/action';

export class Graph extends Component {
  render(){
    console.log('this.props.currency', this.props.currency)
    if(!this.props.currency){
      return(<div> "I am null" </div>)
    }
    if(this.props.currency){
      return(<div> {this.props.currency}</div>)
    }
  }
}

function mapStateToProps(state){
  return {
    currency: state.currency
  };
}

// function mapDispatchToProps(dispatch) {
//   return { actions: bindActionCreators({getCurrency: getCurrency}, dispatch) }
// }

export default connect(mapStateToProps)(Graph);
