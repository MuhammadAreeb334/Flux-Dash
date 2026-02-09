import React, { useState } from "react";
import DatePicker from "react-datepicker";
import { Calendar } from "lucide-react";
import "react-datepicker/dist/react-datepicker.css";
// import "./datepicker-custom.css";
const DateRangeSelector = () => {
  const [startDate, setStartDate] = useState(new Date("2022/08/01"));
  const [endDate, setEndDate] = useState(new Date("2022/08/31"));

  const onChage = (dates) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
  };
  return (
    <div className="relative">
      <DatePicker
        selected={startDate}
        onChange={onChage}
        startDate={startDate}
        endDate={endDate}
        selectsRange
        customInput={
          <button className=" hidden md:flex items-center gap-3 bg-[#1d1d29] px-5 py-1 border border-white/10 rounded-md text-xs font-medium text-gray-300 hover:bg-white/5 transition-all">
            <span>
              {startDate.toLocaleDateString("de-DE")} -{" "}
              {endDate?.toLocaleDateString("de-DE")}
            </span>
            <Calendar size={14} className="text-gray-400" />
          </button>
        }
      />
    </div>
  );
};

export default DateRangeSelector;
