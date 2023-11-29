import { Fragment, useEffect } from "react";
import useMovies from "../../hooks/use-movies";
import Movie from "./Movie";
import MoviesPagination from "./MoviesPagination";

const Movies = () => {
  const { movies, getAllMovies, isLoading, searchMovies, getSearchPages } =
    useMovies();

  useEffect(() => {
    getAllMovies();
  }, []);

  const handleSearch = (query) => {
    searchMovies(query);
    getSearchPages(1, query);
  };

  return (
    <Fragment>
      <div className="px-2">
        <input
          type="text"
          className="form-control bg-search mb-5 px-3 py-2 rounded-pill border-info"
          placeholder="Search ....."
          onChange={(e) => handleSearch(e.target.value)}
        />
      </div>

      {isLoading ? (
        <div className="d-flex justify-content-center align-items-center">
          <span
            className="spinner-border spinner-border-sm "
            role="status"
            aria-hidden="true"
          ></span>
        </div>
      ) : (
        movies.map((movie) => {
          return <Movie key={movie.id} {...movie} />;
        })
      )}

      {movies.length && <MoviesPagination />}
    </Fragment>
  );
};

export default Movies;
