import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import EditForm from '../form/EditForm';
import { connect } from 'react-redux';

//Configurable component
class InProgress extends Component {

  constructor(props) {
    super(props);
  }

  //Function to filter out In Progress tasks
  InProgressTasks(props) {
    // console.log("\n->In Progress-All Tasks:", props.tasks);
    let filteredInProgTasks = props.tasks.filter(element => {
      return element.status === "In Progress";
    });

    // console.log("filteredInProgTasks:", filteredInProgTasks);
    return filteredInProgTasks;
  }

  //Render always returns HTML elements, it is like your template
  render() {
    // console.log("InProgress component props:", this.props);

    let inProgTasks = this.InProgressTasks(this.props);
    console.log("Render - In Progress Task List:", inProgTasks);

    return (
      <div className="componentColumn">
        <div id="InProgress-header">
          <h1 className="columnTitle" id="inProgressTitle">In Progress</h1>
        </div>

        <Card tasks={inProgTasks} editTask={this.props.editTask} />

      </div>
    )
  }
}

function Card(props) {
  return props.tasks.map(task =>
    <div key={task.id} className="InProgCard">
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
  console.log("\nInProgress - state:", state);
  return {
    tasks: state,
    inProgressTest: 'testing inProgress',
  }
}
export default connect(mapStateToProps)(InProgress);