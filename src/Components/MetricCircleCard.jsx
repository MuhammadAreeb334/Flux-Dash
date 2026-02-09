import React from "react";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

const MetricCircleCard = ({ title, value, data, colors }) => {
  return (
    <div className="bg-[#1d1d29] p-4 rounded-2xl flex flex-col h-full lg:row-span-2">
      <div className="flex items-start justify-between mb-5">
        <div>
          <p className="text-gray-400 text-xs font-medium uppercase tracking-wider">
            {title}
          </p>
          <h3 className="text-3xl font-bold text-white mt-1">{value}</h3>
          <p className="text-[10px] text-gray-500 mt-1">since last month</p>
        </div>
        <div>
          <div className="mt-4 space-y-3 w-full">
            {data.map((item, index) => (
              <div key={item.name} className="flex items-center gap-1">
                <div
                  className="w-4 h-2.5 rounded-full"
                  style={{ backgroundColor: colors[index] }}
                />
                <div className="flex gap-1 text-xs">
                  <span className="text-gray-400">{item.value}%</span>
                  <span className="text-gray-400">{item.name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <ResponsiveContainer width={150} height={150}>
        <PieChart className="pointer-events-none">
          <Pie
            data={data}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            innerRadius={40}
            outerRadius={70}
            paddingAngle={4}
            stroke="none"
          >
            {data.map((_, index) => (
              <Cell
                key={`cell-${index}`}
                fill={colors[index % colors.length]}
              />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default MetricCircleCard;
