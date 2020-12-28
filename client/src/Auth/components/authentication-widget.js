import React from "react";
import Button from "../../UIElements/button";
import Input from "../../UIElements/Input";

import "./authentication-widget.css";
const AuthenticationWidget = (props) => {
  return (
    <div className="AW-container center">
      <h3>
        <span>Sign in</span> or <span>Sign up</span>
      </h3>

      <form>
        <Input
          type="text"
          type="username"
          value=""
          placeholder="user@email.com"
        />

        <Input
          type="password"
          type="password"
          value=""
          placeholder="·········"
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
