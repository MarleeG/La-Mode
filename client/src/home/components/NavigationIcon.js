import React, { useState } from "react";

import "./NavigationIcon.css";

const initialStyle = {
  width: "3vw",
  height: "10px",
  backgroundColor: "#623b3c",
  borderRadius: "4px",
  margin: "auto",
  // transition: ".09s",
  transition: ".8s",

  transitionProperty: "height",
};

const barStyles = {
  initial: initialStyle,
  active: {
    ...initialStyle,
    position: "absolute",
    height: "20px",
    left: '20vw', 
  transition: ".1s",

  },
};

const NavigationIcon = (props) => {
  const [currentBarStyles, updateCurrentBarStyles] = useState(
    barStyles.initial
  );

  const [barStyleStatus, updateBarStyleStatus] = useState("initial");

  const handleStyleChange = () => {
    if (barStyleStatus === "initial") {
      updateCurrentBarStyles(barStyles.active);

      updateBarStyleStatus("active");

      props.handleShowNav(true);
    } else if (barStyleStatus === "active") {
      updateCurrentBarStyles(barStyles.initial);
      updateBarStyleStatus("initial");

      props.handleShowNav(false);
    }
  };

  return (
    <span className="navigationIcon__container" onClick={handleStyleChange}>
      {["one", "two"].map((order, idx) => {
        return (
          <div
            className={`navigationIcon__bar navigationIcon__bar-${order}`}
            key={idx}
            style={currentBarStyles}
          ></div>
        );
      })}
    </span>
  );
};

export default NavigationIcon;
