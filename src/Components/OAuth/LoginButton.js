import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

function LoginButton(props) {
  const { isAuthenticated, loginWithRedirect } = useAuth0();

  return (
    !isAuthenticated && (
      <button
        style={{
          backgroundColor: "transparent",
          border: "none",
          fontSize: "28px",
          padding: "4px 10px 4px 10px",
        }}
        onClick={loginWithRedirect}
      >
        {props.text ? props.text : "Sign In"}
      </button>
    )
  );
}

export default LoginButton;
