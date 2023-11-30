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
import TVShowDetails from "../components/TVShows/TVShowDetails";
import PersonDetails from "../components/People/PersonDetails";
import ProtectedRoute from "../components/ProtectedRoute/ProtectedRoute";
import NotFound from "../components/NotFound/NotFound";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Fragment>
      <Route path="/" element={<RootLayout />}>
        <Route
          index
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />
        <Route
          path="movies"
          element={
            <ProtectedRoute>
              <MoviesPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="tv"
          element={
            <ProtectedRoute>
              <TVShowsPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="people"
          element={
            <ProtectedRoute>
              <PeoplePage />
            </ProtectedRoute>
          }
        />
        <Route
          path="movies/:id"
          element={
            <ProtectedRoute>
              <MovieDetails />
            </ProtectedRoute>
          }
        />
        <Route
          path="tv/:id"
          element={
            <ProtectedRoute>
              <TVShowDetails />
            </ProtectedRoute>
          }
        />
        <Route
          path="people/:id"
          element={
            <ProtectedRoute>
              <PersonDetails />
            </ProtectedRoute>
          }
        />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />

        <Route path="*" element={<NotFound />} />
      </Route>
    </Fragment>
  )
);

export default router;
