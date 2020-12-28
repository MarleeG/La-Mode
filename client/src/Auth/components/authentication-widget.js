import React, { useState } from "react";
import Button from "../../UIElements/button";
import Input from "../../UIElements/Input";

import "./authentication-widget.css";
const log = console.log;
const AuthenticationWidget = (props) => {
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
    // [name](value)
  };
  return (
    <div className="AW-container center">
      <h3>
        <span>Sign in</span> or <span>Sign up</span>
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
