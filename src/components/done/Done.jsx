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
      <div className="componentColumn">
        <div id="Done-header">
          <h1 className="columnTitle" id="doneTitle">Done</h1>
        </div>
        <div className="CardComp">
          {/* <Card /> */}
        </div>
      </div>
    )
  }

}
export default Done;