import TrendingMovies from "../../components/TrendingMovies/TrendingMovies";
import TrendingPeople from "../../components/TrendingPeople/TrendingPeople";
import TrendingTVShows from "../../components/TrendingTVShows/TrendingTVShows";

const Home = () => {
  return (
    <div className="container mt-100">
      <div className="row">
        <TrendingMovies />
        <TrendingTVShows />
        <TrendingPeople />
      </div>
    </div>
  );
};

export default Home;
