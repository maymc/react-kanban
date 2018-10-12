import React, { Component } from 'react';
// import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import Queue from '../queue/Queue.jsx';
import InProgress from '../inProgress/InProgress.jsx';
import Done from '../done/Done.jsx';

class Boards extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="App">
        {/* Components for columns */}
        <div className="Components" >
          <Queue tasks={this.state.tasks} />
          <InProgress tasks={this.state.tasks} />
          <Done tasks={this.state.tasks} />
        </div >
      </div>
    )
  }
}


export default Boards;