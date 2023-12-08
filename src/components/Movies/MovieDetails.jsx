import { Fragment, useEffect } from "react";
import { BsStarFill } from "react-icons/bs";
import { Link, useParams } from "react-router-dom";
import useMovies from "../../hooks/use-movies";

const MovieDetails = () => {
  const { getMovieDetails, movieDetails, isLoading } = useMovies();

  const { id } = useParams();

  useEffect(() => {
    getMovieDetails(id);
  }, []);

  return (
    <Fragment>
      {isLoading ? (
        <div className="d-flex justify-content-center align-items-center mt-100 vh-100">
          <span
            className="spinner-border spinner-border-sm "
            role="status"
            aria-hidden="true"
          ></span>
        </div>
      ) : (
        <div className="container mt-100">
          <div className="row">
            <div className="col-md-5">
              <div>
                <img
                  className=" cursor-pointer img-details mx-auto w-100"
                  src={`https://image.tmdb.org/t/p/w500/${movieDetails?.poster_path}`}
                  alt={`${movieDetails?.title}`}
                />
              </div>
            </div>
            <div className="col-md-7">
              <div className="mt-5 text-white">
                <h2 className="p-2">{movieDetails?.title}</h2>
                <p className="fs-3 text-white-50 mt-1">
                  {movieDetails?.tagline}
                </p>
                <ul className="list-unstyled d-flex flex-wrap">
                  {movieDetails?.genres?.map((genre) => {
                    return (
                      <div
                        className="bg-info p-2 mx-2 rounded-2 fs-6 mb-2"
                        key={genre.id}
                      >
                        {genre.name}
                      </div>
                    );
                  })}
                </ul>
                <p className="p-2">{movieDetails?.overview}</p>
                <div className=" mt-3 d-flex align-items-center">
                  <span className="text-info p-2 fs-4 "> Rate :</span>
                  <BsStarFill
                    className=" text-warning"
                    style={{ height: "30px", width: "30px" }}
                  />
                  <span className="p-1 fs-5">{movieDetails?.vote_average}</span>
                </div>
                <div className=" mt-3">
                  <span className="text-info p-2 fs-4"> Vote count :</span>
                  <span className="p-1 fs-5">{movieDetails?.vote_count}</span>
                </div>
                <div className=" mt-3">
                  <span className="text-info p-2 fs-4"> Popularity :</span>
                  <span className="p-1 fs-5">{movieDetails?.popularity}</span>
                </div>
                <div className=" mt-3">
                  <span className="text-info p-2 fs-4"> Release Date :</span>
                  <span className="p-1 fs-5">{movieDetails?.release_date}</span>
                </div>
              </div>
              <Link className=" btn btn-primary mt-5 my-5" to="/">
                Go Back
              </Link>
            </div>
          </div>
        </div>
      )}
    </Fragment>
  );
};

export default MovieDetails;
