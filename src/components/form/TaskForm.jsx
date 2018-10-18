import React, { Component } from 'react';
import { addItem } from '../form/TaskForm.jsx';
import { connect } from 'react-redux';
import { addTask } from '../../actions/actions';

class TaskForm extends Component {

  constructor(props) {
    super(props);
    this.states = {
      title: null,
      body: null,
      priority: null,
      status: null,
      createdBy: null,
      assignedTo: null
    }
  }

  handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    this.setState({
      [name]: value
    })
  }

  handleSubmit = (e) => {
    console.log("handleSubmit this.props:", this.props);
    e.preventDefault();
    console.log('\n Submitted!!:', this.state);
    // this.props.addTask(this.state);
    //any change to store goes through dispatch store first
    this.props.dispatch(addTask(this.state));
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>Title:<br />
          <input onChange={this.handleChange} type="text" name="title" placeholder="Enter title..." />
        </label>
        <br /><br />
        <label>Body:<br />
          <input onChange={this.handleChange} type="text" name="body" placeholder="Enter body..." />
        </label>
        <br /><br />
        <label>Priority:<br />
          <select onChange={this.handleChange} name="priority">
            <option>Select Priority...</option>
            <option value="Low">Low</option>
            <option value="Medium">Medium</option>
            <option value="High">High</option>
            <option value="Blocker">Blocker</option>
          </select>
        </label>
        <br /><br />
        <label>Status:<br />
          <select onChange={this.handleChange} name="status">
            <option>Select Status...</option>
            <option value="Queue">Queue</option>
            <option value="In Progress">In Progress</option>
            <option value="Done">Done</option>
          </select>
        </label>
        <br /><br />
        <label>Created By:<br />
          <input onChange={this.handleChange} type="text" name="createdBy" placeholder="Enter Creator..." />
        </label>
        <br /><br />
        <label>Assigned To:<br />
          <input onChange={this.handleChange} type="text" name="assignedTo" placeholder="Assign task to someone..." />
        </label>

        <button type="submit" className="btn">Submit</button>

      </form>
    )
  }
}

export default connect()(TaskForm);