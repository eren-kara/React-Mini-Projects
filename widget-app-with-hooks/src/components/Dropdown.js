import React, { useState, useEffect, useRef } from "react";

export default function Dropdown({ label, options, selected, setSelected }) {
  const [open, setOpen] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const onBodyClick = (event) => {
      if (!ref.current.contains(event.target)) setOpen(false);
    };
    document.addEventListener("click", onBodyClick);

    return () => {
      document.removeEventListener("click", onBodyClick);
    };
  }, []);

  const renderItems = options.map((option) => {
    if (selected.value === option.value) {
      return null;
    }
    return (
      <div
        onClick={() => onSelectedClick(option)}
        key={option.value}
        className="item"
      >
        {option.label}
      </div>
    );
  });

  const onSelectedClick = (option) => {
    setSelected(option);
  };
  return (
    <div ref={ref} className="ui form">
      <div className="field">
        <label className="label">{label}</label>
        <div
          onClick={() => setOpen(!open)}
          className={`ui selection dropdown ${open ? "visible active" : ""}`}
        >
          <i className="dropdown icon"></i>
          <div className="text">{selected.label}</div>
          <div className={`menu ${open ? "visible transition" : ""}`}>
            {renderItems}
          </div>
        </div>
      </div>
    </div>
  );
}
