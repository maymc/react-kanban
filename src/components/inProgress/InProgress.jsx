import React, { Component } from 'react';
import Card from '../card/Card.jsx';


class InProgress extends Component {

  constructor(props) {
    super(props);
    this.state = {


    }
  }

  render() {
    return (
      <div className="componentColumn">
        <div id="InProgress-header">
          <h1 className="columnTitle" id="inProgressTitle">In Progress</h1>
        </div>
        <div className="CardComp">
          {/* <Card /> */}
        </div>
      </div>
    )
  }


}

export default InProgress;