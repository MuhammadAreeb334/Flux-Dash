import React from "react";
import {
  Area,
  AreaChart,
  Brush,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const OverallUserActivity = () => {
  const data = [
    { name: "Jan", uv: 180 },
    { name: "Feb", uv: 220 },
    { name: "Mar", uv: 190 },
    { name: "Apr", uv: 280 },
    { name: "May", uv: 250 },
    { name: "Jun", uv: 310 },
    { name: "Jul", uv: 290 },
    { name: "Aug", uv: 210 },
    { name: "Sep", uv: 267 },
    { name: "Oct", uv: 270 },
    { name: "Nov", uv: 340 },
    { name: "Dec", uv: 380 },
  ];

  return (
    <div className="">
      <div className="bg-[#1d1d29] p-2 sm:p-4 rounded-2xl lg:col-span-2">
        <div className="flex justify-between items-center mb-8">
          <h3 className="text-white font-medium">Overall User Activity</h3>
          <select className="bg-transparent text-gray-400 text-sm border-none outline-none cursor-pointer">
            <option>2021</option>
          </select>
        </div>
        <div className="h-[200px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart
              data={data}
              margin={{ top: 10, right: 10, left: -20, bottom: 0 }}
            >
              <defs>
                <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#a855f7" stopOpacity={0.3} />
                  <stop offset="95%" stopColor="#a855f7" stopOpacity={0} />
                </linearGradient>
              </defs>
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
              <Tooltip
                contentStyle={{
                  backgroundColor: "#1d1d29",
                  border: "none",
                  borderRadius: "8px",
                }}
                itemStyle={{ color: "#fff" }}
              />
              <Area
                type="monotone"
                dataKey="uv"
                stroke="#a855f7"
                strokeWidth={3}
                fillOpacity={1}
                fill="url(#colorUv)"
              />
              {/* <Brush dataKey="name" height={20} stroke="#8884d8" /> */}
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default OverallUserActivity;
