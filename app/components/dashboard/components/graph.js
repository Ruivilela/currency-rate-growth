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
      let lines = []


      lines.push(<Line key="ghgjhg" type="monotone" dataKey="toze" stroke="#8884d8" />)


      const data = () => {
        let dataSet = [];

        this.props.currency.map((value) => {
          dataSet.push({"toze": value})
        })

        return dataSet
      }

      return(
        <LineChart
          style={styleGraph.lineChart}
          width={styleGraph.width}
          height={styleGraph.height}
          data={data()}
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
    // let days = this.props.filter ?
    //   this.props.filter.last_x_days : this.props.initialState.last_x_days;
    //
    // let base_currency = this.props.filter ?
    //   this.props.filter.base_currency : this.props.initialState.base_currency;
    //
    // if(!this.props.number_of_children){
    //
    //   getLastXDays(days, this.props.initialState.convert_to, base_currency)
    //     .then((result) => this.props.actions.currency(result))
  }

  componentWillReceiveProps(nextProps){
    if(this.props.filter == nextProps.filter){
      let days = this.props.filter && this.props.filter.last_x_days ?
        this.props.filter.last_x_days : this.props.initialState.last_x_days;

      let base_currency = this.props.filter && this.props.filter.base_currency ?
        this.props.filter.base_currency : this.props.initialState.base_currency;

      if(!this.props.convert_to_filter) {
        getLastXDays(days, this.props.initialState.convert_to , base_currency)
          .then((result) => this.props.actions.currency(result))
      }
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
