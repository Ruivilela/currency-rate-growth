import React , {Component} from 'react';
import { connect } from 'react-redux';
import { mapStateToProps, mapDispatchToProps } from './../../filter';

export default class AddButton extends Component {
  constructor(props){
    super(props);

    this.click = this.click.bind(this)
  }

  render(){
    return(
      <button
        type="button"
        className="btn btn-primary"
        onClick={this.click}
        style={addButtonStyle}
      >
        Add Currency
      </button>
    )
  }

  click(event){
    console.log("working")
  }
}

const addButtonStyle = {
  marginLeft:"1%",
  width:"15%"
}
