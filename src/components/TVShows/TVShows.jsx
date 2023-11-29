import { Fragment, useEffect } from "react";
import useTVShows from "../../hooks/use-tv-shows";
import TVShow from "./TVShow";
import TVShowsPagination from "./TVShowsPagination";

const TVShows = () => {
  const { tvShows, getAllTVShows, isLoading, searchTVShows, getSearchPages } =
    useTVShows();

  useEffect(() => {
    getAllTVShows();
  }, []);

  const handleSearch = (query) => {
    searchTVShows(query);
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
        tvShows.map((tv) => {
          return <TVShow key={tv.id} {...tv} />;
        })
      )}

      {tvShows.length && <TVShowsPagination />}
    </Fragment>
  );
};

export default TVShows;
