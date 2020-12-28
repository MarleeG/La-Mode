import React, { useState, useEffect } from "react";
import Button from "../../UIElements/button";
import Input from "../../UIElements/Input";

import "./authentication-widget.css";
const log = console.log;

const authWidgetTypeStyles = {
  active: {
    color: "#af8d82",
    textDecoration: "underline",
    // font-family: 'Grand Hotel', cursive;
    fontFamily: "Grand Hotel, cursive",
    fontSize: '33px', 
    wordSpacing: '0px'
  },
  inactive: {
    color: "grey",
    wordSpacing: '0px'
  },
};

const AuthenticationWidget = (props) => {
  const [authWidgetType, updateAuthWidgetType] = useState("sign-in");

  const [authWidgetSignInStyle, updateAuthWidgetSignInStyle] = useState(
    authWidgetTypeStyles.active
  );

  const [authWidgetSignUpStyle, updateAuthWidgetSignUpStyle] = useState(
    authWidgetTypeStyles.inactive
  );

  const [username, updateUsername] = useState("");
  const [passwordSignIn, updatePasswordSignIn] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    log(`name: ${name}\n value: ${value}`);

    switch (name) {
      case "input_username":
        updateUsername(value);
        break;

      case "input_password-sign-in":
        updatePasswordSignIn(value);
        break;

      default:
        alert(`input ${name} not available`);
    }
  };

  const handleAuthWidgetType = (type) => {
    if (type === "sign-in") {
      updateAuthWidgetSignInStyle(authWidgetTypeStyles.active);
      updateAuthWidgetSignUpStyle(authWidgetTypeStyles.inactive);
    } else {
      updateAuthWidgetSignUpStyle(authWidgetTypeStyles.active);
      updateAuthWidgetSignInStyle(authWidgetTypeStyles.inactive);
    }

    updateAuthWidgetType(type);
  };

  useEffect(() => {}, []);

  return (
    <div className="AW-container center">
      <h3 style={{ color: "#c9c8c7" , wordSpacing: '3px'}}>
        <span
          style={authWidgetSignInStyle}
          onClick={() => handleAuthWidgetType("sign-in")}
        >
          Sign in
        </span>{" "}
        or{" "}
        <span
          style={authWidgetSignUpStyle}
          onClick={() => handleAuthWidgetType("sign-up")}
        >
          Sign up
        </span>
      </h3>

      <form onSubmit={handleSubmit}>
        <Input
          type="text"
          value={username}
          name="input_username"
          // name="updateUsername"
          placeholder="user@email.com"
          handleInputChange={handleInputChange}
        />

        <Input
          type="password"
          value={passwordSignIn}
          name="input_password-sign-in"
          placeholder="·········"
          handleInputChange={handleInputChange}
        />

        <Button
          text="Sign in"
          classes="
          auth__btn 
          font-ghotel"
          type="submit"
        />
      </form>
    </div>
  );
};

export default AuthenticationWidget;
