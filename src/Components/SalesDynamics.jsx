import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from "recharts";

const SalesDynamics = () => {
  const data = [
    { name: "JAN", value: 210 },
    { name: "FEB", value: 160 },
    { name: "MAR", value: 230 },
    { name: "APR", value: 195 },
    { name: "MAY", value: 270 },
    { name: "JUN", value: 210 },
    { name: "JUL", value: 215 },
    { name: "AUG", value: 70 },
    { name: "SEP", value: 230 },
    { name: "OCT", value: 260 },
    { name: "NOV", value: 310 },
    { name: "DEC", value: 380 },
  ];
  return (
    <div className="h-full">
      <div className="bg-[#1d1d29] p-2 sm:p-4 mt-5 rounded-2xl lg:col-span-2">
        <div className="flex justify-between items-center mb-8">
          <h3 className="text-white font-medium">Sales dynamics</h3>
          <select className="bg-transparent text-gray-400 text-sm border-none outline-none cursor-pointer">
            <option>2021</option>
          </select>
        </div>
        <div className="h-[200px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={data}
              margin={{ top: 0, right: 0, left: -20, bottom: 0 }}
            >
              <XAxis
                dataKey="name"
                axisLine={false}
                tickLine={false}
                tick={{ fill: "#6b7280", fontSize: 12 }}
                dy={10}
              />
              <YAxis
                axisLine={false}
                tickLine={false}
                tick={{ fill: "#6b7280", fontSize: 12 }}
                ticks={[0, 100, 200, 300, 400]}
                tickFormatter={(value) => `${value}k`}
              />
              <Tooltip cursor={{ fill: "transparent" }} />
              <Bar
                dataKey="value"
                fill="#3b82f6"
                radius={[10, 10, 10, 10]}
                barSize={12}
                background={{ fill: "#ffffff", radius: 10 }}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default SalesDynamics;
