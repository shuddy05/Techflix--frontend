import axios from "axios";

// connect our endpoint to axios
const axiosInstance = axios.create({
  baseURL: "https://techflix-backend-hmow.onrender.com",
});

// Adding error responses interceptors incase of error while fetching using axios
axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error("Axios error:", error);
    return Promise.reject(error);
  }
);

// Settling default headers if token is available
const token = localStorage.getItem("token");

if (token) {
  axiosInstance.defaults.headers.common["Authorization"] = `Bearer ${token}`;
}

// Setting a default timeout for requests
axiosInstance.defaults.timeout = 20000; // timeout in 20s

export default axiosInstance;
