import React, { Component } from 'react';

import './item-status-filter.css';

export default class ItemStatusFilter extends Component {

  buttons = [
    { name: 'all', label: 'All' },
    { name: 'active', label: 'Active' },
    { name: 'done', label: 'Done' }
  ]
  render() {
    const { filter } = this.props;

    const buttons = this.buttons.map(({ name, label }) => {
      const isActive = filter === name;
      const clazz = isActive ? "btn-info" : 'btn-outline-secondary';
      return (
        <button 
        key={name} 
        type="button" 
        onClick={() => this.props.onFilterChange(name)}
        className={`btn ${clazz}`}>{label}</button>
      );
    });

    return (<div>{buttons}</div>);
    //MY BAD CODE
    // return (
    //   <div className="btn-group">
    //     <button type="button" onClick={this.props.all}
    //       className={'btn ' + ((this.props.btnActive === 'All') ? 'btn-info' : 'btn-outline-secondary')}>All</button>
    //     <button type="button" onClick={this.props.onlyActive}
    //       className={'btn ' + ((this.props.btnActive === 'Active') ? 'btn-info' : 'btn-outline-secondary')}>Active</button>
    //     <button type="button" onClick={this.props.onlyDone}
    //       className={'btn ' + ((this.props.btnActive === 'Done') ? 'btn-info' : 'btn-outline-secondary')}>Done</button>
    //   </div>
    // );
  };
}

