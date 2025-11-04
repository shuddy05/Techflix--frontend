import React, { useState } from "react";
import MovieCard from "../../components/MovieCard";

const SearchResults = () => {

  return (
    <div className="mt-5 ml-[164px] md:mt-[15px] md:ml-[25px] sm:mt-3 sm:ml-4">
      <h2 className="text-white text-3xl font-normal text-left md:text-3xl sm:text-xl">
        Found ... result(s) for '...'
      </h2>

      <div className="grid grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-[5px] mt-5">
        <MovieCard />
      </div>
    </div>
  );
};

export default SearchResults;
