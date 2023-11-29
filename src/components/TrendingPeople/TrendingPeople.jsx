import { Fragment, useEffect } from "react";
import usePeople from "../../hooks/use-people";
import TrendingPerson from "./TrendingPerson";

const TrendingPeople = () => {
  const { people, isLoading, getAllTrendingPeople } = usePeople();

  useEffect(() => {
    getAllTrendingPeople();
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
              Trending people
              <br /> to watch Right now
            </h2>
            <p className="text-white">Trending people today</p>
            <div className="border-line mt-3"></div>
          </div>
        </div>
      )}

      {people.slice(0, 10).map((person) => {
        return <TrendingPerson key={person.id} {...person} />;
      })}
    </Fragment>
  );
};

export default TrendingPeople;
