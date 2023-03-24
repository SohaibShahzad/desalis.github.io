import React from "react";
import styles from '../css/Dashboard.module.css'
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { useSelector } from "react-redux";
import {
  adminCard,
  adminChart,
  retailerCard,
  wholesellerCard,
  wholesellerChart,
  retailerChart,
} from "./DashboardData";
import { Link } from "react-router-dom";
import Sidebar from "./Sidebar";
export default function Dashboard() {
  const mode = useSelector((state) => state.mode);
  const view = useSelector((state) => state.view);

  const card = (argument) => {
    return argument.map((element) => {
      return (
        <div className="col-md-5" key={element.key}>
          <div className="wrapper">
            <Link className={`card1 rounded-3`} to={element.link}>
              <h3>{element.title}</h3>
              <p className="small">{element.description} </p>
              <Link className="go-corner" to="/">
                <div className="go-arrow">→</div>
              </Link>
            </Link>
          </div>
        </div>
      );
    });
  };

  return (
    <>
      <Sidebar />
      <div className={`${styles.bg}-${mode === "light" ? styles.light : styles.dark}`}>
        <div className={`bg-info w-100`}>
          <div className={`d-flex align-items-center py-2 text-light ${styles.header}`}>
            <ArrowForwardIosIcon className={`header-icon ${styles.headerIcon}`} />
            <h2 className={`header-item ${styles.headerItem}`}>Desalis DashBoard</h2>
            <ArrowBackIosNewIcon className={`header-icon ${styles.headerIcon}`} />
          </div>
        </div>

        {/* <div className={`row justify-content-center mt-4`}>
          {view === "admin"
            ? card(adminCard)
            : view === "wholeseller"
              ? card(wholesellerCard)
              : card(retailerCard)}
        </div> */}
      </div>
      <div className="container-fluid">
        {/* <!-- row no-2 start --> */}
        <div class="row pt-3">
          <div class="col-sm-4 ">
            <div class="card bg-light border-light">
              <div class="card-body ">
                <h4 class="card-title "> Total Hotels</h4>
                <div class="img_container">
                  <i class="bi bi-cash-coin  fs-1"></i>
                </div>
                <h1 class="fw-bord">$9,500.00</h1>
                <small class="card-text text-muted p-0 tex text-small"><span
                  class="text-success fw-bold fs-2">+5% </span> increase
                  last month</small>
                {/* <!-- <a href="#" class="btn btn-primary">Go somewhere</a> --> */}
              </div>
            </div>
          </div>
          <div class="col-sm-4">
            <div class="card bg-light border-light">
              <div class="card-body">
                <h4 class="card-title">Total Hotel&Parkings</h4>
                <div class="img_container">
                  <i class="bi bi-bank fs-1"></i>
                </div>
                <h1>$240.00</h1>
                <small class="card-text text-muted p-0 tex text-small"><span
                  class="text-success fw-bold fs-2">+30% </span> increase
                  last month</small>
              </div>
            </div>
          </div>
          <div class="col-sm-4">
            <div class="card bg-light border-light">
              <div class="card-body">
                <div>
                  <h4 class="card-title">Total Parkings</h4>
                  <div class="img_container">
                    <i class="bi bi-cart-plus fs-1"></i>
                  </div>
                  <h1>145</h1>
                  <small id="Row-1-small" class="card-text text-muted p-0 tex text-small"><span
                    class="text-success fw-bold fs-2">+36% </span> increase
                    last month</small>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- row no-2 End --> */}

        {/* <!-- row no-3 start --> */}
        <div class="row pt-3">
          <div class="col-sm-4">
            <div class="card bg-light border-light">
              <div class="card-body">
                <div>
                  <h4 class="card-title">Total Hotel Partners</h4>
                  <div class="img_container">
                    <i class="bi bi-currency-bitcoin fs-1"></i>
                  </div>
                  <h1>$1.7M</h1>
                  <small id="Row-1-small" class="card-text text-muted text-small"><span
                    class="text-danger fw-bold fs-2">+54.1% </span> less
                    earnings</small>
                </div>
              </div>
            </div>
          </div>
          <div class="col-sm-4">
            <div class="card bg-light border-light">
              <div class="card-body">
                <div>
                  <h4 class="card-title">Total Hotel&Parking Partners</h4>
                  <div class="img_container">
                    <i class="bi bi-mortarboard fs-1"></i>
                  </div>
                  <h1>$9M</h1>
                  <small id="Row-1-small" class="card-text text-muted text-small">Grow Rate<span
                    class="text-info fw-bold fs-2">+54.1% </span></small>
                </div>
              </div>
            </div>
          </div>
          <div class="col-sm-4">
            <div class="card bg-light border-light">
              <div class="card-body">
                <div>
                  <h4 class="card-title">Total Parkings Partners</h4>
                  <div class="img_container">
                    <i class="bi bi-building fs-1"></i>
                  </div>
                  <h1>$536</h1>
                  <small id="Row-1-small" class="card-text text-muted text-small">Increased by<span
                    class="text-warning fw-bold fs-2">+7.35% </span></small>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- row no-3 start --> */}
        {/* <!-- row no-3 start --> */}
        <div class="row pt-3 pb-4">
          <div class="col-sm-4">
            <div class="card bg-light border-light">
              <div class="card-body">
                <div>
                  <h4 class="card-title">Total Users Accounts</h4>
                  <div class="img_container">
                    <i class="bi bi-currency-bitcoin fs-1"></i>
                  </div>
                  <h1>$1.7M</h1>
                  <small id="Row-1-small" class="card-text text-muted text-small"><span
                    class="text-danger fw-bold fs-2">+54.1% </span> less
                    earnings</small>
                </div>
              </div>
            </div>
          </div>
          <div class="col-sm-4">
            <div class="card bg-light border-light">
              <div class="card-body">
                <div>
                  <h4 class="card-title">Total Partners Accounts</h4>
                  <div class="img_container">
                    <i class="bi bi-mortarboard fs-1"></i>
                  </div>
                  <h1>$9M</h1>
                  <small id="Row-1-small" class="card-text text-muted text-small">Grow Rate<span
                    class="text-info fw-bold fs-2">+54.1% </span></small>
                </div>
              </div>
            </div>
          </div>
          <div class="col-sm-4">
            <div class="card bg-light border-light">
              <div class="card-body">
                <div>
                  <h4 class="card-title">Total Sub-Partner Accounts</h4>
                  <div class="img_container">
                    <i class="bi bi-building fs-1"></i>
                  </div>
                  <h1>$536</h1>
                  <small id="Row-1-small" class="card-text text-muted text-small">Increased by<span
                    class="text-warning fw-bold fs-2">+7.35% </span></small>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- row no-3 start --> */}
      </div>
    </>
  );
}
