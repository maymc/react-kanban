import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import EditForm from '../form/EditForm';
import { connect } from 'react-redux';

//Configurable component
class Done extends Component {

  constructor(props) {
    super(props);
  }

  //Function to filter out Done tasks
  DoneTasks(props) {
    // console.log("\n->Done-All Tasks:", props.tasks);
    let filteredDoneTasks = props.tasks.filter(element => {
      return element.status === "Done";
    });

    // console.log("filteredDoneTasks:", filteredDoneTasks);
    return filteredDoneTasks;
  }

  //Render always returns HTML elements, it is like your template
  render() {
    // console.log("Done component props:", this.props);

    let doneTasks = this.DoneTasks(this.props);
    console.log("Render - Done Task List:", doneTasks);

    return (
      <div className="componentColumn">
        <div id="Done-header">
          <h1 className="columnTitle" id="doneTitle">Done</h1>
        </div>

        <Card tasks={doneTasks} editTask={this.props.editTask} />

      </div>
    )
  }
}

function Card(props) {
  return props.tasks.map(task =>
    <div key={task.id} className="DoneCard">
      <div className="cardInfo">
        <p className="cardTitle">{task.title}</p>
        <p className="cardBody">{task.body}</p>
        <br />
        <p className="cardPriority">Priority: {task.priority}</p>
        <p className="cardCreatedBy">Created By: {task.createdBy}</p>
        <p className="cardAssignedTo">{task.assignedTo}</p>

        <Router>
          <div>
            <Link to="/editTask">
              <button id="Task" type="button">Edit Task</button>
            </Link>

            {/* <Link to="/deleteTask">
              <button id="Task" type="button">Delete Task</button>
            </Link> */}

            <Route path="/editTask" component={() => <EditForm task={task} editTask={props.editTask} key={task.id} />} />

            {/* <Route path="/deleteTask" component={() => <EditForm editTask={props.deleteTask} />} /> */}
          </div>

        </Router>
      </div>
    </div>);
}

const mapStateToProps = state => {
  console.log("\nDone - state:", state);
  return {
    tasks: state,
    doneTest: 'testing Done',
  }
}

export default connect(mapStateToProps)(Done);