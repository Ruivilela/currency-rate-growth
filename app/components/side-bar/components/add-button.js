import React , {Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getLastXDays } from './../../../data/currency/api';
import addCurrency from './../../../state/add-currency/action';
import getCurrency from './../../../data/currency/action';

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
        Update Currency
      </button>
    )
  }

  click(){
    let base_currency = this.props.filter && this.props.filter.base_currency ?
      this.props.filter.base_currency : this.props.initialState.base_currency;

    let days = this.props.filter && this.props.filter.last_x_days ?
      this.props.filter.last_x_days : this.props.initialState.last_x_days;

    let convert_to = this.props.convert_to ?
      this.props.convert_to : this.props.initialState.convert_to ;

    getLastXDays(days, convert_to , base_currency)
      .then((result) => this.props.actions.currency(result))
    // TODO add more than one currency feature
    //this.props.actions.addCurrency()
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
        addCurrency: addCurrency,
        currency: getCurrency
      },
      dispatch
    )
  }
}

function mapStateToProps(state) {
  return {
    initialState: state.initialState,
    filter: state.filter,
    convert_to: state.convert_to_filter
  };
}

export default connect (mapStateToProps, mapDispatchToProps)(AddButton)
