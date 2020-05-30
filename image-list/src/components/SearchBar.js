import React, { Component } from "react";

export default class SearchBar extends Component {
  state = { inputValue: "" };

  onFormSubmit = (event) => {
    event.preventDefault();

    this.props.onSubmit(this.state.inputValue);
  };

  render() {
    return (
      <div className="ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <label>Search Image</label>
            <input
              onChange={(e) => this.setState({ inputValue: e.target.value })}
              type="text"
              value={this.state.inputValue}
            />
          </div>
        </form>
      </div>
    );
  }
}
