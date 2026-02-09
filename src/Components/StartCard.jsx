import React from "react";
import { MoveUp, MoveDown } from "lucide-react";

const StartCard = ({ title, value, trend, isUp, icon }) => {
  return (
    <div className="bg-[#1d1d29] p-5 rounded-2xl flex flex-col justify-between h-36">
      <div className="flex justify-between items-start">
        <span className="text-gray-400 text-sm font-medium">{title}</span>
        <div className="text-gray-400 opacity-80">{icon}</div>
      </div>

      <div className="space-y-1">
        <h3 className="text-3xl font-semibold text-white tracking-tight">
          {value}
        </h3>

        <div className="flex items-center gap-1">
          <div
            className={`flex items-center text-[10px] font-bold ${isUp ? "text-green-500" : "text-red-500"}`}
          >
            {isUp ? <MoveUp size={12} /> : <MoveDown size={12} />}
            <span>{trend}</span>
          </div>
          <span className="text-[10px] text-gray-500">since last month</span>
        </div>
      </div>
    </div>
  );
};

export default StartCard;
