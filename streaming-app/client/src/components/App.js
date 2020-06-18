import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";

import StreamList from "./streams/StreamList";
import StreamDelete from "./streams/StreamDelete";
import StreamEdit from "./streams/StreamEdit";
import StreamShow from "./streams/StreamShow";
import StreamCreate from "./streams/StreamCreate";
import Header from "./Header";

const App = () => {
  return (
    <div className="ui container">
      <BrowserRouter>
        <Route exact path="/" component={StreamList} />
        <Route exact path="/streams/delete" component={StreamDelete} />
        <Route exact path="/streams/new" component={StreamCreate} />
        <Route exact path="/streams/show" component={StreamShow} />
        <Route exact path="/streams/edit" component={StreamEdit} />
      </BrowserRouter>
    </div>
  );
};

export default App;
