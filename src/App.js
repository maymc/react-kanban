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
        <header className="App-header">
          <Queue />
          <InProgress />
          <Done />
          <Card />


          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
