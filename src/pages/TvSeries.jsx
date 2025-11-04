import React from "react";
import MovieCard from "../components/MovieCard";
import { useCustomParams } from "../hooks/useCustumParams";
import { useFetch } from "../hooks/useFetch";
import Loading from "../utils/Loading";
const TvSeries = () => {
  const { data, error, loading, updateUI } = useFetch("/api/movie/series");
  const { searchInput, filteredMovies } = useCustomParams(data);

  if (loading) {
    return <Loading message="Fetching Movies..." />;
  }
  if (error) {
    return (
      <p className="text-3xl text-white"> {error}: Please try again later</p>
    );
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
    <div className="mt-[12px] sm:mt-[15px] lg:mt-[20px]">
      <h2 className="m-0 text-start text-[#ffffff] text-[20px] sm:text-[32px] lg:text-[32px] font-normal">
        TV Series
      </h2>

      <div className="mt-[8px] grid gap-[5px] grid-cols-2 sm:grid-cols-3 lg:grid-cols-4">
        {data.map((movie) => {
          return (
            <MovieCard key={movie._id} movie={movie} updateUI={updateUI} />
          );
        })}
      </div>
    </div>
  );
};

export default TvSeries;
