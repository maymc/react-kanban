import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import EditForm from '../form/EditForm';

//Configurable component
class Queue extends Component {

  constructor(props) {
    super(props);
  }

  //Function to filter out Queue tasks
  QueueTasks(props) {
    // console.log("\n->Queue-All Tasks:", props.tasks);
    let filteredQueueTasks = props.tasks.filter(element => {
      return element.status === "Queue";
    });

    // console.log("filteredQueueTasks:", filteredQueueTasks);
    return filteredQueueTasks;
  }

  //Render always returns HTML elements, it is like your template
  render() {
    // console.log("Queue component props:", this.props);

    //Filter Queue Tasks
    let queueTasks = this.QueueTasks(this.props);
    console.log("Render - Queue Task List:", queueTasks);

    return (
      <div className="componentColumn">
        <div id="Queue-header">
          <h1 className="columnTitle" id="queueTitle">To-Do</h1>
        </div>

        <Card tasks={queueTasks} editTask={this.props.editTask} />
      </div>
    )
  }
}

function Card(props) {
  // console.log("gimme edit function???:", props.editTask);
  return props.tasks.map(task =>
    <div key={task.id} className="QueueCard">
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

export default Queue;