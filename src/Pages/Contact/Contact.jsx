import React, { useState } from "react";
import style from "./contact.module.css";
import { useDispatch, useSelector } from "react-redux";

const Contact = () => {
  const dispatch = useDispatch();
  const { contactData } = useSelector((state) => state.setData);

  const [user, setUser] = useState({
    fname: "",
    lname: "",
    email: "",
    help: "",
    phone: "",
  });

  const handleChange = (e) => {
    const value = e.target.value;

    setUser({ ...user, [e.target.name]: value });
  };
  const handleClick = (e) => {
    e.preventDefault();
    dispatch({
      type: "setData",
      payload: user,
    });
    setTimeout(() => {
      console.log(contactData);
    }, 5000);
  };

  return (
    <div className="container-fluid">
      <div className={`container-fluid my-auto ${style.custom}`}>
        <div className="row">
          <div className="col">
            <div className="container text-center">
              <span className="text-uppercase fs-6">
                PEARL-CONTINENTAL HOTEL LAHORE
              </span>
              <h1 className="text-uppercase fw-bold fs-1">Contact us</h1>
              <hr />
              <span className="text-uppercase text-warning fs-6">
                reservations
              </span>
              <p className="fs-5">
                <span className="text-warning fw-bold fs-5">T:</span> +92 (42)
                111 505 505, 3636 0210 /{" "}
                <span className="text-warning fw-bold fs-5">F:</span> +92 (42)
                3636 2760, 3636 4362
                <br />
                <span className="text-warning fw-bold fs-5">E:</span>{" "}
                pchl@pchotels.com /{" "}
                <span className="text-warning fw-bold fs-5">W:</span>{" "}
                pchotels.com /{" "}
                <span className="text-warning fw-bold fs-5">FB:</span>{" "}
                www.facebook.com/PC.Lahore/ <br />
                <span className="text-warning fw-bold fs-5">IG:</span>{" "}
                www.instagram.com/pearl_continental_lahore
              </p>
            </div>
          </div>
        </div>
      </div>
      <hr />
      <div className="row">
        <div className="col">
          <div className="container w-50  text-center">
            <label className="text-uppercase ps-2 pt-2 my-3 text-start bg-dark text-warning w-50">
              Your Message to : PC Lahore
            </label>
            <form className="">
              <div className="d-flex flex-row">
                <input
                  type="text"
                  name="fname"
                  onChange={handleChange}
                  placeholder="First Name"
                  className={`${style.custom_input} me-1 w-50`}
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  name="lname"
                  onChange={handleChange}
                  className={`${style.custom_input} ms-1 w-50`}
                />
              </div>
              <div className="d-flex my-4 flex-row">
                <input
                  type="text"
                  placeholder="Email"
                  onChange={handleChange}
                  name="email"
                  className={`${style.custom_input} me-1 w-50`}
                />
                <input
                  type="number"
                  placeholder="Phone"
                  onChange={handleChange}
                  name="phone"
                  className={`${style.custom_input} ms-1 w-50`}
                />
              </div>
              <label className="text-uppercase text-start" htmlFor="help">
                How Can we help you?
              </label>
              <div class="form-floating">
                <textarea
                  className={`form-control  shadow-none border-dark border border-1  `}
                  placeholder="Leave a comment here"
                  name="help"
                  onChange={handleChange}
                  id="floatingTextarea2"
                  style={{ height: "200px" }}
                ></textarea>
                <label for="floatingTextarea2">Comments</label>
              </div>
              <input
                type="submit"
                onClick={handleClick}
                className="font-medium text-base px-4 py-2 my-3 leading-relaxed inline-block rounded-4 whitespace-nowrap cursor-pointer bg-black text-white"
                value="Submit"
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
