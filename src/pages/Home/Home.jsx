import TrendingMovies from "../../components/TrendingMovies/TrendingMovies";
import TrendingTVShows from "../../components/TrendingTVShows/TrendingTVShows";

const Home = () => {
  return (
    <div className="container mt-100">
      <div className="row">
        <TrendingMovies />
        <TrendingTVShows />
      </div>
    </div>
  );
};

export default Home;
