import React, { Component } from 'react';
import Card from '../card/Card.jsx';


class Done extends Component {

  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    return (
      <div className="Done">
        <header className="Done-header">
          <h1 className="columnTitle">Done</h1>
        </header>
      </div>
    )
  }

}
export default Done;