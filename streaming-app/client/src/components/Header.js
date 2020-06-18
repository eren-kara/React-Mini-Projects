import React from "react";
import { Link } from "react-router-dom";
import GoogleAuth from "../components/GoogleAuth";

export default function Header() {
  return (
    <div className="ui secondary pointing menu">
      <Link to="/">Streamy</Link>
      <div className="right menu">
        <Link to="/">All Streams</Link>
        <Header />
      </div>
    </div>
  );
}
