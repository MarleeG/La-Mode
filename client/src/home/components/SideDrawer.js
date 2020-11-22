import React, { useState, useEffect } from "react";

import "./SideDrawer.css";

const log = console.log;
const SideDrawer = (props) => {
  const { showNav, openNavClickedOnce } = props;
  const [currentAnimation, updateCurrentAnimation] = useState("growWidth");

  const [sideNavStyle, updateSideNavStyle] = useState({
    // width: `${showNav ? "20%" : "0%"}`,
    width: "0%",

    // display: `${showNav ? 'block': 'none'}`
  });

  useEffect(() => {
    if (showNav) {
      // log(true);
      // log(sideNavStyle);

      // log(`showNav: ${showNav}`);

      updateSideNavStyle({
        ...sideNavStyle,
        width: "20%",
        animation: `growWidth 0.5s`,
      });
      // log("---------");
    } else {
      // log(false);
      // log(sideNavStyle);
      // log(`showNav: ${showNav}`);


      if(openNavClickedOnce){
        updateSideNavStyle({
          ...sideNavStyle,
          width: "0%",
          width: "0%",
          animation: `shrinkWidth 0.5s`,
        });
      }
      

      // log("---------");
    }

    log(showNav);
  }, [showNav]);

  return <aside style={sideNavStyle}>Side Drawer</aside>;
};

export default SideDrawer;
