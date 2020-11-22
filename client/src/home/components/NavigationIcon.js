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
  active: {
    ...initialStyle,
    position: "absolute",
    height: "20px",
    left: "20vw",
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
    } 
    
    else if (barStyleStatus === "active") {

      updateCurrentBarStyles({
        ...barStyles.initial,
        // animation: "moveRight .6s" 
      });


      // updateCurrentBarStyles({
      //   ...barStyles.initial,
      //   animation: "moveRight .6s",
      // });
      updateBarStyleStatus("initial");

      log("active -> initial");
      log(currentBarStyles);

      // ,

      // this will update if the nav should be shown
      props.handleShowNav(false);
    }
  };

  useEffect(() => {

    log(currentBarStyles);

    if (openNavClickedOnce && barStyleStatus === "initial") {




      // updateCurrentBarStyles({
      //   ...currentBarStyles,
      //   // animation: "moveRight .6s",
      //   left: "0",
      //   margin: '10px', 
      //   transition: "height .8s",
      // });

    } else if(barStyleStatus === "active"){
    }



    // else {
    //   updateCurrentBarStyles({
    //     ...barStyles.initial
    //   });

    // }
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
