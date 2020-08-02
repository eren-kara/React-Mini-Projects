import React from "react";
import { Link } from "react-router-dom";
import GoogleAuth from "../components/GoogleAuth";

export default function Header() {
  return (
    <div className="ui secondary pointing menu">
      <Link className="item" to="/">
        Streamy
      </Link>
      <div className="right menu">
        <Link className="item" to="/">
          All Streams
        </Link>
        <GoogleAuth className="item" />
      </div>
    </div>
  );
}
