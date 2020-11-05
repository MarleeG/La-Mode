import React from "react";

import "./home.css";
import Button from "../../UIElements/button";
const Home = () => {
  return (
    <div className="home__container center">
      <div className="home__wrapper">
        <h1 className="center-text-in-div font-apple">Á La Mode</h1>

        {/* <p className="" style={{display: "inline"}}>In Fashion</p> */}

        {/* <Button text="View Products"/> */}
        <div className="home__button-wrapper">
          <Button text="Sign up" classes="button-home__homepage-btn" />
          <Button text="Sign in" classes="button-home__homepage-btn" />
        </div>
      </div>
    </div>
  );
};

export default Home;
