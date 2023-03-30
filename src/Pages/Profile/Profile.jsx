import React, { useState } from "react";
import style from "./Profile.module.css";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Sidebar from "../../Components/adminSidebar/Sidebar";
import ProfileView from "../../Components/ProfileView/ProfileView";
import EditProfile from "../../Components/EditProfile/EditProfile";
import ChangePassword from "../../Components/changePassword/changePassword";

export default function Profile() {
  const { mode } = useSelector((state) => state.mode);
  const { profileData } = useSelector((state) => state.dataProfile);
  const [profile, viewProfile] = useState(true);
  const [editProfile, viewEditProfile] = useState(false);
  const [changePassword, viewChangePassword] = useState(false);

  return (
    <>
      <Sidebar />
      <div className={`rounded ${mode === "dark" ? "bg-dark" : style.bg}`}>
        <div className="row">
          <div className="col-md-11 ms-auto mt-4">
            <h1
              className={`text-right fs-1 text-${
                mode === "light" ? "dark" : "light"
              }`}
            >
              Profile
            </h1>
          </div>

          <div className="col-md-4">
            <div
              className={`${
                mode === "light" ? "bg-white" : "bg-dark"
              } d-flex flex-column align-items-center text-center w-75 ms-auto mt-3 pb-5 rounded-3`}
            >
              <img
                style={{ width: "35%" }}
                className="mt-5 rounded-circle"
                src={profileData.image}
                alt=""
              />
              <h2
                className={`fw-semibold my-2 text-${
                  mode === "light" ? "dark" : "light"
                }`}
              >
                {profileData.name}
              </h2>
              <span
                className={`text-${mode === "light" ? "black-50" : "white-50"}`}
              >
                {profileData.type}
              </span>
              <span> </span>
            </div>
          </div>

          <div className="col-md-8 mb-5">
            <div
              className={`pt-2 mt-3 ${
                mode === "light" ? "bg-white" : "bg-dark"
              } rounded-3 me-2`}
            >
              <div className="row text-center m-1 mt-4">
                <div className="col-md-2">
                  <p
                    className={`${style.portion} fs-5`}
                    onClick={() => {
                      viewProfile(true);
                      viewEditProfile(false);
                      viewChangePassword(false);
                    }}
                  >
                    Overview
                  </p>
                  {profile && (
                    <hr className={`${style.hr} mt-2 mb-0 text-primary`} />
                  )}
                </div>
                <div className="col-md-2">
                  <p
                    className={`${style.portion} fs-5`}
                    onClick={() => {
                      viewProfile(false);
                      viewEditProfile(true);
                      viewChangePassword(false);
                    }}
                  >
                    Edit Profile
                  </p>
                  {editProfile && (
                    <hr className={`${style.hr} mt-2 mb-0 text-primary`} />
                  )}
                </div>
                <div className="col-md-3">
                  <p
                    className={`${style.portion} fs-5`}
                    onClick={() => {
                      viewProfile(false);
                      viewEditProfile(false);
                      viewChangePassword(true);
                    }}
                  >
                    Change Password
                  </p>
                  {changePassword && (
                    <hr className={`${style.hr} mt-2 mb-0 text-primary`} />
                  )}
                </div>

                {/* <ul class="nav nav-tabs">
                  <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="#">
                      Active
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#">
                      Link
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#">
                      Link
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link disabled">Disabled</a>
                  </li>
                </ul> */}

                <div className="col-md-12">
                  <hr className="mt-0" />
                </div>
              </div>
              {profile ? (
                <ProfileView />
              ) : editProfile ? (
                <EditProfile />
              ) : changePassword ? (
                <ChangePassword />
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
