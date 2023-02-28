import style from "./list.module.css";
import Navbar from "../../Components/Navbar/Navbar";
import { useState } from "react";
import Card from "../../Components/Card/Card";
// import useFetch from "../../hooks/useFetch";
import Dates from "../../Components/date/Date";
import { useSelector, useDispatch } from "react-redux";

const List = () => {
  const dispatch = useDispatch();
  const { city } = useSelector((state) => state.searchCity);
  const { dates } = useSelector((state) => state.searchDate);
  const { options } = useSelector((state) => state.searchOption);
  const { hotel_data } = useSelector((state) => state.getStaticHotels);

  const { activePath } = useSelector((state) => state.activePath);

  console.log("From List", seacrhLoc);

  // For Hotel and parking
  // Getting City For Hotel and Parking
  const { cityHotelAndParking } = useSelector(
    (state) => state.searchHotelAndParkingCity
  );

  // Getting Static Data For Hotel and parking
  const { hotel_parking_data } = useSelector(
    (state) => state.getStaicHotalParking
  );

  // Checking City For Hotel and parking
  const checkHotelParkingCity = (hotel_parking_data) => {
    return (
      hotel_parking_data.hotel_city.toLowerCase() ===
      cityHotelAndParking.toLowerCase()
    );
  };
  // Filtering Data For Hotel and `parking
  let filtered_hotel_parking = [];
  if (hotel_parking_data) {
    filtered_hotel_parking = hotel_parking_data.filter(checkHotelParkingCity);
  }
  console.log(filtered_hotel_parking);
  // For Hotel and parking

  const [option, setOption] = useState(options);
  const loading = false;
  const [openDate, setOpenDate] = useState(false);
  // const [min, setMin] = useState(undefined);
  // const [max, setMax] = useState(undefined);

  const checkCity = (hotel_data) => {
    return hotel_data.city.toLowerCase() === city.toLowerCase();
  };

  let filtered_data = [];
  if (hotel_data) {
    filtered_data = hotel_data.filter(checkCity);
  }
  console.log(filtered_data);

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
              <input
                placeholder={city === "" ? cityHotelAndParking : city}
                type="text"
              />
            </div>
            <div className={style.lsItem}>
              <label>Check-in Date</label>
              <span
                style={{ fontSize: "15px" }}
                onClick={() => setOpenDate(!openDate)}
              >
                {dates[0] ? `${dates[0]} to ${dates[1]}` : null}
              </span>
              {openDate && <Dates />}
            </div>
            <div className={style.lsItem}>
              <label>Options</label>
              <div className={style.lsOptions}>
                {/* <div className={style.lsOptionItem}>
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
                </div> */}
                <div className={style.lsOptionItem}>
                  <span className={style.lsOptionText}>Adult</span>
                  <input
                    type="number"
                    min={1}
                    className={style.lsOptionInput}
                    placeholder={option.adult}
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
                      e.target.value < 1 || e.target.value === ""
                        ? dispatch({
                            type: "SET_OPTION",
                            payload: { ...options, children: 1 },
                          })
                        : dispatch({
                            type: "SET_OPTION",
                            payload: { ...options, adult: e.target.value },
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
                    placeholder={
                      options.singleRoom + options.twinRoom + options.familyRoom
                    }
                    onChange={(e) =>
                      e.target.value < 1 || e.target.value === ""
                        ? dispatch({
                            type: "SET_OPTION",
                            payload: { ...options, SingleRoom: 1 },
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
            <button className="btn btn-primary " onClick={handleClick}>
              Search
            </button>
          </div>
          <div className={`col-8 ${style.listResult}`}>
            {loading ? (
              "Loading please wait"
            ) : (
              <>
                {/* {hotel_data.map((item) => (
                  <Card item={item} key={item._id} />
                ))} */}
                {activePath === "hotel" &&
                  filtered_data.map((item) => (
                    <Card item={item} key={item._id} />
                  ))}
                {activePath === "hotelAndParking" &&
                  filtered_hotel_parking.map((item) => (
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
