import React from "react";
import { Outlet } from "react-router-dom";
import SearchBar from "../components/SearchBar";
import Sidebar from "../components/Sidebar";
import { useEffect } from "react";
import useAuth from "../hooks/useAuth";
const RootLayout = () => {
  // destructure "handleGetUser" function from the useAuth hook.
  const { handleGetUser } = useAuth();
  // Calls "handleGetUser" when the component mounts to fetch user data
  useEffect(() => {
    handleGetUser();
  }, [handleGetUser]);

  return (
    <div>
      <Sidebar />
      <div className="relative lg:ms-[155px]">
        <SearchBar />
        <Outlet />
      </div>
    </div>
  );
};

export default RootLayout;
