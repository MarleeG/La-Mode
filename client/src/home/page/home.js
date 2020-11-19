import React, { useState } from "react";

import "./home.css";
import Button from "../../UIElements/button";
import NavigationIcon from "../components/NavigationIcon";
import Navigation from "../components/Navigation";
const Home = () => {
  const [showNav, handleShowNav] = useState(false);
  return (
    <div className="home__container center">
      <div className="home__wrapper">
        {showNav && <Navigation />}

        <div  className="home__user-navigation-options">
          {/* <div className="home__nav">
          </div> */}

          <NavigationIcon handleShowNav={handleShowNav} />

          <div className="home__user-navigation-options-button-wrapper">
            <Button
              text="Sign up"
              classes="button-home__homepage-btn button-home__sign-up font-ghotel"
              // hover="animate__animated animate__pulse"
            />
            <Button
              text="Sign in"
              classes="button-home__homepage-btn button-home__sign-in font-ghotel"
              // hover="animate__animated animate__pulse"
            />
          </div>
        </div>

        <h1 className="center-text-in-div font-ghotel">Á La Mode</h1>
      </div>
    </div>
  );
};

export default Home;
