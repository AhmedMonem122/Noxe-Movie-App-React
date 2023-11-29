import { createContext, useState } from "react";
import axios from "../api/axios";
import { API_KEY } from "../api/axios";

function PeopleContextProvider({ children }) {
  const [people, setPeople] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [pageCount, setPageCount] = useState(0);
  const [searchPageQuery, setSearchPageQuery] = useState("");

  // Get All people
  const getAllTrendingPeople = async () => {
    setIsLoading(true);
    const res = await axios.get(`/trending/person/week?api_key=${API_KEY}`);

    console.log(res);
    setIsLoading(false);
    setPeople(res.data.results);
    setPageCount(res.data.total_pages);
  };

  // Search people
  const searchPeople = async (query) => {
    if (query === "") {
      getAllTrendingPeople();
    } else {
      const res = await axios.get(
        `/search/person?api_key=${API_KEY}&query=${query}`
      );
      setPeople(res.data.results);
      setPageCount(res.data.total_pages);
      setSearchPageQuery(query);
    }
  };

  // Get Current Page
  const getPage = async (page) => {
    const res = await axios.get(
      `/trending/person/week?page=${page}&api_key=${API_KEY}`
    );

    setPeople(res.data.results);
    setPageCount(res.data.total_pages);
  };

  // Get Search Pages
  const getSearchPages = async (page = 1, query = "") => {
    if (query !== "") {
      const res = await axios.get(
        `/search/person?api_key=${API_KEY}&page=${page}&query=${query}`
      );
      setPeople(res.data.results);
      setPageCount(res.data.total_pages);

      setSearchPageQuery(query);
    } else if (query === "") {
      setSearchPageQuery("");
    }
  };

  return (
    <PeopleContext.Provider
      value={{
        people,
        searchPeople,
        getPage,
        pageCount,
        getSearchPages,
        setSearchPageQuery,
        searchPageQuery,
        isLoading,
        getAllTrendingPeople,
      }}
    >
      {children}
    </PeopleContext.Provider>
  );
}

export const PeopleContext = createContext();

export default PeopleContextProvider;
