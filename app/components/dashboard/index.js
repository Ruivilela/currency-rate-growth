import React , {Component} from 'react';
//components
import FilterDays from './components/filter-days';
import FilterCurrency from './components/filter-currency';
import Graph  from './components/graph';

export default class Dashboard extends Component {
  render(){
    return(
      <div style={dashboardStyle}>
        <h4 style={dashboardStyle.text1}> Last Days</h4>
        <h4 style={dashboardStyle.text2}> Base Currency </h4>
        <FilterDays />
        <FilterCurrency />
        <Graph />
      </div>
    )
  }
}

const dashboardStyle = {
  text1:{
    position:"absolute",
    left:"20%",
    top:"-7%"
  },
  text2:{
    position:"absolute",
    left:"70%",
    top:"-7%"
  },
  display:"inline",
  position:"absolute",
  left:"30%",
  top:"10%"
}
