import React, { useState } from "react";
import { DatePicker, Space } from "antd";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
import style from "./Date.module.css";
import moment from "moment/moment";

const Dates = () => {
  dayjs.extend(customParseFormat);
  const { RangePicker } = DatePicker;
  const [date, setDate] = useState([moment(), moment()]);
  const disabledDate = (current) => {
    return current && current < dayjs().endOf("day");
  };
  return (
    <Space direction="vertical" size={12}>
      <RangePicker
        format="DD-MM-YYYY"
        disabledDate={disabledDate}
        popupClassName={style.popup}
        className={style.date}
        onChange={(val) => {
          setDate(val.map((item) => item.format("DD-MM-YYYY")));
        }}
        required={true}
      />
    </Space>
  );
};
export default Dates;
