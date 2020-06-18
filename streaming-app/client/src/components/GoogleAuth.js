import React, { Component } from "react";

export default class GoogleAuth extends Component {
  componentDidMount() {
    window.gapi.load("client:auth2", () =>
      window.gapi.load.init({
        clientId:
          "403309224722-dlkt0jo1btd19lgj9sg1lku450m9dvln.apps.googleusercontent.com",
        scope: "email",
      })
    );
  }
  render() {
    return <div>Login</div>;
  }
}
