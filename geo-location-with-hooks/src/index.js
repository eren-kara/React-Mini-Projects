import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";

import SeasonDisplay from "./components/SeasonDisplay/SeasonDisplay";
import Loader from "./components/Loader/loader";
import useLocation from "./useLocation";

const App = () => {
  const [lat, errorMessage] = useLocation();

  if (errorMessage) return <div>{errorMessage}</div>;
  else if (lat) return <SeasonDisplay location={lat} />;
  else return <Loader message={"Please accept location request"} />;
};

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;
