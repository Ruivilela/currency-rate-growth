import React , {Component} from 'react'; 
//components
import FilterDays from './components/filter-days';
import FilterCurrency from './components/filter-currency';
import Graph  from './components/graph';

export default class Dashboard extends Component {
  render(){
    return(
      <div>
        <FilterDays />
        <FilterCurrency />
        <Graph />
      </div>
    )
  }
}
