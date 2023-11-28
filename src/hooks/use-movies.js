import { useContext } from "react";
import { MoviesContext } from "../context/MoviesContextProvider";

const useMovies = () => {
  return useContext(MoviesContext);
};

export default useMovies;
