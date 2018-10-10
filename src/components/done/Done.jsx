import React, { Component } from 'react';
// import Card from '../card/Card.jsx';

//Configurable component
class Done extends Component {

  constructor(props) {
    super(props);
  }

  //Function to filter out Done tasks
  DoneTasks(props) {
    console.log("\n->Done-All Tasks:", props.tasks);
    let filteredDoneTasks = props.tasks.filter(element => {
      return element.status === "Done";
    });

    console.log("filteredDoneTasks:", filteredDoneTasks);
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

        <Card tasks={doneTasks} />

      </div>
    )
  }
}

function Card(props) {
  return props.tasks.map(task =>
    <div className="DoneCard">
      <div className="cardInfo">
        <header className="Card-header">
          <h1 className="columnTitle">Task</h1>
        </header>
        <p className="cardTitle">Title: {task.title}</p>
        <p className="cardBody">Body: {task.body}</p>
        <p className="cardPriority">Priority: {task.priority}</p>
        <p className="cardStatus">Status: {task.status}</p>
        <p className="cardCreatedBy">Created By: {task.createdBy}</p>
        <p className="cardAssignedTo">Assigned To: {task.assignedTo}</p>
      </div>
    </div>);
}

export default Done;