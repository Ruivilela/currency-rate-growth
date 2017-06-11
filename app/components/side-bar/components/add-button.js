import React , {Component} from 'react';
import { connect } from 'react-redux';
import { mapStateToProps, mapDispatchToProps } from './../../filter';
import { getLastXDays } from './../../../data/currency/api';

export class AddButton extends Component {
  constructor(props){
    super(props);

    this.click = this.click.bind(this)

    this.state = {
      convert_to:"USD",
      base_currency:"EUR",
      last_x_days: 7,
    }
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
    let base_currency = !this.props.filter ?
      this.state.base_currency : this.props.filter.base_currency;

    let last_x_days = !this.props.filter ?
      this.state.last_x_days : this.props.filter.last_x_days;

    let convert_to = !this.props.filter ?
      this.state.convert_to : this.props.filter.convert_to;

    getLastXDays(last_x_days, convert_to, base_currency)
      .then((result) =>  this.props.actions.currency(result)); 
  }
}

const addButtonStyle = {
  marginLeft:"1%",
  width:"15%"
}

export default connect(mapStateToProps, mapDispatchToProps)(AddButton);
