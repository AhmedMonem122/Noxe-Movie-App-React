import { Link } from "react-router-dom";

const TrendingTVShow = ({ id, poster_path, name, vote_average }) => {
  return (
    <div className=" col-md-3 gy-5 mx-auto">
      <Link className=" text-white" to={`/tv/${id}`}>
        <div className=" position-relative card-layer ">
          <div className="layer position-absolute cursor-pointer text-white d-flex align-items-center justify-content-center ">
            <h5 className=" fw-bolder">Click to see more</h5>
          </div>
          <div className="position-absolute top-0 end-0 bg-info p-2">
            <span>{vote_average.toFixed(1)}</span>
          </div>
          <div>
            <img
              className="w-100 "
              src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
              alt={name}
            />
          </div>
        </div>
        <div className=" text-center p-3">
          <h6 className="mt-3  p-2  text-ellipsis">{name}</h6>
        </div>
      </Link>
    </div>
  );
};

export default TrendingTVShow;
