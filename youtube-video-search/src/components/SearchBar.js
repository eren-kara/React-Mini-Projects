import React, { Component } from "react";

export default class SearchBar extends Component {
  state = {
    inputValue: "Bogazici University",
  };

  onFormSubmit = (e) => {
    e.preventDefault();
    this.props.onSearchSubmit(this.state.inputValue);
  };

  render() {
    return (
      <form
        style={{ width: "100%", textAlign: "center", marginTop: "20px" }}
        onSubmit={this.onFormSubmit}
      >
        <div className="ui search large">
          <div style={{ width: "100%" }} className="ui icon input large">
            <input
              className="prompt"
              type="text"
              placeholder="Search in Youtube"
              value={this.state.inputValue}
              onChange={(e) => this.setState({ inputValue: e.target.value })}
              autoFocus={true}
            />
            <i className="search icon"></i>
          </div>
        </div>
      </form>
    );
  }
}
