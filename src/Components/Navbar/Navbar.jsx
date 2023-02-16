import style from "./navbar.module.css";
import React from "react";
import { NavLink, Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import $ from "jquery";
import { useEffect, useState } from "react";
import PersonIcon from "@mui/icons-material/Person";
import HotelIcon from "@mui/icons-material/Hotel";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import Dates from "../date/Date";
import SearchIcon from "@mui/icons-material/Search";
import AddIcon from "@mui/icons-material/Add";
import MailIcon from "@mui/icons-material/Mail";
import Badge from "@mui/material/Badge";
import NotificationsIcon from "@mui/icons-material/Notifications";
import LogoutIcon from "@mui/icons-material/Logout";
import RemoveIcon from "@mui/icons-material/Remove";
import Popover from "@mui/material/Popover";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Avatar from "@mui/material/Avatar";
import { useSelector } from "react-redux";

const Navbar = ({ list }) => {
  // const location = window.location.pathname;
  // const dispatch = useDispatch();
  // if (location === "/") {
  //   dispatch({
  //     type: "sethoteldata",
  //     payload: true,
  //   });
  // } else {
  //   dispatch({
  //     type: "sethoteldata",
  //     payload: false,
  //   });
  // }
  // const { c } = useSelector((state) => state.navOpen);

  // Popover Material UI Code
  const [anchorEl, setAnchorEl] = useState(null);
  const [anchorEl1, setAnchorEl1] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClick1 = (event) => {
    setAnchorEl1(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleClose1 = () => {
    setAnchorEl1(null);
  };
  const open = Boolean(anchorEl);
  const open1 = Boolean(anchorEl1);
  const id = open ? "simple-popover" : undefined;
  const id1 = open1 ? "simple-popover" : undefined;
  // Popover Material UI Code

  const [menuOpen, setMenuOpen] = useState(false);
  const dispatch = useDispatch();
  const [openOptions, setOpenOptions] = useState(false);
  const { options } = useSelector((state) => state.searchOption);
  console.log(options);
  const [option, setOption] = useState({
    adult: 1,
    children: 0,
    room: 1,
  });
  useEffect(() => {
    dispatch({
      type: "SET_OPTION",
      payload: option,
    });
  }, [option]);

  const handleOption = (name, operation) => {
    setOption((prev) => {
      return {
        ...prev,
        [name]: operation === "i" ? options[name] + 1 : options[name] - 1,
      };
    });
  };
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.user);
  const handleOnSearch = () => {
    navigate(`/list`);
  };

  const data = [
    {
      name: "Hotels",
      img: "",
    },
    {
      name: "Apartments",
      img: "",
    },
    {
      name: "Villas",
      img: "",
    },
    {
      name: "Hostels",
      img: "",
    },
    {
      name: "Resorts",
      img: "",
    },
  ];

  useEffect(() => {
    $(window).scroll(() => {
      let scroll = $(window).scrollTop();
      let box = $(`.${style.header_text}`).height();
      let header = $("header").height();
      if (scroll > box - header) {
        $("header").addClass(`${style.background_header}`);
      } else {
        $("header").removeClass(`${style.background_header}`);
      }
    });
  }, []);
  return (
    <>
      <header
        className={`${style.header_area} ${style.header_sticky} ${style.wow} ${
          style.slideInDown
        } ${!list ? "bg-primary position-static" : ""}`}
        data-wow-duration="0.75s"
        data-wow-delay="0s"
      >
        <div className="container">
          <div className="row">
            <div className="col-12">
              <nav className={style.main_nav}>
                <a href="index.html" className={style.logo}></a>
                <ul className={style.nav}>
                  <li>
                    <NavLink to="/" className="active">
                      Hotels
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/hotel">Parkings</NavLink>
                  </li>
                  {user ? (
                    <>
                      <li>
                        <NavLink to="/">
                          <span className={style.iconShow}>
                            <Badge
                              color="secondary"
                              badgeContent={100}
                              max={999}
                            >
                              <MailIcon
                                aria-describedby={id}
                                variant="contained"
                                onClick={handleClick}
                              />
                            </Badge>
                            <Popover
                              id={id}
                              open={open}
                              anchorEl={anchorEl}
                              onClose={handleClose}
                              anchorOrigin={{
                                vertical: "bottom",
                                horizontal: "left",
                              }}
                            >
                              <Typography sx={{ p: 2 }}>
                                The content of the Popover.
                                <h4>Hello World</h4>
                              </Typography>
                            </Popover>
                          </span>
                          <span className={style.iconHide}>
                            <Button
                              className={style.iconHide}
                              sx={{ color: "#191a20" }}
                              aria-describedby={id}
                              // variant="contained"
                              onClick={handleClick}
                            >
                              Messages
                            </Button>
                            {/* Messages */}
                          </span>
                        </NavLink>
                      </li>
                      <li>
                        <NavLink to="/">
                          <span className={style.iconShow}>
                            <Badge
                              color="secondary"
                              badgeContent={1000}
                              max={999}
                            >
                              <NotificationsIcon
                                aria-describedby={id1}
                                variant="contained"
                                onClick={handleClick1}
                              />
                            </Badge>
                            <Popover
                              id={id1}
                              open={open1}
                              anchorEl={anchorEl1}
                              onClose={handleClose1}
                              anchorOrigin={{
                                vertical: "bottom",
                                horizontal: "center",
                              }}
                              transformOrigin={{
                                vertical: "top",
                                horizontal: "center",
                              }}
                            >
                              <Typography sx={{ p: 2 }}>
                                The content of the Popover.1
                                <h4>Hello World 1</h4>
                              </Typography>
                            </Popover>
                          </span>
                          <span className={style.iconHide}>
                            {/* Notifications */}
                            {/* <Typography
                              className={style.iconHide}
                              sx={{ color: "#191a20" }}
                              aria-describedby={id1}
                              // variant="contained"
                              onClick={handleClick1}
                            >
                              Notification
                            </Typography> */}
                            <Button
                              className={style.iconHide}
                              sx={{ color: "#191a20" }}
                              aria-describedby={id1}
                              // variant="contained"
                              onClick={handleClick1}
                            >
                              Notifications
                            </Button>
                          </span>
                        </NavLink>
                      </li>
                      <li>
                        <NavLink to="/">
                          <span className={style.iconShow}>
                            <Avatar
                              alt="Remy Sharp"
                              src="/static/images/avatar/1.jpg"
                            />
                          </span>
                          <span className={style.iconHide}>Profile</span>
                        </NavLink>
                      </li>
                      <li>
                        <NavLink to="/">
                          <LogoutIcon /> Logout
                        </NavLink>
                      </li>
                    </>
                  ) : (
                    <>
                      {" "}
                      <li>
                        <NavLink to="/signup">Sign Up</NavLink>
                      </li>
                      <li>
                        <NavLink to="/signin">Sign In</NavLink>
                      </li>
                    </>
                  )}

                  <li>
                    <span className={style.main_white_button}>
                      <NavLink to="/listproperty">
                        <AddIcon /> Add Your Property
                      </NavLink>
                    </span>
                  </li>
                </ul>
                <a
                  className={`${style.menu_trigger} ${
                    menuOpen ? style.active : ""
                  }`}
                  onClick={() => {
                    setMenuOpen(!menuOpen);
                    $(`.${style.header_area} .${style.nav}`).slideToggle(200);
                  }}
                >
                  <span>Menu</span>
                </a>
              </nav>
            </div>
          </div>
        </div>
      </header>

      {list && (
        <div className={style.main_banner}>
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className={`${style.top_text} ${style.header_text}`}>
                  <h6>Over 36,500+ Active Listings</h6>
                  <h2>Find Nearby Places &amp; Things</h2>
                </div>
              </div>
              <div className="col-lg-12">
                <div id={style.search_form}>
                  <div className="row position-relative">
                    <div className="col-lg-3 align-self-center">
                      <fieldset className="d-flex align-items-center">
                        <HotelIcon className=" me-2" />
                        <input
                          type="text"
                          name="city"
                          className={style.form_select}
                          placeholder="Enter your city"
                          autoComplete="off"
                          // required
                          onChange={(e) =>
                            dispatch({
                              type: "SET_CITY",
                              payload: e.target.value,
                            })
                          }
                        />
                      </fieldset>
                    </div>
                    <div className="col-lg-3 align-self-center">
                      <fieldset className="d-flex align-items-center">
                        <CalendarMonthIcon className=" me-2" />
                        <Dates />
                      </fieldset>
                    </div>
                    <div className="col-lg-3 align-self-center position-relative">
                      <fieldset className="d-flex align-items-center">
                        <PersonIcon className=" me-2" />
                        <span
                          onClick={() => setOpenOptions(!openOptions)}
                          className={style.headerSearchText}
                        >{`${options.adult} adult · ${options.children} children · ${options.room} room`}</span>
                        {openOptions && (
                          <div className={style.options}>
                            <div className={style.optionItem}>
                              <span className={style.optionText}>Adult</span>
                              <div className={style.optionCounter}>
                                <button
                                  disabled={options.adult <= 1}
                                  className={`btn btn-primary d-flex justify-content-center align-items-center ${style.optionCounterButton}`}
                                  onClick={() => handleOption("adult", "d")}
                                >
                                  <RemoveIcon />
                                </button>
                                <span className={style.optionCounterNumber}>
                                  {options.adult}
                                </span>
                                <button
                                  className={`btn btn-primary d-flex justify-content-center align-items-center ${style.optionCounterButton}`}
                                  onClick={() => handleOption("adult", "i")}
                                >
                                  <AddIcon />
                                </button>
                              </div>
                            </div>
                            <div className={style.optionItem}>
                              <span className={style.optionText}>Children</span>
                              <div className={style.optionCounter}>
                                <button
                                  disabled={options.children <= 0}
                                  className={`btn btn-primary d-flex justify-content-center align-items-center ${style.optionCounterButton}`}
                                  onClick={() => handleOption("children", "d")}
                                >
                                  <RemoveIcon />
                                </button>
                                <span className={style.optionCounterNumber}>
                                  {options.children}
                                </span>
                                <button
                                  className={`btn btn-primary d-flex justify-content-center align-items-center ${style.optionCounterButton}`}
                                  onClick={() => handleOption("children", "i")}
                                >
                                  <AddIcon />
                                </button>
                              </div>
                            </div>
                            <div className={style.optionItem}>
                              <span className={style.optionText}>Room</span>
                              <div className={style.optionCounter}>
                                <button
                                  disabled={options.room <= 1}
                                  className={`btn btn-primary d-flex justify-content-center align-items-center ${style.optionCounterButton}`}
                                  onClick={() => handleOption("room", "d")}
                                >
                                  <RemoveIcon />
                                </button>
                                <span className={style.optionCounterNumber}>
                                  {options.room}
                                </span>
                                <button
                                  className={`btn btn-primary d-flex justify-content-center align-items-center ${style.optionCounterButton}`}
                                  onClick={() => handleOption("room", "i")}
                                >
                                  <AddIcon />
                                </button>
                              </div>
                            </div>
                          </div>
                        )}
                      </fieldset>
                    </div>
                    <div className="col-lg-3">
                      <fieldset>
                        <button
                          type="submit"
                          className={style.main_button}
                          onClick={handleOnSearch}
                        >
                          <SearchIcon /> Search Now
                        </button>
                      </fieldset>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-10 offset-lg-1">
                <ul className={style.categories}>
                  {data.map((item, index) => {
                    return (
                      <li key={index}>
                        <Link to="category.html">
                          <span className={style.icon}>
                            <img src={item.img} alt={item.name} />
                          </span>{" "}
                          {item.name}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
