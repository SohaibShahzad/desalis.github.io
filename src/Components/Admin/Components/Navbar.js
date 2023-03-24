import React from "react";
import "../css/navbar.css";
import { Link } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";

export default function Navbar() {
  

  return (
    <>
      <nav
        className={`sticky-top w-100 navbar navbar-expand-lg `}
        id="navbar"
      >
        <div className="container-fluid">
          <Link
            className={`navbar-brand fs-2 mx-3`}
            to="/"
          >
            Navbar
          </Link>

          <div
            className="collapse navbar-collapse row justify-content-around fs-5 mx-4"
            id="navbarSupportedContent"
          >
            <div className=" col-md-5 mt-1">
              <div className="mx-5">
                <form className="d-flex mx-3" role="search">
                  <input
                    className={`form-control me-2`}
                    type="search"
                    placeholder="Search"
                    aria-label="Search"
                  />
                  <SearchIcon
                    className={`searchIcon `}
                    type="submit"
                  />
                </form>
              </div>
            </div>
            <ul className="navbar-nav me-auto justify-content-end mb-2 mb-lg-0 col-md-4">
              <li className="nav-item">
                <Link
                  className={`nav-link mx-2 `}
                  aria-current="page"
                  to="/"
                >
                  Home
                </Link>
              </li>

              <li className="nav-item dropdown mx-2">
                <Link
                  className={`nav-link dropdown-toggle `}
                  to="/"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Dropdown
                </Link>
                <ul
                  className={`dropdown-menu  `}
                >
                  <li>
                    <Link
                      className={`dropdown-item `}
                      to="/"
                    >
                      Action
                    </Link>
                  </li>
                  <li>
                    <Link
                      className={` dropdown-item `}
                      to="/"
                    >
                      Action
                    </Link>
                  </li>
                  <li>
                    <Link
                      className={` dropdown-item `}
                      to="/"
                    >
                      Another action
                    </Link>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <Link
                      className={` dropdown-item `}
                      to="/"
                    >
                      Something else here
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
            <div className="d-flex col-md-3 align-items-center justify-content-between">
              <div className="form-check form-switch">
                <input
                  className="form-check-input"
                  type="checkbox"
                  role="switch"
                  id="flexSwitchCheckDefault"
                />
                <label
                  className={`form-check-label `}
                  htmlFor="flexSwitchCheckDefault"
                >
                  dark mode
                </label>
              </div>
              <img
                className="border border-second rounded-circle img-size"
                alt="Not found"
              />
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
