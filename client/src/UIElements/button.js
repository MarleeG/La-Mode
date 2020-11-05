import React from "react";

import "./button.css";

const Button = (props) => {
  const { text, styles, classes } = props;
  return (
    <button style={styles} className={classes}>
      {text || ""}
    </button>
  );
};

export default Button;
