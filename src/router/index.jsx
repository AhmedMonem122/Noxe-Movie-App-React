import { Fragment } from "react";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

import RootLayout from "./root";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import Home from "../pages/Home/Home";
import MoviesPage from "../pages/Movies/Movies";
import TVShowsPage from "../pages/TVShows/TVShows";
import PeoplePage from "../pages/People/People";
import MovieDetails from "../components/Movies/MovieDetails";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Fragment>
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path="movies" element={<MoviesPage />} />
        <Route path="movies/:id" element={<MovieDetails />} />
        <Route path="tv" element={<TVShowsPage />} />
        <Route path="people" element={<PeoplePage />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
      </Route>
    </Fragment>
  )
);

export default router;
