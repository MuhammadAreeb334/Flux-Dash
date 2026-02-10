import React from "react";
import { RefreshCcw } from "lucide-react";
import Profile1 from "../Assets/profile.jpg";
import Profile2 from "../Assets/profile.jpg";
import Profile3 from "../Assets/profile.jpg";
import Profile4 from "../Assets/profile.jpg";

const CustomerOrder = () => {
  const order = [
    {
      id: 1,
      name: "Press",
      address: "London",
      date: "22.8.2025",
      status: "Delivered",
      price: "$920",
      img: Profile1,
      color: "bg-[#d9b067] text-[#d9b067]",
    },
    {
      id: 2,
      name: "Marina",
      address: "Man City",
      date: "17.8.2025",
      status: "Processed",
      price: "$452",
      img: Profile2,
      color: "bg-[#2d6a4f] text-[#52b788]",
    },
    {
      id: 3,
      name: "Alex",
      address: "California",
      date: "29.8.2025",
      status: "Cancelled",
      price: "$1200",
      img: Profile3,
      color: "bg-[#9b2226] text-[#e01e37]",
    },
    {
      id: 4,
      name: "Robert",
      address: "New York",
      date: "07.8.2025",
      status: "Delivered",
      price: "$1235",
      img: Profile4,
      color: "bg-[#d9b067] text-[#d9b067]",
    },
  ];

  return (
    <div className="">
      <div className="bg-[#1d1d29] p-2 sm:p-4 rounded-2xl lg:col-span-2">
        <div className="flex justify-between items-center mb-8">
          <h3 className="text-white font-medium">Customer Orders</h3>
          <button className="text-gray-400 hover:text-white transition-colors">
            <RefreshCcw size={18} />
          </button>
        </div>
        <div className="grid grid-cols-5 px-1 sm:px-4 mb-4 text-[10px] font-semibold text-gray-500 uppercase tracking-widest">
          <span>Profiles</span>
          <span className="text-right">Address</span>
          <span className="text-right">Date</span>
          <span className="text-right">Status</span>
          <span className="text-right">Price</span>
        </div>
        <div className="space-y-3">
          {order.map((order) => (
            <div
              key={order.id}
              className={`grid grid-cols-5 items-center px-1 sm:px-4 py-2 rounded-full ${order.color} transition-transform hover:scale-[1.01] cursor-default`}
            >
              <div className="flex items-center gap-1 sm:gap-3">
                <img
                  src={order.img}
                  className="w-6 h-6 sm:w-8 sm:h-8 rounded-full object-cover border"
                  alt=""
                />
                <span className="text-[9px] sm:text-xs font-medium text-white">
                  {order.name}
                </span>
              </div>

              <span className="text-[9px] sm:text-xs text-white text-right">
                {order.address}
              </span>
              <span className="text-[9px] sm:text-xs text-white text-right">
                {order.date}
              </span>
              <span className="text-[9px] sm:text-xs font-semibold text-white text-right">
                {order.status}
              </span>
              <span className="text-[9px] sm:text-xs font-bold text-right text-white">
                {order.price}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CustomerOrder;
