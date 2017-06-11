import React , {Component} from 'react';
//components
import FilterDays from './components/filter-days';
import FilterCurrency from './components/filter-currency';
import Graph  from './components/graph';

export default class Dashboard extends Component {
  render(){
    return(
      <div style={dashboardStyle}>
        <FilterDays />
        <FilterCurrency />
        <Graph />
      </div>
    )
  }
}

const dashboardStyle = {
  display:"inline",
  position:"absolute",
  left:"30%",
  top:"5%"
}
