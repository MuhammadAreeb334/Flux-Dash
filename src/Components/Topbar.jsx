import React from "react";
import DateRangeSelector from "./DateRangeSelector";
import Profile from "../Assets/Profile.jpg"

const Topbar = () => {
  return (
    <div className="border border-red-300 p-6">
      <div className="flex items-center justify-between">
        <div className="flex items-end gap-14">
          <h1 className="text-3xl font-semibold tracking-tight">Analytics</h1>
          <DateRangeSelector />
        </div>
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-full overflow-hidden ">
            <img src={Profile} alt="" className="w-full h-auto rounded-full aspect-square object-cover" />
          </div>
          <span className="text-sm">Kristy Kamlykova</span>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
