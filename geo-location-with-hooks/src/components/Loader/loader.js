import React, { Component } from "react";
import "./loader.css";

export default class loader extends Component {
  render() {
    return (
      <div className="ui active dimmer">
        <div className="ui large text loader">{this.props.message}</div>
      </div>
    );
  }
}

loader.defaultProps = {
  message: "Loading...",
};
