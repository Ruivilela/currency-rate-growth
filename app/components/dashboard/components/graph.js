import React, {  Component } from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import getCurrency from './../../../data/currency/action';
import getLastXDays from './../../../data/currency/api';

import {
  LineChart,
  Line,
  CartesianGrid,
  Tooltip,
  YAxis,
  XAxis
} from 'recharts';

export class Graph extends Component {
  render(){
    if(!this.props.currency){
      return(
        <LineChart
          style={styleGraph.lineChart}
          width={styleGraph.width}
          height={styleGraph.height}
        >
          <YAxis />
          <XAxis />
          <CartesianGrid stroke="#ccc" strokeDasharray="5 5"/>
        </LineChart>
      )
    }

    if(this.props.currency){
      let lines = [];
      let data = [];

      // TODO add more than one currency
      // if(this.props.number_of_children){
      //   for(let i = 0; i < this.props.number_of_children; i++){
      //     lines.push(<Line key={i} type="monotone" dataKey={i} stroke="#8884d8" />)
      //   }
      //
      //   Object.keys(this.props.currency).map((value) => {
      //     let hash = {};
      //     hash[value] = this.props.currency[value];
      //     data.push(hash);
      //   })
      // }

      if(!this.props.number_of_children) {
        lines.push(<Line key={0} type="monotone" dataKey={0} stroke="#8884d8" />)
        this.props.currency.map((value) => {
          data.push({"0": value})
        })
      }

      return(
        <LineChart
          style={styleGraph.lineChart}
          width={styleGraph.width}
          height={styleGraph.height}
          data={data}
        >
          {lines}
          <YAxis />
          <XAxis />
          <CartesianGrid stroke="#ccc" strokeDasharray="5 5"/>
          <Tooltip />
        </LineChart>
      )
    }
  }

  componentWillMount(){
    getLastXDays(
      this.props.initialState.last_x_days,
      this.props.initialState.convert_to,
      this.props.initialState.base_currency
    )
      .then((result) => this.props.actions.currency(result))
  }

  componentWillUpdate(nextProps, nextState){
    if(nextProps.filter === this.props.filter || nextProps.convert_to_filter === this.props.convert_to_filter) {
      let days = this.props.filter && this.props.filter.last_x_days ?
        this.props.filter.last_x_days : this.props.initialState.last_x_days;

      let base_currency = this.props.filter && this.props.filter.base_currency ?
        this.props.filter.base_currency : this.props.initialState.base_currency;

      if(!this.props.convert_to_filter) {
        getLastXDays(days, this.props.initialState.convert_to , base_currency)
          .then((result) => this.props.actions.currency(result))
       } else {
         getLastXDays(days, this.props.convert_to_filter, base_currency)
           .then((result) => this.props.actions.currency(result))
       }
      // TODO add more than one currency
      // else {
      //   for(let i = 0 ; i < Object.keys(this.props.convert_to_filter).length ; i++ ){
      //     getLastXDays(days, this.props.convert_to_filter[i].convert_to , base_currency)
      //       .then((result) => {
      //         let hash = {};
      //         hash[i] = result;
      //         this.props.actions.currency(hash)
      //       })
      //   }
      // }
    }
  }
}

const styleGraph = {
  width:500,
  height:500,
  lineChart:{
    marginTop:"10%"
  }
}

function mapStateToProps(state){
  return {
    currency: state.currency,
    initialState: state.initialState,
    filter: state.filter,
    convert_to_filter: state.convert_to_filter,
    number_of_children: state.number_of_children
  };
}

function mapDispatchToProps(dispatch){
  return {
    actions: bindActionCreators(
      {
        currency: getCurrency,
      },
      dispatch
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Graph);
