import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import axios from 'axios';

//Import JSX component files
import Queue from './components/queue/Queue.jsx';
import InProgress from './components/inProgress/InProgress.jsx';
import Done from './components/done/Done.jsx';
import TaskForm from './components/form/TaskForm.jsx';

class App extends Component {
  constructor(props) {
    super(props);

    //State is an object, tasks is an array of objects
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
    }
  }

  //~~~~~~ Lifecycle Methods ~~~~~~~~//

  //Mounting = setup resource, Runs after the component output has been rendered to DOM
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
    console.log("Adding new task!");

    //Creates new task, returns a new state
    //Creates a whole new object and creats a new state 
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
          <div id="projectTitle">Personal Life</div>
          <button id="newTask" type="button" onClick={this.addTask}>+ NEW TASK</button>
        </div>

        {/* Components for columns */}
        <div className="Components">
          <Queue tasks={this.state.tasks} />
          <InProgress tasks={this.state.tasks} />
          <Done tasks={this.state.tasks} />
        </div>

        {/* New Task */}
        {/* <TaskForm addTask={this.addTask} /> */}
        <br />
        {/* Routing Links and Routes */}
        <Router>
          <div>
            <div>
              <Link to="/home">Home </Link>
              <Link to="/boards"> Your Boards </Link>
              <Link to="/new-task">
                <button id="newTask" type="button" onClick={this.addTask}>+ NEW TASK</button>
              </Link>

              <Route path="/home" component={Home} />
              <Route path="/boards" component={Boards} />
              <Route path="/new-task" component={() => <TaskForm addTask={this.addTask} />} />
            </div>
          </div>
        </Router>


      </div>
    )
  };
}

export default App;

function Home(props) {
  console.log("Home props:", props);
  console.log("Home component goes here");
  return <div>This is HOMEEEEE</div>
}
function Boards(props) {
  console.log("Boards props:", props);
  console.log("Home component goes here");
  return <div>This is Boards</div>
}



//Controlled form - let React maintain data of form b/c form elements in HTML has their own functionality behind the scenes. Browser engine handles the form however you declare it. Want to code it so that React component handles form data and stores the form data in the state.