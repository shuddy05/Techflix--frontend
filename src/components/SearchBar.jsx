import React, { useEffect, useState } from "react";
import { IoSearch } from "react-icons/io5";
import { useLocation } from "react-router-dom";
const SearchBar = () => {
  const [placeholder, setPlaceholder] = useState("");
  const location = useLocation().pathname;
  useEffect(() => {
    if (location === "/") {
      setPlaceholder("movies or TV series");
    } else if (location === "/movies") {
      setPlaceholder("Movies");
    } else if (location === "/tv-series") {
      setPlaceholder("Tv-series");
    } else {
      setPlaceholder("bookmarked");
    }
  }, [location]);
  return (
    <div
      className="
        flex items-center justify-start gap-[24px] ml-[16px] mt-[24px] lg:ml-[25px] md:mt-[10px] desktop:ml-[164px] desktop:mt-[64px]"
    >
      <div className="telo mt-1">
        <IoSearch className="text-[18px] mb-[8px] md:text-[24px] md:mb-0 desktop:text-[24px] text-white" />
      </div>

      <div className="search">
        <input
          type="text"
          placeholder={`Search for ${placeholder}`}
          className="max-w-[260px] pt-2 border-0 bg-[#10141e] text-[#ffffff] text-[16px] font-normal outline-0 placeholder:text-[16px] placeholder:font-normal placeholder:text-[#5a698f] focus:border-b-[1px] focus:border-b-[#5a698f] focus:caret-[#fc4747] md:max-w-[650px] md:text-[24px] md:placeholder:text-[24px] desktop:w-[1100px] desktop:pb-[18px] desktop:text-[24px] desktop:placeholder:text-[24px]"
        />
      </div>
    </div>
  );
};

export default SearchBar;
