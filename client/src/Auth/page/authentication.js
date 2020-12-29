import React from "react";
import { Link } from "react-router-dom";
import AuthenticationWidget from "../components/authentication-widget";

import "./authentication.css";

const Auth = (props) => {
  return (
    <div className="auth_container center">
      {/* center-text-in-div */}
      <Link to="/">
        <div className="auth_container__back-arrow">⇐</div>
      </Link>

      <h2 className="auth__header font-ghotel">Á La Mode</h2>

      <AuthenticationWidget />
    </div>
  );
};

export default Auth;