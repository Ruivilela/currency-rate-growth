import React, {Component} from 'react';

export default class Filter extends Component {
  render(){
    return(
      <div className="row">
        <div className="col-md-5">
          hello
        </div>
        <div className="col-md-1">
          <select className="form-control">
            <option> 1 week </option>
            <option> 1 month </option>
            <option> 3 months </option>
          </select>
        </div>

      </div>

    )
  }
}
