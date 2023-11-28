import axios from "axios";

export const API_KEY = "2dc4f3b7280c70e5009487448e8c74f4";

export default axios.create({
  baseURL: "https://api.themoviedb.org/3",
});
