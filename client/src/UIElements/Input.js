import React from "react";

import "./Input.css";
const Input = (props) => {
  const { type, value, name, placeholder, handleInputChange } = props;
  return (
    <input
      type={type || "text"}
      value={value}
      placeholder={placeholder}
      onChange={handleInputChange}
      name={name}
    />
  );
};

export default Input;
