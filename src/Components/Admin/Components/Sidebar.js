import React, { useState } from "react";
import style from "../css/sidebar.module.css";
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

  const sidebarProfile = (argument) => {
    return argument.map((element) => {
      return (
        <div key={element.key}>
          <Link
            to={element.link}
            className={`${style.nav_link} text-${mode === "dark" ? "light" : "dark"}`}
          >
            <span className={`${style.nav_icon}`}>{element.icon}</span>
            <span className={`${style.nav_name}`}>{element.title}</span>
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
            className={`${style.nav_link} text-${mode === "dark" ? "light" : "dark"}`}
          >
            <span className={`${style.nav_icon}`}>{element.icon}</span>
            <span className={`${style.nav_name}`}>{element.title}</span>
          </Link>
        </div>
      );
    });
  };

  return (
    <>

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
      <header className={`${style.header}`}>
        <Navbar />
      </header>
      <div
        className={`${style.nav} bg-${mode === "dark" ? "dark" : "light"}`}
        id="navbar"
      >
        <nav className={`${style.nav_container}`}>
          <div>
            <Link
              to="/"
              className={`${style.nav_link} ${style.nav_logo} text-${mode === "dark" ? "light" : "dark"
                }`}
            >
              <i className={`bx bxs-disc ${style.nav_icon}`}></i>
              <span className={`${style.nav_logo_name}`}>MIOS</span>
            </Link>

            <div className={`${style.nav_list}`}>
              <div className={`${style.nav_items}`}>
                <h3
                  className={`${style.nav_subtitle} text-${mode === "dark" ? "light" : "dark"
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

              <div className={`${style.nav_items}`}>
                {view === "admin" ? null : (
                  <h3
                    className={`${style.nav_subtitle} text-${mode === "dark" ? "light" : "dark"
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
            className={`${style.nav_link} ${style.nav_logout} text-${mode === "dark" ? "light" : "dark"
              }`}
            onClick={() => {
              setConfirmMessage(true);
            }}
          >
            {SidebarDataLogout.map((element) => {
              return (
                <div key={element.title}>
                  <span className={`${style.nav_icon}`}>{element.icon}</span>
                  <span className={`${style.nav_name}`}>{element.title}</span>
                </div>
              );
            })}
          </div>
        </nav>
      </div>
    </>
  );
}
