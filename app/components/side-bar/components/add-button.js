import React , {Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import addCurrency from './../../../state/add-currency/action';

export class AddButton extends Component {
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
    this.props.actions.addCurrency()
  }
}

const addButtonStyle = {
  marginLeft:"1%",
  width:"15%"
}

function mapDispatchToProps(dispatch){
  return {
    actions: bindActionCreators(
      {
        addCurrency: addCurrency
      },
      dispatch
    )
  }
}

export default connect (null, mapDispatchToProps)(AddButton)
