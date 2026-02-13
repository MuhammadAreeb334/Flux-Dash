import React, { useEffect, useState } from "react";
import profile1 from "../Assets/profile.jpg";
import { Search, Plus, MoreVertical, Eye, Edit } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { FireAPI } from "../API/useRequest";

const Ameer = () => {
  const [ameers, setAmeers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [openMenuId, setOpenMenuId] = useState(null);
  const navigate = useNavigate();

  //   const ameers = [
  //     {
  //       _id: 1,
  //       name: "Alex",
  //       designation: "Software Engineer",
  //       country: "Pakistan",
  //       email: "abdulmaroof@gmail.com",
  //       mobile: "+92300-2345876",
  //       img: profile1,
  //     },
  //     {
  //       _id: 2,
  //       name: "Alex",
  //       designation: "Software Engineer",
  //       country: "Pakistan",
  //       email: "abdulmaroof@gmail.com",
  //       mobile: "+92300-2345876",
  //       img: profile1,
  //     },
  //     {
  //       _id: 3,
  //       name: "Alex",
  //       designation: "Software Engineer",
  //       country: "Pakistan",
  //       email: "abdulmaroof@gmail.com",
  //       mobile: "+92300-2345876",
  //       img: profile1,
  //     },
  //     {
  //       _id: 4,
  //       name: "Alex",
  //       designation: "Software Engineer",
  //       country: "Pakistan",
  //       email: "abdulmaroof@gmail.com",
  //       mobile: "+92300-2345876",
  //       img: profile1,
  //     },
  //     {
  //       _id: 5,
  //       name: "Alex",
  //       designation: "Software Engineer",
  //       country: "Pakistan",
  //       email: "abdulmaroof@gmail.com",
  //       mobile: "+92300-2345876",
  //       img: profile1,
  //     },
  //     {
  //       _id: 6,
  //       name: "Alex",
  //       designation: "Software Engineer",
  //       country: "Pakistan",
  //       email: "abdulmaroof@gmail.com",
  //       mobile: "+92300-2345876",
  //       img: profile1,
  //     },
  //     {
  //       _id: 7,
  //       name: "Alex",
  //       designation: "Software Engineer",
  //       country: "Pakistan",
  //       email: "abdulmaroof@gmail.com",
  //       mobile: "+92300-2345876",
  //       img: profile1,
  //     },
  //     {
  //       _id: 8,
  //       name: "Alex",
  //       designation: "Software Engineer",
  //       country: "Pakistan",
  //       email: "abdulmaroof@gmail.com",
  //       mobile: "+92300-2345876",
  //       img: profile1,
  //     },
  //     {
  //       _id: 9,
  //       name: "Alex",
  //       designation: "Software Engineer",
  //       country: "Pakistan",
  //       email: "abdulmaroof@gmail.com",
  //       mobile: "+92300-2345876",
  //       img: profile1,
  //     },
  //     {
  //       _id: 10,
  //       name: "Alex",
  //       designation: "Software Engineer",
  //       country: "Pakistan",
  //       email: "abdulmaroof@gmail.com",
  //       mobile: "+92300-2345876",
  //       img: profile1,
  //     },
  //   ];

  useEffect(() => {
    const getAmeer = async () => {
      setLoading(true);
      const token = localStorage.getItem("token");

      const customHeaders = {
        Authorization: `Bearer ${token}`,
      };

      try {
        const data = await FireAPI("ameer", "GET", null, customHeaders);
        // console.log(data.ameers);
        setAmeers(data.ameers);
      } catch (error) {
        console.log("Error Feting Ameer: ", error.message);
      } finally {
        setLoading(false);
      }
    };
    getAmeer();
  }, []);

  const toggleMenu = (id) => {
    setOpenMenuId(openMenuId === id ? null : id);
  };
  return (
    <div>
      <div className="text-white ">
        <div className="bg-[#1d1d29] p-4 sm:p-6 rounded-2xl shadow-lg">
          <div className="flex flex-col [@media(min-width:970px)]:flex-row items-center justify-between gap-4">
            <h2 className="text-2xl font-semibold tracking-tight">
              Ameer Management
            </h2>
            <div className="flex items-center gap-4 w-full [@media(min-width:970px)]:w-auto">
              <div className="relative flex-1 [@media(min-width:970px)]:w-64">
                <input
                  type="text"
                  placeholder="Search Ameer..."
                  className="w-full bg-[#2a2a3a] outline-none pl-10 pr-4 py-2 border border-gray-600 focus:border-indigo-500 text-white rounded-lg transition-all"
                />
                <Search
                  size={18}
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                />
              </div>
              <button
                onClick={() => navigate("/ameer/create")}
                className="flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white font-medium px-5 py-2 rounded-lg transition-colors whitespace-nowrap"
              >
                <span>Create Ameer</span>
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
                {ameers.map((ameer) => (
                  <tr
                    key={ameer?._id}
                    className="hover:bg-[#2a2a3d] transition-colors"
                  >
                    <td className="px-4 py-4">
                      <div className="flex items-center gap-3">
                        {/* <img
                              src={ameer.img}
                              className="w-9 h-9 rounded-full object-cover border border-gray-700"
                              alt={ameer.name}
                            /> */}
                        <span className="font-medium text-white">
                          {ameer?.name}
                        </span>
                      </div>
                    </td>
                    <td className="px-4 py-4">{ameer?.designation}</td>
                    <td className="px-4 py-4">{ameer?.country}</td>
                    <td className="px-4 py-4 text-gray-400">{ameer?.email}</td>
                    <td className="px-4 py-4">{ameer?.mobile}</td>
                    <td className="px-4 py-4 text-center relative">
                      <button
                        className="p-1 hover:bg-[#33334a] rounded-full"
                        onClick={() => toggleMenu(ameer?._id)}
                      >
                        <MoreVertical size={18} />
                      </button>
                      {openMenuId === ameer?._id && (
                        <>
                          <div
                            className="fixed inset-0 z-10"
                            onClick={() => setOpenMenuId(null)}
                          ></div>
                          <div className="absolute right-6 top-12 bg-[#2a2a3a] border border-gray-700 rounded-lg shadow-xl z-20 w-32">
                            <button
                              onClick={() =>
                                navigate(`/ameer/view/${ameer?._id}`)
                              }
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
    </div>
  );
};

export default Ameer;
