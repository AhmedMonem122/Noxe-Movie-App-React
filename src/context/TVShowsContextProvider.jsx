import { createContext, useState } from "react";
import axios from "../api/axios";
import { API_KEY } from "../api/axios";

function TVShowsContextProvider({ children }) {
  const [tvShows, setTVShows] = useState([]);
  const [tvShowDetails, setTVShowDetails] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [pageCount, setPageCount] = useState(0);
  const [searchPageQuery, setSearchPageQuery] = useState("");

  // Get All TV Shows
  const getAllTrendingTVShows = async () => {
    setIsLoading(true);
    const res = await axios.get(`/trending/tv/week?api_key=${API_KEY}`);

    setIsLoading(false);
    setTVShows(res.data.results);
    setPageCount(res.data.total_pages);
  };

  // Get All TV Shows
  const getAllTVShows = async () => {
    setIsLoading(true);
    const res = await axios.get(
      `/discover/tv?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&api_key=${API_KEY}`
    );

    setIsLoading(false);
    setTVShows(res.data.results);
    setPageCount(res.data.total_pages);
  };

  // Search tvShows
  const searchTVShows = async (query) => {
    if (query === "") {
      getAllTVShows();
    } else {
      const res = await axios.get(
        `/search/tv?api_key=${API_KEY}&query=${query}`
      );

      setTVShows(res.data.results);
      setPageCount(res.data.total_pages);
      setSearchPageQuery(query);
    }
  };

  // Get Current Page
  const getPage = async (page) => {
    setIsLoading(true);
    const res = await axios.get(
      `/discover/tv?include_adult=false&include_video=false&language=en-US&page=${page}&sort_by=popularity.desc&api_key=${API_KEY}`
    );

    setIsLoading(false);
    setTVShows(res.data.results);
    setPageCount(res.data.total_pages);
  };

  // Get Search Pages
  const getSearchPages = async (page = 1, query = "") => {
    if (query !== "") {
      setIsLoading(true);
      const res = await axios.get(
        `/search/tv?api_key=${API_KEY}&page=${page}&query=${query}`
      );

      setIsLoading(false);
      setTVShows(res.data.results);
      setPageCount(res.data.total_pages);

      setSearchPageQuery(query);
    } else if (query === "") {
      setSearchPageQuery("");
    }
  };

  const getTVShowDetails = async (id) => {
    setIsLoading(true);
    const res = await axios.get(`/tv/${id}?api_key=${API_KEY}`);

    setIsLoading(false);
    setTVShowDetails(res.data);
  };

  return (
    <TVShowsContext.Provider
      value={{
        tvShows,
        searchTVShows,
        getPage,
        pageCount,
        getSearchPages,
        setSearchPageQuery,
        searchPageQuery,
        isLoading,
        getAllTrendingTVShows,
        getAllTVShows,
        getTVShowDetails,
        tvShowDetails,
      }}
    >
      {children}
    </TVShowsContext.Provider>
  );
}

export const TVShowsContext = createContext();

export default TVShowsContextProvider;
