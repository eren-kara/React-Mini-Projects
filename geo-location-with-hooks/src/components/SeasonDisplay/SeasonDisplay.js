import React from "react";
import "./SeasonDisplay.css";

const seasonConfig = {
  winter: {
    text: "It's cold !",
    iconName: "snowflake",
  },
  summer: {
    text: "So hot !",
    iconName: "sun",
  },
};

const getSeason = (lat, month) => {
  if (month > 2 && month < 9) {
    return lat > 0 ? "summer" : "winter";
  } else {
    return lat > 0 ? "winter" : "summer";
  }
};

export const SeasonDisplay = (props) => {
  const season = getSeason(props.location, new Date().getMonth());
  const { text, iconName } = seasonConfig[season];

  return (
    <div className={`${season} SeasonDisplay`}>
      <i className={`icon-left ${iconName} icon massive`} />
      <h1>{text}</h1>
      <i className={`icon-right ${iconName} icon massive`} />
    </div>
  );
};

export default SeasonDisplay;
