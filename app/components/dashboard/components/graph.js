import React, {  Component} from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
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
          <Line type="monotone" dataKey="rate" stroke="#8884d8" />
          <YAxis />
          <XAxis />
          <CartesianGrid stroke="#ccc" strokeDasharray="5 5"/>
        </LineChart>
      )
    }

    if(this.props.currency){
      const data = () => {
        let dataSet = [];

        this.props.currency.map((value) => {
          dataSet.push({rate: value})
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
          <Line type="monotone" dataKey="rate" stroke="#8884d8" />
          <YAxis />
          <XAxis />
          <CartesianGrid stroke="#ccc" strokeDasharray="5 5"/>
          <Tooltip />
        </LineChart>
      )
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
    currency: state.currency
  };
}

export default connect(mapStateToProps)(Graph);
