import React from "react";
import useAuth from "../hooks/useAuth";
import { Link } from "react-router-dom";
const Dropdown = () => {
  const { token, handleLogoutUser } = useAuth();

  return (
    <div className="mt-3 absolute">
      {token ? (
        <div>
          <button
            onClick={() => {
              handleLogoutUser();
            }}
          >
            Logout
          </button>
        </div>
      ) : (
        <div>
          <Link to="/register">Register</Link>
          <Link to="login">Login</Link>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
