import React, { Component } from "react";
import ReactDOM from "react-dom";
import SeasonDisplay from "./components/SeasonDisplay/SeasonDisplay";
import Loader from "./components/Loader/loader";

export default class App extends Component {
  state = { lat: null };

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(
      (position) => this.setState({ lat: position.coords.latitude }),
      (err) => this.setState({ errorMessage: err.message })
    );
  }

  render() {
    if (this.state.errorMessage) return <div>{this.state.errorMessage}</div>;
    else if (this.state.lat) return <SeasonDisplay location={this.state.lat} />;
    else return <Loader message={"Please accept location request"} />;
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
