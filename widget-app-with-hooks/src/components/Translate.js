import React, { useState, useEffect } from "react";
import Dropdown from "./Dropdown";
import Convert from "./Convert";

export default function Translate() {
  const options = [
    {
      label: "Turkish",
      value: "tr",
    },
    {
      label: "Spanish",
      value: "es",
    },
    {
      label: "English",
      value: "en",
    },
  ];

  const [text, setText] = useState("");
  const [debouncedText, setDebouncedText] = useState(text);
  const [language, setLanguage] = useState(options[0]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedText(text);
    }, 500);
    return () => {
      clearTimeout(timer);
    };
  }, [text]);

  return (
    <div>
      <div className="ui form">
        <div className="field">
          <label>Enter text</label>
          <input
            className="input"
            value={text}
            onChange={(e) => setText(e.target.value)}
          ></input>
        </div>
      </div>
      <Dropdown
        label={"Select a language to translate text"}
        options={options}
        selected={language}
        setSelected={setLanguage}
      />
      <hr />
      <h3 className="ui header">Output</h3>
      <Convert text={debouncedText} language={language} />
    </div>
  );
}
