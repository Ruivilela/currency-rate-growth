import React , {Component} from 'react';
//components
import AddButton from './components/add-button';
import ConvertToFilter from './components/convert-to-filter';

export default class SideBar extends Component {
  constructor(props){
    super(props);
    this.state = {number_of_children:1};
  }
  render(){
    const children = [];

    for(let i = 0 ; i < this.state.number_of_children ; i++){
      children.push(
        <div key={i} style={sideBarStyle.children}>
          <ConvertToFilter />
          <AddButton />
        </div>
      )
    }

    return(
      <div style={sideBarStyle}>
        {children}
      </div>
    )
  }
}

const sideBarStyle = {
  children:{
    marginTop:"2%"
  },
  marginTop:"120px"
}
