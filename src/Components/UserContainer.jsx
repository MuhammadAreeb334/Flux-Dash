import React, { useState } from "react";
import profile1 from "../Assets/profile.jpg";
import { Search, Plus, MoreVertical, Eye, Edit } from "lucide-react";
import { useNavigate } from "react-router-dom";

const UserContainer = () => {
  const users = [
    {
      id: 1,
      name: "Alex",
      designation: "Software Engineer",
      country: "Pakistan",
      email: "abdulmaroof@gmail.com",
      mobile: "+92300-2345876",
      img: profile1,
    },
    {
      id: 2,
      name: "Alex",
      designation: "Software Engineer",
      country: "Pakistan",
      email: "abdulmaroof@gmail.com",
      mobile: "+92300-2345876",
      img: profile1,
    },
    {
      id: 3,
      name: "Alex",
      designation: "Software Engineer",
      country: "Pakistan",
      email: "abdulmaroof@gmail.com",
      mobile: "+92300-2345876",
      img: profile1,
    },
    {
      id: 4,
      name: "Alex",
      designation: "Software Engineer",
      country: "Pakistan",
      email: "abdulmaroof@gmail.com",
      mobile: "+92300-2345876",
      img: profile1,
    },
    {
      id: 5,
      name: "Alex",
      designation: "Software Engineer",
      country: "Pakistan",
      email: "abdulmaroof@gmail.com",
      mobile: "+92300-2345876",
      img: profile1,
    },
    {
      id: 6,
      name: "Alex",
      designation: "Software Engineer",
      country: "Pakistan",
      email: "abdulmaroof@gmail.com",
      mobile: "+92300-2345876",
      img: profile1,
    },
    {
      id: 7,
      name: "Alex",
      designation: "Software Engineer",
      country: "Pakistan",
      email: "abdulmaroof@gmail.com",
      mobile: "+92300-2345876",
      img: profile1,
    },
    {
      id: 8,
      name: "Alex",
      designation: "Software Engineer",
      country: "Pakistan",
      email: "abdulmaroof@gmail.com",
      mobile: "+92300-2345876",
      img: profile1,
    },
    {
      id: 9,
      name: "Alex",
      designation: "Software Engineer",
      country: "Pakistan",
      email: "abdulmaroof@gmail.com",
      mobile: "+92300-2345876",
      img: profile1,
    },
    {
      id: 10,
      name: "Alex",
      designation: "Software Engineer",
      country: "Pakistan",
      email: "abdulmaroof@gmail.com",
      mobile: "+92300-2345876",
      img: profile1,
    },
  ];

  const [openMenuId, setOpenMenuId] = useState(null);

  const toggleMenu = (id) => {
    setOpenMenuId(openMenuId === id ? null : id);
  };
  const navigate = useNavigate();

  return (
    <div className="text-white ">
      <div className="bg-[#1d1d29] p-4 sm:p-6 rounded-2xl shadow-lg">
        <div className="flex flex-col [@media(min-width:970px)]:flex-row items-center justify-between gap-4">
          <h2 className="text-2xl font-semibold tracking-tight">
            User Management
          </h2>
          <div className="flex items-center gap-4 w-full [@media(min-width:970px)]:w-auto">
            <div className="relative flex-1 [@media(min-width:970px)]:w-64">
              <input
                type="text"
                placeholder="Search users..."
                className="w-full bg-[#2a2a3a] outline-none pl-10 pr-4 py-2 border border-gray-600 focus:border-indigo-500 text-white rounded-lg transition-all"
              />
              <Search
                size={18}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
              />
            </div>
            <button
              onClick={() => navigate("/user/create")}
              className="flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white font-medium px-5 py-2 rounded-lg transition-colors whitespace-nowrap"
            >
              <span>Create User</span>
              <Plus size={18} />
            </button>
          </div>
        </div>

        <div className="w-full overflow-y-auto overflow-x-auto mt-6 rounded-xl pb-14">
          <table className="min-w-[900px] w-full text-left border-collapse">
            <thead className="bg-[#252533] text-gray-400 uppercase text-xs tracking-wider">
              <tr>
                <th className="px-4 py-4 font-semibold">Name</th>
                <th className="px-4 py-4 font-semibold">Designation</th>
                <th className="px-4 py-4 font-semibold">Country</th>
                <th className="px-4 py-4 font-semibold">Email</th>
                <th className="px-4 py-4 font-semibold">Mobile</th>
                <th className="px-4 py-4 font-semibold">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-800 text-gray-300 ">
              {users.map((user) => (
                <tr
                  key={user.id}
                  className="hover:bg-[#2a2a3d] transition-colors"
                >
                  <td className="px-4 py-4">
                    <div className="flex items-center gap-3">
                      <img
                        src={user.img}
                        className="w-9 h-9 rounded-full object-cover border border-gray-700"
                        alt={user.name}
                      />
                      <span className="font-medium text-white">
                        {user.name}
                      </span>
                    </div>
                  </td>
                  <td className="px-4 py-4">{user.designation}</td>
                  <td className="px-4 py-4">{user.country}</td>
                  <td className="px-4 py-4 text-gray-400">{user.email}</td>
                  <td className="px-4 py-4">{user.mobile}</td>
                  <td className="px-4 py-4 text-center relative">
                    <button
                      className="p-1 hover:bg-[#33334a] rounded-full"
                      onClick={() => toggleMenu(user.id)}
                    >
                      <MoreVertical size={18} />
                    </button>
                    {openMenuId === user.id && (
                      <>
                        <div
                          className="fixed inset-0 z-10"
                          onClick={() => setOpenMenuId(null)}
                        ></div>
                        <div className="absolute right-6 top-12 bg-[#2a2a3a] border border-gray-700 rounded-lg shadow-xl z-20 w-32">
                          <button
                            onClick={() => navigate(`/user/view/${user.id}`)}
                            className="flex items-center gap-2 w-full px-4 py-2 text-sm rounded-t-lg hover:bg-indigo-600 transition-colors"
                          >
                            <Eye size={14} /> View
                          </button>
                          <button className="flex items-center gap-2 w-full px-4 py-2 text-sm rounded-b-lg hover:bg-indigo-600 transition-colors border-t border-gray-700">
                            <Edit size={14} /> Edit
                          </button>
                        </div>
                      </>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default UserContainer;
