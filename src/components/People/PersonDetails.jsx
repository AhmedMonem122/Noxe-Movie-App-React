import { Fragment, useEffect } from "react";
import usePeople from "../../hooks/use-people";
import { Link, useParams } from "react-router-dom";

const PersonDetails = () => {
  const { getPersonDetails, personDetails, isLoading } = usePeople();

  const { id } = useParams();

  useEffect(() => {
    getPersonDetails(id);
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
                  src={`https://image.tmdb.org/t/p/w500/${personDetails?.profile_path}`}
                  alt={`${personDetails?.name}`}
                />
              </div>
            </div>
            <div className="col-md-7">
              <div className="mt-5 text-white">
                <h2 className="p-2">{personDetails?.name}</h2>
                <p className="p-2">{personDetails?.biography}</p>
                <div className=" mt-3">
                  <span className="text-info p-2 fs-4"> Birthday: </span>
                  <span className="p-1 fs-5">{personDetails?.birthday}</span>
                </div>
                <div className=" mt-3">
                  <span className="text-info p-2 fs-4"> Place of birth: </span>
                  <span className="p-1 fs-5">
                    {personDetails?.place_of_birth}
                  </span>
                </div>
                <div className=" mt-3">
                  <span className="text-info p-2 fs-4"> Known for:</span>
                  <span className="p-1 fs-5">
                    {personDetails?.known_for_department}
                  </span>
                </div>
                <div className=" mt-3">
                  <span className="text-info p-2 fs-4"> Popularity:</span>
                  <span className="p-1 fs-5">{personDetails?.popularity}</span>
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

export default PersonDetails;
