import React, { Component } from 'react';

class TaskForm extends Component {

  constructor(props) {
    super(props);
    this.states = {
      title: null,
      priority: null,
      status: null,
      createdBy: null,
      assignedTo: null
    }
  }

  handleSubmit = (e) => {
    e.preventDefault();
    console.log('\n Submitted!!:', this.state);
    this.props.addTask(this.state);
  }

  handleChange = (e) => {
    e.preventDefault();
    // if (e.target.name === 'title') {
    //   console.log("What field?:", e.target.name);
    //   console.log("Value of field?:", e.target.value);
    //   this.setState({ "title": e.target.value }, function () {
    //     console.log("this.state after updating form", this.state);
    //   })
    // }
    // else if (e.target.name === 'priority') {
    //   console.log("What field?:", e.target.name);
    //   console.log("Value of field?:", e.target.value);
    //   this.setState({ "priority": e.target.value }, function () {
    //     console.log("this.state after updating form", this.state);
    //   })
    // }
    // else if (e.target.name === 'createdBy') {
    //   console.log("What field?:", e.target.name);
    //   console.log("Value of field?:", e.target.value);
    //   this.setState({ "createdBy": e.target.value }, function () {
    //     console.log("this.state after updating form", this.state);
    //   })
    // }
    // else if (e.target.name === 'assignedTo') {
    //   console.log("What field?:", e.target.name);
    //   console.log("Value of field?:", e.target.value);
    //   this.setState({ "assignedTo": e.target.value }, function () {
    //     console.log("this.state after updating form", this.state);
    //   })
    // }

    const { name, value } = e.target;
    this.setState({
      [name]: value
    })
  }

  render() {
    return (
      // <div class="form-popup" id="taskForm">
      // <form action="/action_page.php" class="form-container">
      <form onSubmit={this.handleSubmit}>
        <label>Title:<br />
          <input onChange={this.handleChange} type="text" name="title" placeholder="Enter title..." />
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
        {/* <button type="button" class="btn cancel" onclick="closeForm()">Close</button> */}
      </form>
      // </div>
    )
  }
}

export default TaskForm;