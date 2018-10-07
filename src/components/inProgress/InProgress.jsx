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
      <div className="InProgress">
        <header className="InProgress-header">
          <h1 className="columnTitle">In Progress</h1>
        </header>
      </div>
    )
  }


}

export default InProgress;