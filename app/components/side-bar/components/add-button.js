import React , {Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

export default class AddButton extends Component {
  constructor(props){
    super(props);
    this.handleChange = this.handleChange.bind(this)
  }

  render(){
    return(
      <button type="button" className="btn btn-primary" onClick={this.handleChange}>
        Add Currency
      </button>
    )
  }

  handleChange(){
    
  }
}
