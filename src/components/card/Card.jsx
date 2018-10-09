import React, { Component } from 'react';


class Card extends Component {

  constructor(props) {
    super(props);
    this.state = {


    }
  }

  render() {
    return (
      <div className="Card">
        <header className="Card-header">
          <h1 className="columnTitle">Card</h1>
        </header>
        <p className="cardTitle">Title</p>
        <p className="cardBody">Body details</p>
        <p className="cardPriority">Low, Medium, High, Blocker</p>
        <p className="cardStatus">Queue, In Progress, Done</p>
        <p className="cardCreatedBy">Full Name</p>
        <p className="cardAssignedTo">Full Name</p>
      </div>
    )
  }

}

export default Card;