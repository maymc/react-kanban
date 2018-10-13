import React, { Component } from 'react';


class Card extends Component {

  constructor(props) {
    super(props);
  }

  //Render always returns HTML elements, it is like your template
  render() {
    console.log("\nCard component props:", this.props.tasks);

    return (
      <div key={this.props.tasks.id} className="Card">
        <div className="cardInfo">
          <header className="Card-header">
            <h1 className="columnTitle">Card</h1>
          </header>
          <p className="cardTitle">{this.props.tasks.title}</p>
          <p className="cardBody">{this.props.tasks.body}</p>
          <p className="cardPriority">{this.props.tasks.priority}</p>
          <p className="cardStatus">{this.props.tasks.status}</p>
          <p className="cardCreatedBy">{this.props.tasks.createdBy}</p>
          <p className="cardAssignedTo">{this.props.tasks.assignedTo}</p>
        </div>
      </div>
    )
  }

}

export default Card;