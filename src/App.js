import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import axios from 'axios';

//Import JSX component files
import TaskForm from './components/form/TaskForm.jsx';
import Boards from './components/boards/Boards.jsx';

class App extends Component {
  constructor(props) {
    super(props);

    //State is an object, tasks is an array of objects, React handles state to do updates
    this.state = {
      tasks: []
    }
  }

  //~~~~~~ Lifecycle Methods ~~~~~~~~//

  //Mounting = setup resource, Runs after the component output has been rendered to DOM
  //this happens immediately when your app starts, this is a react function that you define.
  componentDidMount() {
    //get request from front end to /tasks that is calling a route from backend that should send all the tasks data, don't need host name because from same origin. Console.log to check that you got data from backend. Inspect on the browser since this is front-end
    axios
      .get('/tasks')
      .then(tasks => {
        console.log("Axios - tasks:", tasks)
        //grab data from backend and set it to your application state
        this.setState({ tasks: tasks.data })
      })
      .catch(err => {
        console.log("Error w/axios get/tasks:", err)
      })
  }


  //~~~~~~ App Component - Functions ~~~~~~~~//
  //Never mutate 'state' directly, use 'this.setState' to update the 'state', include what you want to update inside

  //Function to create a new task
  addTask = (task) => {
    console.log("Adding new task!", task);

    //Creates new task, returns a new state
    //Creates a whole new object and creates a new state 
    this.setState(state => {
      //You have a tasks field and array, takes everything from old task array and adds one more task
      return { tasks: [...state.tasks, task] }
    })

    //For this in axios, you call the request and your backend sends you the new state of your new items and then you set state again. You set state again when adding an item so your UI can cause a reflow and display your new item.
    // addItemToFakeXHR(item)
    //   .then(items => {
    //     if(items) {
    //       this.setState({items})
    //     }
    //   })
  }

  editTask = (task) => {
    console.log("---> Editing task", task);
  }

  deleteTask = (task) => {
    console.log("---> Deleting task", task);
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
                  <button id="newTask" type="button" onClick={this.addTask}>+ NEW TASK</button>
                </Link>

                {/* Routes */}
                <Route path="/home" component={Home} />

                <Route path="/boards" component={() => <Boards tasks={this.state.tasks} editTask={this.editTask} deleteTask={this.deleteTask} />} />

                <Route path="/newTask" component={() => <TaskForm addTask={this.addTask} />} />
              </div>
            </div>
          </div>
        </Router>

      </div>
    )
  };
}

export default App;

function Home(props) {
  console.log("\nRendering Home - Home props:", props);
  return (
    <div id="Home-header">
      <div id="welcomeMsg">Welcome to your Kanban!</div>
    </div>

  )
}


//Controlled form - let React maintain data of form b/c form elements in HTML has their own functionality behind the scenes. Browser engine handles the form however you declare it. Want to code it so that React component handles form data and stores the form data in the state.