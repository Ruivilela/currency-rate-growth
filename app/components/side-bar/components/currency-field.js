import React , {Component} from 'react';

export default class CurrencyField extends Component {
  render(){
    return(
      <select
        className="form-control"
        style={fieldStyle}
      >
        <option defaultValue value="USD"> USD </option>
        <option value="GBP"> USD </option>
        <option value="EUR"> EUR </option>
      </select>
    )
  }
}

const fieldStyle = {
  display:"inline", 
  width:"13%"
}
