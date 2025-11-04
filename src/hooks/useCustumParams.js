import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

export const useCustomParams = (data) => {
  // Retries the current URL search parameters
  const [searchParams] = useSearchParams();
  // Initializies a state variable "" to store movies filtered based on search input.
  const [filteredMovies, setFilteredMovies] = useState([]);
  // Gets the value of the "search " parameter from the URL. Defaults to an empty string if not found
  const searchInput = searchParams.get("search") ?? "";
  // Ensure that "data" is defined before perfoming any operation
  useEffect(() => {
    if (data) {
      const searchedMovies = data.filter((movie) => {
        movie.title.toLowerCase().includes(searchInput.toLowerCase());
      });
      setFilteredMovies(searchedMovies);
    }
  }, [searchParams, data, searchInput]);
  return { searchInput, filteredMovies };
};
