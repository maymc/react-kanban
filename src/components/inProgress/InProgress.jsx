import React, { Component } from 'react';
//import Card from '../card/Card.jsx';

//Configurable component
class InProgress extends Component {

  constructor(props) {
    super(props);
  }

  //Function to filter out In Progress tasks
  InProgressTasks(props) {
    console.log("\n->In Progress-All Tasks:", props.tasks);
    let filteredInProgTasks = props.tasks.filter(element => {
      return element.status === "In Progress";
    });

    console.log("filteredInProgTasks:", filteredInProgTasks);
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

        <Card tasks={inProgTasks} />

      </div>
    )
  }
}

function Card(props) {
  return props.tasks.map(task =>
    <div className="InProgCard">
      <div className="cardInfo">
        {/* <header className="Card-header">
          <h1 className="columnTitle">Task</h1>
        </header> */}
        <p className="cardTitle">{task.title}</p>
        <p className="cardBody">{task.body}</p>
        <br />
        <p className="cardPriority">Priority: {task.priority}</p>
        {/* <p className="cardStatus">Status: {task.status}</p> */}
        <p className="cardCreatedBy">Created By: {task.createdBy}</p>
        <p className="cardAssignedTo">{task.assignedTo}</p>
      </div>
    </div>);
}

export default InProgress;