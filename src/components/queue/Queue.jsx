import React, { Component } from 'react';
import Card from '../card/Card.jsx';

class Queue extends Component {

  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    return (

      <div className="componentColumn">
        <div id="Queue-header">
          <h1 className="columnTitle" id="queueTitle">Queue</h1>
        </div>

        <div className="CardComp">
          {/* <Card /> */}
        </div>
      </div>

    )
  }

}
export default Queue;