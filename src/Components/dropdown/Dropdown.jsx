import React from "react";
import { Select } from "antd";
import { useDispatch, useSelector } from "react-redux";

const Dropdown = (props) => {
  const dispatch = useDispatch();
  const cities = ["Lahore", "Karachi", "Islamabad"];
  const { name } = props;
  const { city } = useSelector((state) => state.searchCity);
  const { cityParking } = useSelector((state) => state.searchParkingCity);
  const { cityHotelAndParking } = useSelector(
    (state) => state.searchHotelAndParkingCity
  );
  console.log("city", city);
  console.log("cityParking", cityParking);
  console.log("cityHotelAndParking", cityHotelAndParking);

  return (
    <Select
      showSearch
      style={{ width: "100%" }}
      placeholder="Search to Select"
      value={
        name === "city"
          ? city
          : name === "cityParking"
          ? cityParking
          : cityHotelAndParking
      }
      optionFilterProp="children"
      filterOption={(input, option) => (option?.label ?? "").includes(input)}
      filterSort={(optionA, optionB) =>
        (optionA?.label ?? "")
          .toLowerCase()
          .localeCompare((optionB?.label ?? "").toLowerCase())
      }
      options={cities.map((city) => ({
        value: city,
        label: city,
      }))}
      onChange={(value) => {
        if (name === "cityHotel") {
          dispatch({
            type: "SET_CITY",
            payload: value,
          });
        } else if (name === "cityParking") {
          dispatch({ type: "SET_PARKINGCITY", payload: value });
        } else {
          dispatch({ type: "SET_HOTELANDPARKINGCITY", payload: value });
        }
      }}
    />
  );
};

export default Dropdown;
