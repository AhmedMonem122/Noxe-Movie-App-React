import { createContext, useState } from "react";
import axios from "../api/axios";
import { API_KEY } from "../api/axios";

function MoviesContextProvider({ children }) {
  const [movies, setMovies] = useState([]);
  const [movieDetails, setMovieDetails] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [pageCount, setPageCount] = useState(0);
  const [searchPageQuery, setSearchPageQuery] = useState("");

  // Get All Movies
  const getAllTrendingMovies = async () => {
    setIsLoading(true);
    const res = await axios.get(`/trending/movie/week?api_key=${API_KEY}`);

    setIsLoading(false);
    setMovies(res.data.results);
    setPageCount(res.data.total_pages);
  };

  // Get All Movies
  const getAllMovies = async () => {
    setIsLoading(true);
    const res = await axios.get(
      `/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&api_key=${API_KEY}`
    );

    setIsLoading(false);
    setMovies(res.data.results);
    setPageCount(res.data.total_pages);
  };

  // Search Movies
  const searchMovies = async (query) => {
    if (query === "") {
      getAllMovies();
    } else {
      const res = await axios.get(
        `/search/movie?api_key=${API_KEY}&query=${query}`
      );
      setMovies(res.data.results);
      setPageCount(res.data.total_pages);
      setSearchPageQuery(query);
    }
  };

  // Get Current Page
  const getPage = async (page) => {
    setIsLoading(true);
    const res = await axios.get(
      `/discover/movie?include_adult=false&include_video=false&language=en-US&page=${page}&sort_by=popularity.desc&api_key=${API_KEY}`
    );

    setIsLoading(false);
    setMovies(res.data.results);
    setPageCount(res.data.total_pages);
  };

  // Get Search Pages
  const getSearchPages = async (page = 1, query = "") => {
    if (query !== "") {
      setIsLoading(true);
      const res = await axios.get(
        `/search/movie?api_key=${API_KEY}&page=${page}&query=${query}`
      );

      setIsLoading(false);
      setMovies(res.data.results);
      setPageCount(res.data.total_pages);

      setSearchPageQuery(query);
    } else if (query === "") {
      setSearchPageQuery("");
    }
  };

  const getMovieDetails = async (id) => {
    setIsLoading(true);
    const res = await axios.get(`/movie/${id}?api_key=${API_KEY}`);

    setIsLoading(false);
    setMovieDetails(res.data);
  };

  return (
    <MoviesContext.Provider
      value={{
        movies,
        searchMovies,
        getPage,
        pageCount,
        getSearchPages,
        setSearchPageQuery,
        searchPageQuery,
        isLoading,
        getAllTrendingMovies,
        getAllMovies,
        getMovieDetails,
        movieDetails,
      }}
    >
      {children}
    </MoviesContext.Provider>
  );
}

export const MoviesContext = createContext();

export default MoviesContextProvider;
