import React , {Component} from 'react';
//components
import AddButton from './components/add-button';
import ConvertToFilter from './components/convert-to-filter';

export default class SideBar extends Component {
  render(){
    return(
      <div style={sideBarStyle}>
        <ConvertToFilter />
        <AddButton />
      </div>
    )
  }
}

const sideBarStyle = {
  marginTop:"120px"
}
