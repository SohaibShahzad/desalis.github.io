import React from "react";
import { Select } from "antd";
import { useDispatch, useSelector } from "react-redux";

const Dropdown = (props) => {
  const dispatch = useDispatch();
  const citiesHotel = ["Lahore", "Karachi", "Islamabad"];
  const citiesParking = ["Tokyo", "London", "Paris"];
  const citiesHotelAndParking = ["London", "Tokyo", "Sydney"];
  const { name } = props;
  const { city } = useSelector((state) => state.searchCity);
  const { cityParking } = useSelector((state) => state.searchParkingCity);
  const { cityHotelAndParking } = useSelector(
    (state) => state.searchHotelAndParkingCity
  );
  return (
    <Select
      showSearch
      style={{ width: "100%" }}
      allowClear
      placeholder={props.placeholder}
      // value={
      //   name === "cityHotel"
      //     ? city
      //     : name === "cityParking"
      //     ? cityParking
      //     : cityHotelAndParking
      // }
      optionFilterProp="children"
      // filterOption={(input, option) => (option?.label ?? "").includes(input)}
      // option.label.toLowerCase().indexOf(input.toLowerCase()) >= 0
      filterOption={(input, option) =>
        option?.label.toLowerCase().slice(0, input.length) ===
        input.toLowerCase()
      }
      filterSort={(optionA, optionB) =>
        (optionA?.label ?? "")
          .toLowerCase()
          .localeCompare((optionB?.label ?? "").toLowerCase())
      }
      options={
        name === "cityHotel"
          ? citiesHotel.map((city) => ({
              value: city,
              label: city,
            }))
          : name === "cityParking"
          ? citiesParking.map((city) => ({
              value: city,
              label: city,
            }))
          : citiesHotelAndParking.map((city) => ({
              value: city,
              label: city,
            }))
      }
      onClick={() => {
        dispatch({ type: "ALERTCITY", payload: false });
      }}
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
