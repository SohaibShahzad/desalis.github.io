import React, { useState } from "react";
import "../css/sidebar.css";
import {
  SidebarDataAdminProfile,
  SidebarDataWholesellerProfile,
  SidebarDataWholesellerOrders,
  SidebarDataRetailerProfile,
  SidebarDataRetailerOrders,
  SidebarDataLogout,
} from "./sidebarData";
import { useSelector } from "react-redux";
import { Link, Navigate, Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import CancelIcon from "@mui/icons-material/Cancel";

export default function Sidebar() {
  const mode = useSelector((state) => state.mode);
  const view = useSelector((state) => state.view);
  const [confirmMessage, setConfirmMessage] = useState(false);
  // const [logState, setLogState] = useState(isLogin());

  // const handleLogout = () => {
  //   logout();
  //   setLogState(false);
  // };

  const sidebarProfile = (argument) => {
    return argument.map((element) => {
      return (
        <div key={element.key}>
          <Link
            to={element.link}
            className={`nav__link text-${mode === "dark" ? "light" : "dark"}`}
          >
            <span className={`nav__icon`}>{element.icon}</span>
            <span className={`nav__name`}>{element.title}</span>
          </Link>
        </div>
      );
    });
  };

  const sidebarOrder = (argument) => {
    return argument.map((element) => {
      return (
        <div key={element.key}>
          <Link
            to={element.link}
            className={`nav__link text-${mode === "dark" ? "light" : "dark"}`}
          >
            <span className={`nav__icon`}>{element.icon}</span>
            <span className={`nav__name`}>{element.title}</span>
          </Link>
        </div>
      );
    });
  };

  return (
    <>
      {/* {!logState ? <Navigate to="/login" replace="true" /> : null} */}

      {confirmMessage ? (
        <div
          className="position-fixed w-25
      index2 rounded element"
        >
          <div className="pb-5 shadow-lg ">
            <div className="bg-info rounded-top row justify-content-between">
              <p className="p-2 fw-semibold col-md-2">Logout</p>
              <div className="col-md-1 p-2">
                <CancelIcon className="del_icon"
                  onClick={() => {
                    setConfirmMessage(false);
                  }}
                />
              </div>
            </div>
            <div className="mx-5 mt-5 mb-2">
              <p>Are you sure you want to logout?</p>
            </div>
            <div className="row justify-content-center">
              <div className="col-md-4 mx-2">
                <button
                  className="btn btn-outline-primary"
                  onClick={() => setConfirmMessage(false)}
                >
                  Cancel
                </button>
              </div>
              <div className="col-md-4 mx-2">
                <button
                  className="btn btn-outline-danger"
                  
                >
                  Logout
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : null}
      <header className="header">
        <Navbar />
      </header>
      <div
        className={`nav bg-${mode === "dark" ? "dark" : "light"}`}
        id="navbar"
      >
        <nav className="nav__container">
          <div>
            <Link
              to="/"
              className={`nav__link nav__logo text-${
                mode === "dark" ? "light" : "dark"
              }`}
            >
              <i className={`bx bxs-disc nav__icon`}></i>
              <span className={`nav__logo-name`}>MIOS</span>
            </Link>

            <div className="nav__list">
              <div className="nav__items">
                <h3
                  className={`nav__subtitle text-${
                    mode === "dark" ? "light" : "dark"
                  }`}
                >
                  Profile
                </h3>
                {view === "admin"
                  ? sidebarProfile(SidebarDataAdminProfile)
                  : view === "wholeseller"
                  ? sidebarProfile(SidebarDataWholesellerProfile)
                  : sidebarProfile(SidebarDataRetailerProfile)}
              </div>

              <div className="nav__items">
                {view === "admin" ? null : (
                  <h3
                    className={`nav__subtitle text-${
                      mode === "dark" ? "light" : "dark"
                    }`}
                  >
                    Orders
                  </h3>
                )}
                {view === "admin"
                  ? null
                  : view === "wholeseller"
                  ? sidebarOrder(SidebarDataWholesellerOrders)
                  : sidebarOrder(SidebarDataRetailerOrders)}
              </div>
            </div>
          </div>

          <div
            className={`nav__link nav__logout text-${
              mode === "dark" ? "light" : "dark"
            }`}
            onClick={() => {
              setConfirmMessage(true);
            }}
          >
            {SidebarDataLogout.map((element) => {
              return (
                <div key={element.title}>
                  <span className={`nav__icon`}>{element.icon}</span>
                  <span className={`nav__name`}>{element.title}</span>
                </div>
              );
            })}
          </div>
        </nav>
      </div>
      <Outlet />
    </>
  );
}
