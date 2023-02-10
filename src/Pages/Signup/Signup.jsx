import React from "react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import style from "./signup.module.css";

const Signup = () => {
  const [active, setActive] = useState(true);
  return (
    <>
      <section>
        <div
          className={`${style.container} ${
            active ? style.right_panel_active : ""
          }`}
          id="container"
        >
          <div className={`${style.form_container} ${style.sign_up_container}`}>
            <form action="#">
              <h1>Sign Up</h1>
              <div className={style.social_container}>
                <Link to="/" target="_blank" className={style.social}>
                  <i className="fab fa-github"></i>
                </Link>
                <Link to="/" target="_blank" className={style.social}>
                  <i className="fab fa-codepen"></i>
                </Link>
                <Link to="/" target="_blank" className={style.social}>
                  <i className="fab fa-google"></i>
                </Link>
              </div>
              <span>Or use your Email for registration</span>
              <label>
                <input type="text" placeholder="Name" autoComplete="off" />
              </label>
              <label>
                <input type="email" placeholder="Email" autoComplete="off" />
              </label>
              <label>
                <input
                  type="password"
                  placeholder="Password"
                  autoComplete="off"
                />
              </label>
              <button style={{ marginTop: "9px" }}>Sign Up</button>
            </form>
          </div>
          <div className={`${style.form_container} ${style.sign_in_container}`}>
            <form action="#">
              <h1>Sign in</h1>
              <div className={style.social_container}>
                <Link to="/" target="_blank" className={style.social}>
                  <i className="fab fa-github"></i>
                </Link>
                <Link to="/" target="_blank" className={style.social}>
                  <i className="fab fa-codepen"></i>
                </Link>
                <Link to="/" target="_blank" className={style.social}>
                  <i className="fab fa-google"></i>
                </Link>
              </div>
              <span> Or sign in using E-Mail Address</span>
              <label>
                <input type="email" placeholder="Email" autoComplete="off" />
              </label>
              <label>
                <input
                  type="password"
                  placeholder="Password"
                  autoComplete="off"
                />
              </label>
              <Link to="/">Forgot your password?</Link>
              <button>Sign In</button>
            </form>
          </div>
          <div className={style.overlay_container}>
            <div className={style.overlay}>
              <div className={`${style.overlay_panel} ${style.overlay_left}`}>
                <h1>Log in</h1>
                <p>Sign in here if you already have an account </p>
                <button
                  className={`${style.ghost} mt-5`}
                  onClick={(e) => {
                    setActive(false);
                  }}
                  id="signIn"
                >
                  Sign In
                </button>
              </div>
              <div className={`${style.overlay_panel} ${style.overlay_right}`}>
                <h1>Create, Account!</h1>
                <p>Sign up if you still don't have an account ... </p>
                <button
                  className={style.ghost}
                  onClick={(e) => {
                    setActive(true);
                  }}
                  id="signUp"
                >
                  Sign Up
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Signup;
