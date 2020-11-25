import React from "react";

import "./Backdrop.css";
const Backdrop = (props) => {
  const { show } = props;
  return <div className="backdrop-container" style={{ display: `${show ? "block" : "none"}` }}></div>;
};

export default Backdrop;
