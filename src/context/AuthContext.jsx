import { createContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
//Import a pre-configuration axios instance for making API request
import axiosInstance from "../utils/axiosConfig";
// Import useNavigate for programmatic navigation
import { useNavigate } from "react-router-dom";

// create a
export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(
    () => JSON.parse(localStorage.getItem("token")) || null
  );
  const [authenticating, setAuthenticating] = useState(false);
  const navigate = useNavigate();
  //
  const handleRegisterUser = async (formData) => {
    setAuthenticating(true);
    try {
      // Send Post request to sign up the user with the provided form data
      const { data } = await axiosInstance.post("/api/auth/register", formData);
      toast.success("Registration Successfull", { id: "jjjk" });
      // stores the received token in the localstorage
      localStorage.setItem("token", JSON.stringify(data.token));
      // update the token
      setToken(data.token);
      // sets the user with the user ID
      setUser({ id: data.id });
      // Navigae to home pae
      navigate("/");
    } catch (error) {
      handleAuthError(error);
    } finally {
      // Resets the authentiating state to false once the request is complete
      setAuthenticating(false);
    }
  };
  // Handle login
  const handleLoginUser = async (formData) => {
    setAuthenticating(true);
    try {
      // Send Post request to sign up the user with the provided form data
      const { data } = await axiosInstance.post("/api/auth/login", formData);
      toast.success("Welome Back ", { id: "hjkk" });
      // stores the received token in the localstorage
      localStorage.setItem("token", JSON.stringify(data.token));
      // update the token
      setToken(data.token);
      // sets the user with the user ID
      setUser({ id: data.id });
      // Navigae to home pae
      navigate("/");
    } catch (error) {
      handleAuthError(error);
    } finally {
      // Resets the authentiating state to false once the request is complete
      setAuthenticating(false);
    }
  };

  // handle getUSer

  const handleGetUser = async () => {
    // Sends a POST request to get the user's data with the token included in the Authorization header

    try {
      const { data } = await axiosInstance.post("/api/auth/user", {
        headers: { Authorization: `Bearer ${token}` },
      });
      // Updates the user state with the received data
      setUser(data);
    } catch (error) {
      handleAuthError(error);
    }
  };
  // Handle logout user
  const handleLogoutUser = () => {
    setUser(null);
    setToken(null);
    localStorage.removeItem("token");
    toast.success("See you soon", { id: "xkpa" });
    navigate("/login");
  };
  // Handle error
  const handleAuthError = (error) => {
    if (error.response) {
      // toast.error(error.response.data.message, { id: "hvta" });
    } else {
      toast.error("Something went wrong", { id: "xgjj" });
    }
  };
  // Fetches the user data when the component mounts
  useEffect(() => {
    handleGetUser();
  }, [token]);
  //
  const contextData = {
    user,
    token,
    handleRegisterUser,
    handleLoginUser,
    authenticating,
    handleGetUser,
    handleLogoutUser,
  };
  return (
    <AuthContext.Provider value={contextData}>{children}</AuthContext.Provider>
  );
};
