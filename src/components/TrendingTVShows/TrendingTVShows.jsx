import { Fragment, useEffect } from "react";
import useTVShows from "../../hooks/use-tv-shows";
import TrendingTVShow from "./TrendingTVShow";

const TrendingTVShows = () => {
  const { tvShows, isLoading, getAllTrendingTVShows } = useTVShows();

  useEffect(() => {
    getAllTrendingTVShows();
  }, []);

  return (
    <Fragment>
      {isLoading ? (
        <div className="d-flex justify-content-center align-items-center my-5">
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
              Trending TV shows
              <br /> to watch now!
            </h2>
            <p className="text-white">Most watched TV shows today</p>
            <div className="border-line mt-3"></div>
          </div>
        </div>
      )}

      {tvShows.slice(0, 10).map((tv) => {
        return <TrendingTVShow key={tv.id} {...tv} />;
      })}
    </Fragment>
  );
};

export default TrendingTVShows;
