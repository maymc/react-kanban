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
      <div className="Queue">
        <header className="Queue-header">
          <h1 className="columnTitle">Queue</h1>
        </header>
      </div>
    )
  }

}
export default Queue;