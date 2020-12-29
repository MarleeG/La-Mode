import React, { useState, useEffect } from "react";

import "./SideDrawer.css";

const log = console.log;
const SideDrawer = (props) => {
  const { showNav, openNavClickedOnce } = props;
  const [currentAnimation, updateCurrentAnimation] = useState("growWidth");

  const [sideNavStyle, updateSideNavStyle] = useState({
    width: "0%",
  });

  useEffect(() => {
    if (showNav) {
      updateSideNavStyle({
        ...sideNavStyle,
        width: "20%",
        animation: `growWidth 0.5s`,
      });
    } else {
      if (openNavClickedOnce) {
        updateSideNavStyle({
          ...sideNavStyle,
          width: "0%",
          animation: `shrinkWidth 0.5s`,
        });
      }
    }

    log(showNav);
  }, [showNav]);

  return <aside style={sideNavStyle}>Side Drawer</aside>;
};

export default SideDrawer;