import React from "react";

import "./Input.css";
const Input = (props) => {
  const { type, value, handleInputChange } = props;
  return (
    <input type={type || "text"} value={value} onChange={handleInputChange} />
  );
};

export default Input;
