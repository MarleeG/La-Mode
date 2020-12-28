import React, { useEffect, useState } from "react";

import "./button.css";

const Button = (props) => {
  const { text, styles, classes, type, hover } = props;
  const [animatedClasses, updateAnimatedClasses] = useState("");

//   useEffect(() => {
//     if (hover) {
//     }
//   }, []);


  return (
    <button
      style={styles}
      className={`${classes} ${animatedClasses !== "" && animatedClasses}`}
      type={type|| 'button'}
      onMouseEnter={() => {
        if (hover) {
          updateAnimatedClasses(hover);
        }
      }}
      onMouseLeave={() => {
        updateAnimatedClasses("");
      }}
    >
      {text || ""}
    </button>
  );
};

export default Button;
