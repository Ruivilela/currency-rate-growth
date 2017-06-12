import React , {Component} from 'react';
import { connect } from 'react-redux';
//components
import AddButton from './components/add-button';
import ConvertToFilter from './components/convert-to-filter';

export class SideBar extends Component {
  render(){
    const children = [];
    let number_of_children = !this.props.number_of_children ?
      this.props.initialState : this.props.number_of_children;

    for(let i = 0 ; i < number_of_children ; i++){
      if(i > 2) break; // limits the number of currencies available
      children.push(
        <div key={i} value={i} style={sideBarStyle.children}>
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

function mapStateToProps(state){
  return {
    initialState: state.initialState.number_of_children,
    number_of_children: state.number_of_children
  }
}

export default connect(mapStateToProps)(SideBar)
