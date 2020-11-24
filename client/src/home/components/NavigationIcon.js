import React, { useState, useEffect } from "react";

import "./NavigationIcon.css";

const initialStyle = {
  width: "3vw",
  height: "10px",
  backgroundColor: "#623b3c",
  borderRadius: "4px",
  margin: "auto",
  transition: "height .8s",
};

const barStyles = {
  initial: initialStyle,
  intialActive: {
    ...initialStyle,
    height: "10px",
    transition: "height .8s",
    animation: "moveRight .6s",
  },
  active: {
    ...initialStyle,
    position: "absolute",
    left: "20vw",
    height: "20px",
    transition: "height .1s",
    animation: "moveLeft .4s",
  },
};

const log = console.log;
const NavigationIcon = (props) => {
  const { openNavClickedOnce } = props;
  const [currentBarStyles, updateCurrentBarStyles] = useState(
    barStyles.initial
  );

  const [barStyleStatus, updateBarStyleStatus] = useState("initial");

  const handleStyleChange = () => {
    if (barStyleStatus === "initial") {
      updateCurrentBarStyles(barStyles.active);
      updateBarStyleStatus("active");

      // updates if the navigation should show or not
      props.handleShowNav(true);
      props.updateOpenNavClickedOnce(true);

      log("initial ->  active");

      log(currentBarStyles);
    } else if (barStyleStatus === "active") {
      log("active => initial");

      updateCurrentBarStyles(barStyles.intialActive);

      updateBarStyleStatus("initial");

      log(currentBarStyles);
      // this will update if the nav should be shown
      props.handleShowNav(false);
    }
  };

  useEffect(() => {

    if (openNavClickedOnce && barStyleStatus === "initial") {
      log("INITIAL");

    } else if (barStyleStatus === "active") {
    }

  }, [openNavClickedOnce, barStyleStatus]);

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