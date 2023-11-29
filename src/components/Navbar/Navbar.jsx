import { Fragment } from "react";
import toast from "react-hot-toast";
import {
  BiLogoFacebookCircle,
  BiLogoSpotify,
  BiLogoInstagram,
  BiLogoYoutube,
} from "react-icons/bi";
import { Link, NavLink, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/use-auth";

const Navbar = () => {
  const { setUserData } = useAuth();

  const navigate = useNavigate();

  const handleLogout = () => {
    setUserData(null);
    localStorage.removeItem("userToken");
    localStorage.removeItem("wishlistDataIds");
    navigate("/login");
    toast.success("Logged out Successfully", {
      duration: 3000,
      className: "text-success px-5 fw-bolder my-3",
    });
  };

  return (
    <nav className="navbar navbar-expand-lg fixed-top shadow-lg py-2 z-3 ">
      <div className="container">
        <Link className="navbar-brand text-white fs-2 me-lg-5" to="/">
          Noxe
        </Link>
        <button
          className="navbar-toggler collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <svg
            stroke="currentColor"
            fill="currentColor"
            viewBox="0 0 448 512"
            color="white"
            className="fs-4"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
            style={{ color: "white" }}
          >
            <path d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"></path>
          </svg>
        </button>
        <div className="navbar-collapse collapse" id="navbarSupportedContent">
          {localStorage.getItem("userToken") && (
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link active" to="/">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/movies">
                  Movies
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/tv">
                  TvShow
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/people">
                  People
                </NavLink>
              </li>
            </ul>
          )}
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item d-flex align-items-center mx-lg-5 order-lg-first order-last">
              <a
                className=" mx-lg-1 me-1 fs-5 text-dark "
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
              >
                <BiLogoFacebookCircle style={{ color: "white" }} />
              </a>
              <a
                className=" mx-lg-1 me-1 fs-5 text-dark"
                href="https://spotify.com"
                target="_blank"
                rel="noreferrer"
              >
                <BiLogoSpotify style={{ color: "white" }} />
              </a>
              <a
                className=" mx-lg-1 me-1 fs-5 text-dark"
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
              >
                <BiLogoInstagram style={{ color: "white" }} />
              </a>
              <a
                className=" mx-lg-1 me-1 fs-5 text-dark"
                href="https://youtube.com"
                target="_blank"
                rel="noreferrer"
              >
                <BiLogoYoutube style={{ color: "white" }} />
              </a>
            </li>
            {localStorage.getItem("userToken") ? (
              <li className="nav-item">
                <span
                  className="nav-link cursor-pointer"
                  onClick={handleLogout}
                >
                  Logout
                </span>
              </li>
            ) : (
              <Fragment>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/register">
                    Register
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/login">
                    Login
                  </NavLink>
                </li>
              </Fragment>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
