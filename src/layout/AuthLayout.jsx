import React from "react";
import { Link, Outlet } from "react-router-dom";
import logo from "../assets/logo.svg";
const AuthLayout = () => {
  return (
    <div>
      <Link className="inline-block" to="/" aria-label="Home">
        <img src={logo} alt="redmovie" className="mt-[78.41px]" />
      </Link>
      <Outlet />
    </div>
  );
};

export default AuthLayout;
