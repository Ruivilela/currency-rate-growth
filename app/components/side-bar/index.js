import React , {Component} from 'react';
//components
import AddButton from './components/add-button';
import CurrencyField from './components/currency-field';

export default class SideBar extends Component {
  render(){
    return(
      <div>
        <CurrencyField />
        <AddButton />
      </div>
    )
  }
}
