import React, { useState } from "react";

import "./NavigationIcon.css";

const initialStyle = {
  width: "2vw",
  height: "2px",
  backgroundColor: "#623b3c",
  margin: "10px",
  display: "block",
};

const firstBarStyle = {
  active: {
    transform: "rotate(45deg)",
    left: "0",
    right: "0",
    top: "11px",
    position: "absolute",
    marginTop: "15px",
    marginBottom: "15px",
    transitionDuration: "0.5s",
    //   -webkit-transition-duration: 0.5s;
    //   -moz-transition-duration: 0.5s;
    //   -o-transition-duration: 0.5s;
  },
};

const thirdBarStyle = {
  active: {
    transform: "rotate(-45deg)",
    left: "0",
    right: "0",
    bottom: "11px",
    position: "absolute",
    marginTop: "15px",
    marginBottom: "15px",
    transitionDuration: "0.5s",

    // -webkit-transition-duration: 0.5s;
    // -moz-transition-duration: 0.5s;
    // -o-transition-duration: 0.5s;
  },
};

const secondBarStyle = {
  active: {
    visibility: "hidden",
  },
};

const NavigationIcon = (props) => {
  const [currentBarStyles, updateCurrentBarStyles] = useState({
    // middle: middleSpanStyle.initial,
    // others: otherSpanStyle.initial,

    one: { initialStyle },
    two: { initialStyle },
    three: { initialStyle },
  });

  const handleStyleChange = () => {
    updateCurrentBarStyles({
      ...currentBarStyles,
      one: firstBarStyle.active,
      two: secondBarStyle.active,
      three: thirdBarStyle.active,
    });
  };

  return (
    <span className="navigationIcon__container" onClick={handleStyleChange}>
      {["one", "two", "three"].map((order, idx) => {
        return (
          <div
            className={`navigationIcon__bar navigationIcon__bar-${order}`}
            key={idx}
            style={
              (order === "one" && currentBarStyles.one) ||
              (order === "two" && currentBarStyles.two) ||
              (order === "three" && currentBarStyles.three)
            }
          ></div>
        );
      })}
    </span>
  );
};

export default NavigationIcon;
