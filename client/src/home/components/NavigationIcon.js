import React from "react";

import "./NavigationIcon.css";

const NavigationIcon = (props) => {
  return (
    <span className="navigationIcon__container">
      {["one", "two", "three"].map((order, idx) => {
        return (
          <div
            className={`navigationIcon__bar navigationIcon__bar-${order}`}
            key={idx}
          ></div>
        );
      })}
    </span>
  );
};

export default NavigationIcon;
