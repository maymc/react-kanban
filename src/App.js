import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { getItemsFromFakeXHR, addItemToFakeXHR, deleteItemByIdFromFakeXHR } from './db/tasks.db.js';

//Import JSX component files
import Queue from './components/queue/Queue.jsx';
import InProgress from './components/inProgress/InProgress.jsx';
import Done from './components/done/Done.jsx';
import TaskForm from './components/form/TaskForm.jsx';
// import Card from './components/card/Card.jsx';

class App extends Component {
  constructor(props) {
    super(props);

    //State is an object, items is an array of objects
    //React handles state to do updates
    this.state = {
      tasks: [
        {
          id: 1,
          title: "Clean room",
          body: "Donate old clothes and books",
          priority: "Low",
          status: "Queue",
          createdBy: "Bob",
          assignedTo: "May"
        },
        {
          id: 2,
          title: "Pay bills",
          body: "Credit card bills due this month",
          priority: "High",
          status: "In Progress",
          createdBy: "Bill",
          assignedTo: "Em"
        },
        {
          id: 3,
          title: "Walk the dog",
          body: "Twice a day",
          priority: "Low",
          status: "Done",
          createdBy: "Sam",
          assignedTo: "Sammy"
        },
        {
          id: 4,
          title: "Go to work",
          body: "Earn money, don't be homeless",
          priority: "Medium",
          status: "In Progress",
          createdBy: "Paul",
          assignedTo: "May"
        },
        {
          id: 5,
          title: "Schedule dentist appointment",
          body: "Annual cleaning",
          priority: "Medium",
          status: "Queue",
          createdBy: "George",
          assignedTo: "May"
        },
        {
          id: 6,
          title: "Feed the dog",
          body: "k9 brand",
          priority: "Medium",
          status: "Queue",
          createdBy: "Bob",
          assignedTo: "Bob"
        },
      ]

      // this.addTask = this.addTask.bind(this);
    }
  }

  //Lifecycle Methods - mounting = setup resource, unmounting = remove/free resource
  //Runs after the component output has been rendered to the DOM
  componentDidMount() {
    //execute something when component mounts
    //do xhr request
  }

  componentWillUnmount() {

  }

  //Function to create a new task
  addTask = () => {
    //never mutate state directly, use this.setState to update the state, include what you want to update inside
    console.log("Adding new task!");
    // this.setState({
    //   count: this.state.count - 1;
    // })
    // this.setState((state, props) => {
    //   return {count: state.count -1}l
    // })
    document.getElementById("taskForm").style.display = "block";
  }

  // closeForm = () => {
  //   document.getElementById("taskForm").style.display = "none";
  // }

  //Render always returns HTML elements, it is like your template
  render() {
    return (
      <div className="App">
        <style>
          @import url('https://fonts.googleapis.com/css?family=Amatic+SC:400,700|Oxygen|Shadows+Into+Light|Unica+One');
        </style>

        <header className="App-header">KANBAN</header>

        <div id="Project-header">
          <div id="projectTitle">Personal Life</div>

          <button id="newTask" type="button" onClick={this.addTask}>+ NEW TASK</button>
        </div>

        <div className="Components">
          <Queue tasks={this.state.tasks} />
          <InProgress tasks={this.state.tasks} />
          <Done tasks={this.state.tasks} />
        </div>
        <TaskForm />

      </div>
    )
  };
}

//Controlled form - let React maintain data of form b/c form elements in HTML has their own functionality behind the scenes. Browser engine handles the form however oyu declare it. Want to code it so that React component handles form data and stores the form data in the state.


export default App;
