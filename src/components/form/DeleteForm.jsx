import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deleteTask } from '../../actions/actions.js';

class DeleteForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
      id: this.props.task.id,
      title: this.props.task.title,
      body: this.props.task.body,
      priority: this.props.task.priority,
      status: this.props.task.status,
      createdBy: this.props.task.createdBy,
      assignedTo: this.props.task.assignedTo
    }
  }

  handleDelete = (e) => {
    console.log("handleSubmit - DELETE - this.props:", this.props.task);
    e.preventDefault();
    console.log('\n Deleted!!:', this.state);
    console.log('\n Deleted id:', this.props.task.id);
    this.props.dispatch(deleteTask(this.state, this.props.task.id));
  }

  render() {
    return (
      <form className="deleteForm" onSubmit={this.handleDelete}>
        <p className="deleteConfirm">Are you sure you want to delete this task?</p>
        <label className="deleteLabel">Task ID:<br />
          <input className="deleteInput" type="text" name="title" value={this.props.task.id} readOnly />
        </label>
        <br />
        <label className="deleteLabel">Title:<br />
          <input className="deleteInput" onChange={this.handleChange} type="text" name="title" value={this.props.task.title} readOnly />
        </label>
        <br />
        <label className="deleteLabel">Body:<br />
          <input className="deleteInput" onChange={this.handleChange} type="text" name="body" value={this.props.task.body} readOnly />
        </label>

        <button className="deleteSubmitBtn" type="submit" >Delete Task</button>

      </form>
    )
  }
}

export default connect()(DeleteForm);