import React from "react";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

const FinanceCard = ({ title, amount, percentage, color, icon: Icon }) => {
  const data = [{ value: percentage }, { value: 100 - percentage }];
  return (
    <div className="">
      <div className="bg-[#1d1d29] p-3  rounded-2xl flex flex-col justify-between h-45">
        <div className="flex justify-between items-center">
          <div className="text-gray-300 p-2 rounded-lg">{Icon}</div>
          <div className="w-14 h-14 relative">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart className="pointer-events-none">
                <Pie
                  data={data}
                  innerRadius={20}
                  outerRadius={25}
                  startAngle={90}
                  endAngle={-450}
                  dataKey="value"
                  stroke="none"
                >
                  <Cell fill={color} />
                  <Cell fill="#ffffff10" />
                </Pie>
              </PieChart>
            </ResponsiveContainer>
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-[10px] font-bold text-white">+{percentage}%</span>
            </div>
          </div>
        </div>

        <div className="">
          <span className="text-gray-400 text-sm">{title}</span>
          <h2 className="text-2xl font-bold text-white mt-1">{amount}</h2>
          <span className="text-[10px] text-gray-500 mt-2 uppercase tracking-wider">
            Current Financial Year
          </span>
        </div>
      </div>
    </div>
  );
};

export default FinanceCard;
