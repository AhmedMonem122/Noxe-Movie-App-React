import { Fragment } from "react";
import "./App.css";
import { RouterProvider } from "react-router-dom";
import router from "./router";
import AuthContextProvider from "./context/AuthContextProvider";
import { Toaster } from "react-hot-toast";
import MoviesContextProvider from "./context/MoviesContextProvider";
import TVShowsContextProvider from "./context/TVShowsContextProvider";
import PeopleContextProvider from "./context/PeopleContextProvider";

function App() {
  return (
    <Fragment>
      <AuthContextProvider>
        <MoviesContextProvider>
          <TVShowsContextProvider>
            <PeopleContextProvider>
              <Toaster position="top-center" reverseOrder={false} />
              <RouterProvider router={router} />
            </PeopleContextProvider>
          </TVShowsContextProvider>
        </MoviesContextProvider>
      </AuthContextProvider>
    </Fragment>
  );
}

export default App;
