import React, { Component } from 'react';

import './todo-list-item.css';


export default class TodoListItem extends Component {

  state = {
    done: false,
    important: false
  }

  onMarkImportant = () => {
    // this.setState({ important: !this.state.important  }) - wrong approach, state setState is Async
    this.setState((state) => { // right approach    
      return { important: !state.important }
    });
  
  
}

onLabelClick = () => {
  this.setState(({ done }) => ({ done: !done })); //destructuring  of done in state 
}


render() {
  const { label, onDeleted } = this.props;
  const { done, important } = this.state;

  let classNames = "todo-list-item";

  if (done) {
    classNames += " done";
  }

  if (important) {
    classNames += " important";
  }



  return (
    <span className={classNames}>
      <span
        onClick={this.onLabelClick}
        className="todo-list-item-label">
        {label}
      </span>

      <button type="button"
        onClick={this.onMarkImportant}
        className="btn btn-outline-success btn-sm float-right">
        <i className="fa fa-exclamation" />
      </button>

      <button type="button"
        onClick={onDeleted}
        className="btn btn-outline-danger btn-sm float-right">
        <i className="fa fa-trash-o" />
      </button>
    </span>
  );
};
}
