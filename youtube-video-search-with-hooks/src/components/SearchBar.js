import React, { useState } from "react";

export default function SearchBar({ onSearchSubmit }) {
  const [inputValue, setInputValue] = useState("Bogazici University");

  const onFormSubmit = (e) => {
    e.preventDefault();
    onSearchSubmit(inputValue);
  };

  return (
    <form
      style={{ width: "100%", textAlign: "center", marginTop: "20px" }}
      onSubmit={onFormSubmit}
    >
      <div className="ui search large">
        <div style={{ width: "100%" }} className="ui icon input large">
          <input
            className="prompt"
            type="text"
            placeholder="Search in Youtube"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            autoFocus={true}
          />
          <i className="search icon"></i>
        </div>
      </div>
    </form>
  );
}
