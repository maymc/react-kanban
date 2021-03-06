//CLIENT SIDE

import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import axios from 'axios';

//Import JSX component files
import TaskForm from './components/form/TaskForm.jsx';
import Boards from './components/boards/Boards.jsx';

//Setup for redux
import { connect } from 'react-redux';
import { getAllTasks } from './actions/actions.js';

class App extends Component {
  constructor(props) {
    super(props);

    //State is an object, tasks is an array of objects, React handles state to do updates
    this.state = {
      tasks: []
    }
  }

  //~~~~~~ Lifecycle Methods ~~~~~~~~//

  //Mounting = setup resource
  //Runs after the component output has been rendered to DOM, this happens immediately when your app starts
  //React function that you define
  componentDidMount() {
    //GET request from front-end calls route from backend which will send all the 'tasks' data.
    //Don't need host name because from same origin

    //Use redux to create initial data and have component render it
    //Dispatching a raw object inside dispatch
    console.log("this.props:", this.props);
    this.props.dispatch(getAllTasks());
  }

  //~~~~~~ App Component - Functions ~~~~~~~~//
  //Never mutate 'state' directly, use 'this.setState' to update the 'state', include what you want to update inside

  //Function to create a new task
  addTask = (taskFromTaskForm) => {
    //For this in axios, you call the request and your backend sends you the new state of your new items and then you set state again. You set state again when adding an item so your UI can cause a reflow and display your new item.
    console.log("\nAxios - Adding new task:", taskFromTaskForm);
    axios
      .post('/newTask', taskFromTaskForm)
      .then(serverData => {
        console.log("\nserverData.data:", serverData.data);
        this.setState({ tasks: serverData.data })
      })
      .catch(err => {
        console.log("Error w/axios POST/newTask:", err);
      })
  }

  //Function to edit a task
  editTask = (taskFromEditForm, id) => {
    console.log("\n--> Editing task: ", taskFromEditForm);
    console.log("\n--> Editing task id: ", id);
    axios
      .put("/editTask", taskFromEditForm)
      .then(editServerData => {
        console.log("\nCheck - editServerData:", editServerData)
        this.setState({ tasks: editServerData.data })
      })
      .catch(err => {
        console.log("Error w/axios PUT/editTask:", err);
      })
  }

  deleteTask = (taskToDelete, id) => {
    console.log("\n---> Deleting task", taskToDelete);
    console.log("\n--> Deleting task id: ", id);
    axios
      .put("/deleteTask", taskToDelete)
      .then(serverDataAfterDelete => {
        console.log("\nCheck - editServerData:", serverDataAfterDelete)
        this.setState({ tasks: serverDataAfterDelete.data })
      })
      .catch()
  }

  //~~~~~~ App Component - RENDER ~~~~~~~~//

  //Render always returns HTML elements, it is like your template
  render() {
    return (
      <div className="App">
        {/* Fonts */}
        <style>
          @import url('https://fonts.googleapis.com/css?family=Amatic+SC:400,700|Oxygen|Shadows+Into+Light|Unica+One');
        </style>

        {/* Header */}
        <header className="App-header">KANBAN</header>
        <div id="Project-header">
          <div id="projectTitle">Board Name</div>
        </div>

        {/* Routing Links and Routes */}
        <Router>
          <div>
            <div id="Nav-header">
              <div id="nav-bar">
                {/* Links */}
                <Link to="/home">
                  <button id="homeBtn" type="button">Home</button>
                </Link>

                <Link to="/boards">
                  <button id="BoardsBtn" type="button">Your Boards</button>
                </Link>

                <Link to="/newTask">
                  <button id="newTask" type="button">+ NEW TASK</button>
                </Link>

                {/* Routes */}
                <Route path="/home" component={Home} />

                <Route path="/boards" component={() => <Boards tasks={this.state.tasks} editTask={this.editTask} deleteTask={this.deleteTask} />} />
                {/* <Route path="/boards" component={() => <Boards editTask={this.editTask} />} /> */}

                <Route path="/newTask" component={() => <TaskForm addTask={this.addTask} />} />
              </div>
            </div>
          </div>
        </Router>

      </div>
    )
  };
}

//Something you can throw your component through. Give it some data. Provide access to dispatch method in component. Need to connect component to redux system. Return of connect is a function.
export default connect()(App);

function Home(props) {
  console.log("\nRendering Home - Home props:", props);
  return (
    <div id="Home-header">
      <div id="welcomeMsg">Welcome to your Kanban!</div>
    </div>

  )
}


//Controlled form - let React maintain data of form b/c form elements in HTML has their own functionality behind the scenes. Browser engine handles the form however you declare it. Want to code it so that React component handles form data and stores the form data in the state.