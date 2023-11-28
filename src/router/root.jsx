import { Fragment } from "react";
import Navbar from "../components/Navbar/Navbar";
import { Outlet } from "react-router-dom";

const RootLayout = () => {
  return (
    <Fragment>
      <Navbar />;
      <Outlet />
    </Fragment>
  );
};

export default RootLayout;
