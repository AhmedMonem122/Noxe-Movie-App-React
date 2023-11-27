import { Fragment } from "react";
import "./App.css";
import { RouterProvider } from "react-router-dom";
import router from "./router";
import AuthContextProvider from "./context/AuthContextProvider";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <Fragment>
      <AuthContextProvider>
        <Toaster position="top-center" reverseOrder={false} />
        <RouterProvider router={router} />
      </AuthContextProvider>
    </Fragment>
  );
}

export default App;
