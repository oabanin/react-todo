import React from 'react';

import './search-panel.css';

export default class SearchPanel extends React.Component {


  //MY VARIANT - BAD practice - uncontrolled component
  // onLabelChange = (e) => {
  //   this.props.onSearch(e.target.value);
  // }

  //TEACHERS VARIANT
  onSearchChange = (e) => {
    const term = e.target.value;
    this.setState({term});
    this.props.onSearchChange(term);
  }

  state = {
    term: ''
  }
  


  render() {
    return (
      <input type="text"
        className="form-control search-input"
        placeholder="type to search"
        value={this.state.term}
        onChange={this.onSearchChange}
        />
    );
  }
};

