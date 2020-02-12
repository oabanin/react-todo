import React, { Component } from 'react';

import './item-status-filter.css';

export default class ItemStatusFilter extends Component {
  render() {
    return (
      <div className="btn-group">
        <button type="button" onClick={this.props.all}
          className={'btn ' + ((this.props.btnActive === 'All') ? 'btn-info' : 'btn-outline-secondary')}>All</button>
        <button type="button" onClick={this.props.onlyActive}
          className={'btn ' + ((this.props.btnActive === 'Active') ? 'btn-info' : 'btn-outline-secondary')}>Active</button>
        <button type="button" onClick={this.props.onlyDone}
          className={'btn ' + ((this.props.btnActive === 'Done') ? 'btn-info' : 'btn-outline-secondary')}>Done</button>
      </div>
    );
  };
}

