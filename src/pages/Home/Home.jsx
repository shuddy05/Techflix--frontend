import { useFetch } from "../../hooks/useFetch";
import { useCustomParams } from "../../hooks/useCustumParams";
import Loading from "../../utils/Loading";
import SearchResults from "./SearchResults";
import Trending from "./Trending";
import Recommended from "./Recommended";
const Home = () => {
  const { data, error, loading, updateUI } = useFetch("/api/movie");
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
    <div
      className="mt-[12px]  md:mt-[15px] lg:mt-[20px] mx-2.5
    "
    >
      <div className="">
        <h2 className="m-0 text-start text-[#ffffff] text-[20px] md:text-[32px] font-normal ">
          Trending
        </h2>
        <Trending {...{ data, error, loading, updateUI }} />
      </div>

      <div className="main-body mt-[40px]">
        <h2 className="m-0 text-start text-[#ffffff] text-[20px] md:text-[32px] font-normal ">
          Recommended For You
        </h2>
        <Recommended {...{ data, error, loading, updateUI }} />
      </div>
    </div>
  );
};

export default Home;
