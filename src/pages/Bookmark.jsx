import React from "react";
import useAuth from "../hooks/useAuth";
import { useFetch } from "../hooks/useFetch";
import { useCustomParams } from "../hooks/useCustumParams";
import Loading from "../utils/Loading";
import MovieCard from "../components/MovieCard";
const Bookmark = () => {
  const { token } = useAuth();
  const {
    data,
    error,
    loading,
    updateUI: handleBookmarkUpdate,
  } = useFetch("/api/bookmark", token);

  const { searchInput, filteredMovies } = useCustomParams(data);

  if (loading) {
    return <Loading />;
  }
  if (error) {
    return <p className="text-3xl text-white">{error}: Kindly Refresh</p>;
  }
  if (searchInput) {
    return (
      <SearchResults
        searchInput={searchInput}
        filteredMovies={filteredMovies}
      />
    );
  }

  return (
    <div className="mt-[12px]  sm:mt-[15px]  lg:mt-[20px] ">
      <h2
        className="m-0 text-start text-[#ffffff]
          text-[20px] sm:text-[32px] lg:text-[32px] font-normal"
      >
        Bookmarked Shows
      </h2>

      <div
        className="mt-[8px]
          grid gap-[5px]
          grid-cols-2 sm:grid-cols-3 lg:grid-cols-4"
      >
        {data.length > 0 ? (
          data.map((movie) => {
            return (
              <MovieCard
                key={movie.id}
                movie={movie}
                updateUI={handleBookmarkUpdate}
              />
            );
          })
        ) : (
          <p className="text-white texts-start m-0">
            No bookmarked shows found.
          </p>
        )}
      </div>
    </div>
  );
};

export default Bookmark;
