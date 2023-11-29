import { useContext } from "react";
import { PeopleContext } from "../context/PeopleContextProvider";

const usePeople = () => {
  return useContext(PeopleContext);
};

export default usePeople;
