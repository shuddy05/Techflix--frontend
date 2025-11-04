import MovieCarousel from "./MovieCarosel";
import Loading from "../../utils/Loading";
const Trending = ({ data, error, loading, updateUI }) => {
  if (loading) {
    return <Loading message="Fetching Trending Movies..." />;
  }

  if (error) {
    return (
      <p className="text-3xl text-white"> {error}: Please try again later</p>
    );
  }

  return (
    <div>
      <MovieCarousel data={data} updateUI={updateUI} />
    </div>
  );
};

export default Trending;
