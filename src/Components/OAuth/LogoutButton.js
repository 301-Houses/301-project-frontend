import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import "bootstrap/dist/css/bootstrap.min.css";

function LogoutButton() {
  const { isAuthenticated, logout } = useAuth0();

  return (
    isAuthenticated && (
      <button
        className="btn btn-secondary"
        onClick={() => {
          logout({ returnTo: window.location.origin });
        }}
      >
        LogOut
      </button>
    )
  );
}

export default LogoutButton;
