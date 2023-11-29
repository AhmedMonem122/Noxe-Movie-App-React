import { Fragment, useEffect } from "react";
import TrendingMovie from "./TrendingMovie";
import useMovies from "../../hooks/use-movies";

const TrendingMovies = () => {
  const { movies, isLoading, getAllTrendingMovies } = useMovies();

  useEffect(() => {
    getAllTrendingMovies();
  }, []);

  return (
    <Fragment>
      {isLoading ? (
        <div className="d-flex justify-content-center align-items-center">
          <span
            className="spinner-border spinner-border-sm "
            role="status"
            aria-hidden="true"
          ></span>
        </div>
      ) : (
        <div className=" col-md-4 d-flex align-items-center">
          <div>
            <div className="border-line w-25 mb-3"></div>
            <h2 className="text-white">
              Trending movies
              <br /> to watch Right now!
            </h2>
            <p className="text-white">Most watched movies today</p>
            <div className="border-line mt-3"></div>
          </div>
        </div>
      )}

      {movies.slice(0, 10).map((movie) => {
        return <TrendingMovie key={movie.id} {...movie} />;
      })}
    </Fragment>
  );
};

export default TrendingMovies;
