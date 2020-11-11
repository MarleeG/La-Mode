import React, { useState } from "react";

import "./NavigationIcon.css";

const initialStyle = {
  width: "2vw",
  height: "2px",
  backgroundColor: "#623b3c",
  margin: "10px",
  display: "block",
  transition: "visibility 0s, opacity 0.5s linear"
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
  },
};

const secondBarStyle = {
  active: {
    visibility: "hidden",
  },
};

const NavigationIcon = (props) => {
  const [currentBarStyles, updateCurrentBarStyles] = useState({
    one: initialStyle,
    two: initialStyle,
    three: initialStyle,
  });
  const [barStyleStatus, updateBarStyleStatus] = useState("initial");

  const handleStyleChange = () => {
    if (barStyleStatus === "initial") {
      updateCurrentBarStyles({
        ...currentBarStyles,
        one: firstBarStyle.active,
        two: secondBarStyle.active,
        three: thirdBarStyle.active,
      });

      updateBarStyleStatus("active");
    } else {
      updateCurrentBarStyles({
        ...currentBarStyles,
        one: initialStyle,
        two: initialStyle,
        three: initialStyle,
      });

      updateBarStyleStatus("initial");
    }
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