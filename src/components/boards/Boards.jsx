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
    console.log("Boards - props:", this.props.tasks);
    return (
      <Router>
        <div key={this.props.tasks.id} className="App">
          {/* Components for columns */}
          < div className="Components" >
            <Queue tasks={this.props.tasks} />
            <InProgress tasks={this.props.tasks} />
            <Done tasks={this.props.tasks} />
          </div >
        </div>
      </Router>
    )
  }
}


export default Boards;