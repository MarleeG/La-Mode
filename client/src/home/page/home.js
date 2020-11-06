import React from "react";

import "./home.css";
import Button from "../../UIElements/button";
import NavigationIcon from "../components/NavigationIcon";
const Home = () => {
  return (
    <div className="home__container center">
      <div className="home__wrapper">
        {/* <p className="" style={{display: "inline"}}>In Fashion</p> */}

        <div className="home__user-navigation-options">
          <NavigationIcon />

          <div className="home__user-navigation-options-button-wrapper">
            <Button
              text="Sign up"
              classes="button-home__homepage-btn font-ghotel"
              // hover="animate__animated animate__pulse"
            />
            <Button
              text="Sign in"
              classes="button-home__homepage-btn font-ghotel"
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
