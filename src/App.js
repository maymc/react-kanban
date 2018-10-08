import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

//Import JSX component files
import Queue from './components/queue/Queue.jsx';
import InProgress from './components/inProgress/InProgress.jsx';
import Done from './components/done/Done.jsx';
import Card from './components/card/Card.jsx';

class App extends Component {

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
          <InProgress />
          <Done />
        </div>
      </div>
    );
  }
}

export default App;
