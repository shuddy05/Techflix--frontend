import MovieCard from "../../components/MovieCard";
import Loading from "../../utils/Loading";
const Recommended = ({ data, error, loading, updateUI }) => {
  if (loading) {
    return <Loading message="Fetching Recommended..." />;
  }
  if (error) {
    return <p className="text-3xl text-white">{error}: Kindly Refresh</p>;
  }
  return (
    <div className="grid grid-cols-2  md:grid-cols-4 sm:grid-cols-3 gap-2 w-full">
      {data.map((movie) => {
        return <MovieCard key={movie._id} movie={movie} updateUI={updateUI} />;
      })}
    </div>
  );
};

export default Recommended;
