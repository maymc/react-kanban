import React, { Component } from 'react';
import { connect } from 'react-redux';
import { editTask } from '../../actions/actions.js';

class EditForm extends Component {

  constructor(props) {
    super(props);
    this.states = {
      id: props.id,
      title: props.title,
      body: props.body,
      priority: props.priority,
      status: props.status,
      createdBy: props.createdBy,
      assignedTo: props.assignedTo
    }
  }

  handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    this.setState({
      id: this.props.task.id,
      [name]: value
    })
  }

  handleSubmit = (e) => {
    console.log("handleSubmit - EDIT - this.props:", this.props.task);
    e.preventDefault();
    console.log('\n Updated!!:', this.state);
    console.log('\n Updated id:', this.props.task.id);
    // this.props.editTask(this.state, this.props.task.id);
    this.props.dispatch(editTask(this.state, this.props.task.id));
  }

  render() {
    return (
      <form className="editForm" onSubmit={this.handleSubmit}>
        <label className="editLabel">Task ID:<br />
          <input className="editInput" type="text" name="title" value={this.props.task.id} readOnly />
        </label>
        <br />
        <label className="editLabel">Title:<br />
          <input className="editInput" onChange={this.handleChange} type="text" name="title" placeholder={this.props.task.title} />
        </label>
        <br />
        <label className="editLabel">Body:<br />
          <input className="editInput" onChange={this.handleChange} type="text" name="body" placeholder={this.props.task.body} />
        </label>
        <br />
        <label className="editLabel">Priority:<br />
          <select className="editSelect" onChange={this.handleChange} name="priority">
            <option>{this.props.task.priority}</option>
            <option value="Low">Low</option>
            <option value="Medium">Medium</option>
            <option value="High">High</option>
            <option value="Blocker">Blocker</option>
          </select>
        </label>
        <br />
        <label className="editLabel">Status:<br />
          <select className="editSelect" onChange={this.handleChange} name="status">
            <option>{this.props.task.status}</option>
            <option value="Queue">Queue</option>
            <option value="In Progress">In Progress</option>
            <option value="Done">Done</option>
          </select>
        </label>
        <br />
        <label className="editLabel">Created By:<br />
          <input className="editInput" onChange={this.handleChange} type="text" name="createdBy" placeholder={this.props.task.createdBy} />
        </label>
        <br />
        <label className="editLabel">Assigned To:<br />
          <input className="editInput" onChange={this.handleChange} type="text" name="assignedTo" placeholder={this.props.task.assignedTo} />
        </label>

        <button className="editSubmitBtn" type="submit" >Update!</button>

      </form>
    )
  }
}

export default connect()(EditForm);