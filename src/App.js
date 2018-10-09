import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

//Import JSX component files
import Queue from './components/queue/Queue.jsx';
import InProgress from './components/inProgress/InProgress.jsx';
import Done from './components/done/Done.jsx';
import Card from './components/card/Card.jsx';

class App extends Component {
  constructor(props) {
    super(props);

    //State is an object, items is an array of objects
    this.state = {
      queueItems: [
        {
          id: 1,
          title: "Clean room",
          body: "Donate old clothes and books",
          priority: "low",
          status: "Queue",
          createdBy: "Bob",
          AssignedTo: "May"
        }
      ],
      inProgressItems: [
        {
          id: 2,
          title: "Pay bills",
          body: "Credit card bills due this month",
          priority: "high",
          status: "In Progress",
          createdBy: "Bill",
          AssignedTo: "Em"
        },
        {
          id: 4,
          title: "Go to work",
          body: "Earn money, don't be homeless",
          priority: "medium",
          status: "In Progress",
          createdBy: "Paul",
          AssignedTo: "May"
        }
      ],
      doneItems: [
        {
          id: 3,
          title: "Walk the dog",
          body: "Twice a day",
          priority: "low",
          status: "Done",
          createdBy: "Sam",
          AssignedTo: "Sammy"
        },
      ]
    }
  }

  render() {
    return (

      <div className="App">
        <style>
          @import url('https://fonts.googleapis.com/css?family=Amatic+SC:400,700|Shadows+Into+Light|Unica+One');
          </style>

        <header className="App-header">KANBAN</header>

        <div id="Project-header">
          <div id="projectTitle">Personal Life</div>

          <button id="newTask" type="button">+ NEW TASK</button>
        </div>

        <div className="Components">
          <Queue />
          {this.state.queueItems.map(item => <div>{queueItems.title} </div>)}
          <InProgress />
          <Done />
        </div>

      </div>
    )
  };
}
// function Queue(props) {
//   return props.queueItems.map(queueItem => <div>{queueItem.title}</div>)
// }

export default App;
