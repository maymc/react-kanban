import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
// import Boards from '../src/components/boards/Boards.jsx';
import * as serviceWorker from './serviceWorker';

//Setup for bindings and react-redux
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import reducers from './reducers/reducers.js';
import ReduxThunk from 'redux-thunk';


const store = createStore(
  reducers,
  compose(
    applyMiddleware(ReduxThunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  )
);

store.dispatch({ type: 'test', payload: 'more tests' });


//Provider is top level application with state. If an action goes to a reducer, reducer returns a new state, sets state inside provider and then propagates everything downwards
ReactDOM.render(
  // How to hook up react application with redux and react redux bindings. Bindings allow one system ot communicate with another (wrap with provider and give it store. Store is where data is)
  <Router>
    <Provider store={store}>
      <App />
    </Provider>
  </Router>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
