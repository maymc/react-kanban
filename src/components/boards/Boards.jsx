import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Queue from '../queue/Queue.jsx';
import InProgress from '../inProgress/InProgress.jsx';
import Done from '../done/Done.jsx';

import { connect } from 'react-redux';

class Boards extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log("\nBoards - props:", this.props.tasks);
    // console.log("gimme function:", this.props.editTask);
    return (
      <Router>
        <div key={this.props.tasks.id} className="App">
          {/* Components for columns */}
          < div className="Components" >
            <Queue tasks={this.props.tasks} editTask={this.props.editTask} />
            <InProgress tasks={this.props.tasks} editTask={this.props.editTask} />
            <Done tasks={this.props.tasks} editTask={this.props.editTask} />
          </div >
        </div>
      </Router>
    )
  }
}

// Map state to props. Referencing the store state, create a mapping. Redux gives API of how they do it, make available the store state to props
// const mapStateToProps = state => {
//   //array of objecyd = state
//   console.log("\nstate:", state)
//   return {
//     tasks: state,
//     tester1: 'testing if this works',
//   }
// }

//Executing connect with mapStateToProps where connect will use the function to read from the store and inject it into the properities of the Board app. Connect returns another function that can take in a component
//Augmenting your component
// export default connect(mapStateToProps)(Boards);
export default Boards;