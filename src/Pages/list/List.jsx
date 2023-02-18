import style from "./list.module.css";
import Navbar from "../../Components/Navbar/Navbar";
import { useState, useEffect } from "react";
import Card from "../../Components/Card/Card";
// import useFetch from "../../hooks/useFetch";
import Dates from "../../Components/date/Date";
import { useSelector, useDispatch } from "react-redux";

const List = () => {
  const dispatch = useDispatch();
  const { city } = useSelector((state) => state.searchCity);
  const { dates } = useSelector((state) => state.searchDate);
  const { options } = useSelector((state) => state.searchOption);
  const [option, setOption] = useState(options);
  const loading = false;
  const [openDate, setOpenDate] = useState(false);
  const [min, setMin] = useState(undefined);
  const [max, setMax] = useState(undefined);

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
              <input placeholder={city} type="text" />
            </div>
            <div className={style.lsItem}>
              <label>Check-in Date</label>
              <span onClick={() => setOpenDate(!openDate)}>
                {dates[0] ? `${dates[0]} to ${dates[1]}` : null}
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
                    placeholder={options.adult}
                    onChange={(e) =>
                      e.target.value < 1 || e.target.value === ""
                        ? dispatch({
                            type: "SET_OPTION",
                            payload: { ...options, adult: 1 },
                          })
                        : dispatch({
                            type: "SET_OPTION",
                            payload: { ...options, adult: e.target.value },
                          })
                    }
                  />
                </div>
                <div className={style.lsOptionItem}>
                  <span className={style.lsOptionText}>Children</span>
                  <input
                    type="number"
                    min={0}
                    className={style.lsOptionInput}
                    placeholder={options.children}
                    onChange={(e) =>
                      e.target.value < 0 || e.target.value === ""
                        ? dispatch({
                            type: "SET_OPTION",
                            payload: { ...options, children: 0 },
                          })
                        : dispatch({
                            type: "SET_OPTION",
                            payload: { ...options, children: e.target.value },
                          })
                    }
                  />
                </div>
                <div className={style.lsOptionItem}>
                  <span className={style.lsOptionText}>Room</span>
                  <input
                    type="number"
                    min={1}
                    className={style.lsOptionInput}
                    placeholder={options.room}
                    onChange={(e) =>
                      e.target.value < 1 || e.target.value === ""
                        ? dispatch({
                            type: "SET_OPTION",
                            payload: { ...options, room: 1 },
                          })
                        : dispatch({
                            type: "SET_OPTION",
                            payload: { ...options, room: e.target.value },
                          })
                    }
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
