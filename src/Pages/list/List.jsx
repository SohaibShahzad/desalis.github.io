import style from "./list.module.css";
import Navbar from "../../Components/Navbar/Navbar";
// import { useLocation } from "react-router-dom";
import { useState } from "react";
import { format } from "date-fns";
import Card from "../../Components/Card/Card";
// import useFetch from "../../hooks/useFetch";
import Dates from "../../Components/date/Date";

const List = () => {
  const [destination, setDestination] = useState("New York");
  const loading = false;
  // const location = useLocation();
  // const [destination, setDestination] = useState(location.state.destination);
  // const [dates, setDates] = useState(location.state.dates);
  const [openDate, setOpenDate] = useState(false);
  // const [options, setOptions] = useState(location.state.options);
  const [min, setMin] = useState(undefined);
  const [max, setMax] = useState(undefined);

  // const { data, loading, error, reFetch } = useFetch(
  //   `/hotels?city=${destination}&min=${min || 0 }&max=${max || 999}`
  // );

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

  const handleClick = () => {
    // reFetch();
  };

  return (
    <div className="w-100">
      <Navbar list={false} />
      <div className={`${style.listContainer}`}>
        <div className={`row justify-content-around ${style.listWrapper}`}>
          <div className={`col-3 ${style.listSearch}`}>
            <h1 className={style.lsTitle}>Search</h1>
            <div className={style.lsItem}>
              <label>Destination</label>
              <input placeholder={destination} type="text" />
            </div>
            <div className={style.lsItem}>
              <label>Check-in Date</label>
              <span onClick={() => setOpenDate(!openDate)}>
                {/* {`${format(
                dates[0].startDate,
                "MM/dd/yyyy"
              )} to ${format(dates[0].endDate, "MM/dd/yyyy")}`} */}
              </span>
              {openDate && <Dates />}
            </div>
            <div className={style.lsItem}>
              <label>Options</label>
              <div className={style.lsOptions}>
                <div className={style.lsOptionItem}>
                  <span className={style.lsOptionText}>
                    Min price <small>per night</small>
                  </span>
                  <input
                    type="number"
                    onChange={(e) => setMin(e.target.value)}
                    className={style.lsOptionInput}
                  />
                </div>
                <div className={style.lsOptionItem}>
                  <span className={style.lsOptionText}>
                    Max price <small>per night</small>
                  </span>
                  <input
                    type="number"
                    onChange={(e) => setMax(e.target.value)}
                    className={style.lsOptionInput}
                  />
                </div>
                <div className={style.lsOptionItem}>
                  <span className={style.lsOptionText}>Adult</span>
                  <input
                    type="number"
                    min={1}
                    className={style.lsOptionInput}
                    // placeholder={options.adult}
                  />
                </div>
                <div className={style.lsOptionItem}>
                  <span className={style.lsOptionText}>Children</span>
                  <input
                    type="number"
                    min={0}
                    className={style.lsOptionInput}
                    // placeholder={options.children}
                  />
                </div>
                <div className={style.lsOptionItem}>
                  <span className={style.lsOptionText}>Room</span>
                  <input
                    type="number"
                    min={1}
                    className={style.lsOptionInput}
                    // placeholder={options.room}
                  />
                </div>
              </div>
            </div>
            <button onClick={handleClick}>Search</button>
          </div>
          <div className={`col-8 ${style.listResult}`}>
            {loading ? (
              "Loading please wait"
            ) : (
              <>
                {data.map((item) => (
                  <Card item={item} key={item._id} />
                ))}
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default List;
