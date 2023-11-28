import { Fragment } from "react";
import "./App.css";
import { RouterProvider } from "react-router-dom";
import router from "./router";
import AuthContextProvider from "./context/AuthContextProvider";
import { Toaster } from "react-hot-toast";
import MoviesContextProvider from "./context/MoviesContextProvider";
import TVShowsContextProvider from "./context/TVShowsContextProvider";

function App() {
  return (
    <Fragment>
      <AuthContextProvider>
        <MoviesContextProvider>
          <TVShowsContextProvider>
            <Toaster position="top-center" reverseOrder={false} />
            <RouterProvider router={router} />
          </TVShowsContextProvider>
        </MoviesContextProvider>
      </AuthContextProvider>
    </Fragment>
  );
}

export default App;
