import React from 'react';

import './search-panel.css';

export default class SearchPanel extends React.Component {



  onLabelChange = (e) => {
    this.props.onSearch(e.target.value);
  }
  render() {
    return (
      <input type="text"
        className="form-control search-input"
        placeholder="type to search"
       // value={this.state.label}
        onChange={this.onLabelChange}
        />
    );
  }
};

