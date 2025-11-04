import { useEffect, useState } from "react";
import axiosInstance from "../utils/axiosConfig";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export const useFetch = (url, token) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const fetchData = async () => {
    try {
      const response = await axiosInstance.get(url, {
        headers: {
          Authorization: token ? `Bearer ${token}` : null,
        },
      });
      setData(response.data.data);
    } catch (error) {
      handleError(error);
    } finally {
      setLoading(false);
    }
  };

  const handleError = (error) => {
    if (error.message === "Network Error") {
      setError("Server is down, please refresh");
      return;
    }

    if (error.response?.status === 401) {
      toast.error("Login to view bookmarks", { id: "ftrejj" });
      navigate("/login");
      return;
    }

    setError("Something went wrong");
  };

  const toggleAddBookmark = (movieId, userId) => {
    const updatedData = data.map((movie) =>
      movie._id === movieId ? { ...movie, bookmarkedBy: [userId] } : movie
    );
    setData(updatedData);
    toast.success("Movie Bookmarked", { id: "hutjjnf" });
  };

  const toggleRemoveBookmark = (movieId) => {
    const updatedData = data.map((movie) =>
      movie._id === movieId ? { ...movie, bookmarkedBy: [] } : movie
    );
    setData(updatedData);
    toast.success("Movie Removed", { id: "cvgf" });
  };

  const handleAddBookmark = async (movieId, token, userId) => {
    if (!userId || !token) {
      toast.error("Login to Bookmark", { id: "vgmnmch" });
      navigate("/login");
      return;
    }

    try {
      toggleAddBookmark(movieId, userId);
      await axiosInstance.get(`/api/bookmark/add/${movieId}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
    } catch (error) {
      toast.error("Login to Bookmark", { id: "xcgh" });
      if (error.response?.status === 401) navigate("/login"); 
    }
  };

  const handleRemoveBookmark = async (movieId, token, userId) => {
    if (!userId || !token) {
      toast.error("Login to remove bookmark", { id: "hgtl" });
      navigate("/login");
      return;
    }

    try {
      toggleRemoveBookmark(movieId);
      await axiosInstance.get(`/api/bookmark/remove/${movieId}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
    } catch (error) {
      toast.error("Failed to remove bookmark", { id: "hysyd" });
      if (error.response?.status === 401) navigate("/login");
    }
  };

  const updateUI = async (action, movieId, token, userId) => {
    if (action === "add") {
      await handleAddBookmark(movieId, token, userId);
    } else {
      await handleRemoveBookmark(movieId, token, userId);
    }
  };

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      fetchData();
    }, 500);
    return () => clearTimeout(timeoutId);
  }, [url, token]);
  return { data, error, loading, updateUI };
};
