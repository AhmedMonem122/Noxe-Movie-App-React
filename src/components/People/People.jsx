import { Fragment, useEffect } from "react";
import usePeople from "../../hooks/use-people";
import Person from "./Person";
import PeoplePagination from "./PeoplePagination";

const People = () => {
  const {
    people,
    getAllTrendingPeople,
    isLoading,
    searchPeople,
    getSearchPages,
  } = usePeople();

  useEffect(() => {
    getAllTrendingPeople();
  }, []);

  const handleSearch = (query) => {
    searchPeople(query);
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
        people.map((person) => {
          return <Person key={person.id} {...person} />;
        })
      )}

      {people.length && <PeoplePagination />}
    </Fragment>
  );
};

export default People;
