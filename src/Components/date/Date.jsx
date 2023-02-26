import React from "react";
import { DatePicker, Space } from "antd";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
import style from "./Date.module.css";
import { useDispatch } from "react-redux";

const Dates = () => {
  dayjs.extend(customParseFormat);
  const { RangePicker } = DatePicker;
  const dispatch = useDispatch();

  const disabledDate = (current) => {
    return current && current < dayjs().endOf("day");
  };
  return (
    <Space direction="vertical" size={12}>
      <RangePicker
        bordered={false}
        format="DD-MM-YYYY"
        disabledDate={disabledDate}
        popupClassName={style.popup}
        className={style.date}
        placeholder={["Check In", "Check Out"]}
        onChange={(val) => {
          dispatch({
            type: "SET_DATE",
            payload: val.map((v) => v.format("DD-MM-YYYY")),
          });
        }}
        required={true}
      />
    </Space>
  );
};
export default Dates;
