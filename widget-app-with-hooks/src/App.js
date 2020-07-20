import React, { useState } from "react";
import Accordion from "./components/Accordion";
import Search from "./components/Search";
import Dropdown from "./components/Dropdown";
import Translate from "./components/Translate";
import Route from "./components/Route";
import Header from "./components/Header";

const App = () => {
  const items = [
    {
      title: "Who is Eren ?",
      content:
        "Eren is senior Management Information Systems student at Bogazici University.",
    },
    {
      title: "What are interests of Eren ?",
      content: "Coding, reading, theatre, football, basketball, F1...",
    },
    {
      title: "What is the motivation of Eren ?",
      content:
        "Learning new things, discovering new areas and meeting new people",
    },
  ];

  const options = [
    {
      label: "Red",
      value: "red",
    },
    {
      label: "Green",
      value: "green",
    },
    {
      label: "Blue",
      value: "blue",
    },
  ];

  const [selected, setSelected] = useState(options[0]);

  return (
    <div className="ui container">
      <Header />
      <Route path="/">
        <Accordion items={items} />
      </Route>
      <Route path="/search">
        <Search />
      </Route>
      <Route path="/dropdown">
        <Dropdown
          label="Select a color"
          options={options}
          selected={selected}
          setSelected={setSelected}
        />
      </Route>
      <Route path="/translate">
        <Translate />
      </Route>
    </div>
  );
};

export default App;
