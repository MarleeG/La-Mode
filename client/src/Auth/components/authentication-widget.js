import React, { useState, useEffect, Fragment } from "react";
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
    fontSize: "33px",
    wordSpacing: "0px",
  },
  inactive: {
    color: "grey",
    wordSpacing: "0px",
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

  // inputs
  const [username, updateUsername] = useState("");
  const [passwordInputOne, updatePasswordInputOne] = useState("");
  const [passwordSignUpTwo, updatePasswordSignUpTwo] = useState("");

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

      case "input_password-one":
        updatePasswordInputOne(value);
        break;

      case "input_password-two":
        updatePasswordSignUpTwo(value);
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

  const handleAuthTypeHoverStyle = (hover, e) => {
    const {innerHTML} = e.target;
    if (hover === "enter") {
      if (
        authWidgetType === "sign-in" && innerHTML === 'Sign up'

      ) {
        updateAuthWidgetSignUpStyle({
          ...authWidgetSignUpStyle,
          textDecoration: "underline",
        });
      } 
      
      else if (
        authWidgetType === "sign-up" &&
        innerHTML === 'Sign in'
      ) {
        updateAuthWidgetSignInStyle({
          ...authWidgetSignInStyle,
          textDecoration: "underline",
        });
      }

    } else {
      if (
        authWidgetType === "sign-in"
      ) {
        updateAuthWidgetSignUpStyle(authWidgetTypeStyles.inactive);
      } else if (
        authWidgetType === "sign-up"
      ) {
        updateAuthWidgetSignInStyle(authWidgetTypeStyles.inactive);
      }
    }
  };

  useEffect(() => {
    log("authWidgetSignInStyle ", authWidgetSignInStyle);
    log("authWidgetSignUpStyle ", authWidgetSignUpStyle);
  }, [authWidgetSignUpStyle, authWidgetSignInStyle]);

  return (
    <div className="AW-container center">
      <h3 style={{ color: "#c9c8c7", wordSpacing: "3px" }}>
        <span
          style={authWidgetSignInStyle}
          onClick={() => handleAuthWidgetType("sign-in")}
          onMouseEnter={(e) => handleAuthTypeHoverStyle("enter", e)}
          onMouseLeave={(e) => handleAuthTypeHoverStyle("leave", e)}
        >
          Sign in
        </span>{" "}
        or{" "}
        <span
          style={authWidgetSignUpStyle}
          onClick={() => handleAuthWidgetType("sign-up")}
          onMouseEnter={(e) => handleAuthTypeHoverStyle("enter", e)}
          onMouseLeave={(e) => handleAuthTypeHoverStyle("leave", e)}
        >
          Sign up
        </span>
      </h3>

      <form onSubmit={handleSubmit}>
        <Input
          type="text"
          value={username}
          name="input_username"
          placeholder="user@email.com"
          handleInputChange={handleInputChange}
        />

        <Input
          type="password"
          value={passwordInputOne}
          name="input_password-one"
          placeholder="·········"
          handleInputChange={handleInputChange}
        />

        {authWidgetType === "sign-up" && (
          <Input
            type="password"
            value={passwordSignUpTwo}
            name="input_password-two"
            placeholder="·········"
            handleInputChange={handleInputChange}
          />
        )}

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
