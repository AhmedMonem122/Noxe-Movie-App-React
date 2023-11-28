import { useContext } from "react";
import { TVShowsContext } from "../context/TVShowsContextProvider";

const useTVShows = () => {
  return useContext(TVShowsContext);
};

export default useTVShows;
