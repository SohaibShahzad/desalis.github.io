import React from "react";
import "../css/Dashboard.css";
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

  // const chart = (argument) => {
  //   return argument.map((element) => {
  //     return (
  //       <div className="col-5" key={element.key}>
  //         <Chart
  //           options={element.options}
  //           series={element.series}
  //           type="bar"
  //           width="500"
  //         />
  //       </div>
  //     );
  //   });
  // };

  return (
    <>
      <Sidebar />
      <div className={`bg-${mode === "light" ? "light" : "dark"}`}>
        <div className="bg-success w-100">
          <div className="d-flex align-items-center py-4 text-light">
            <ArrowForwardIosIcon className="header-icon" />
            <h1 className="header-item">DashBoard</h1>
            <ArrowBackIosNewIcon className="header-icon" />
          </div>
        </div>

        <div className={`row justify-content-center mt-4`}>
          {view === "admin"
            ? card(adminCard)
            : view === "wholeseller"
              ? card(wholesellerCard)
              : card(retailerCard)}
        </div>

        {/* <div className="row justify-content-center mt-4">
          {view === "admin"
            ? chart(adminChart)
            : view === "wholeseller"
            ? chart(wholesellerChart)
            : chart(retailerChart)}
        </div> */}
      </div>
    </>
  );
}
