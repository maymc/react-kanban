import React, { Component } from 'react';
//import Card from '../card/Card.jsx';

//Configurable component
class Queue extends Component {

  constructor(props) {
    super(props);
  }

  //Function to filter out Queue tasks
  QueueTasks(props) {
    console.log("\n->Queue-All Tasks:", props.tasks);
    let filteredQueueTasks = props.tasks.filter(element => {
      return element.status === "Queue";
    });

    console.log("filteredQueueTasks:", filteredQueueTasks);
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
          <h1 className="columnTitle" id="queueTitle">Queue</h1>
        </div>

        <Card tasks={queueTasks} />

      </div>
    )
  }
}

function Card(props) {
  return props.tasks.map(task =>
    <div key={task.id} className="QueueCard">
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

        <button id="editBtn" type="button" onClick={task.editTask}>Edit</button>
        <button id="deleteBtn" type="button" onClick={task.deleteTask}>Delete</button>
      </div>
    </div>);
}

export default Queue;