import React from "react";
import DateRangeSelector from "./DateRangeSelector";
import { Menu } from "lucide-react";
import Profile from "../Assets/Profile.jpg";

const Topbar = ({ menuOpen, setMenuOpen }) => {
  const handleMenu = () => setMenuOpen(!menuOpen);
  console.log(menuOpen)

  return (
    <div className="p-3 md:p-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2 md:items-end md:gap-14">
          <button className="md:hidden" onClick={() => handleMenu()}>
            <Menu size={22} className="" />
          </button>
          <h1 className=" text-lg md:text-3xl font-semibold tracking-tight">DashBaord</h1> {/*{title} */}
          <DateRangeSelector />
        </div>
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-full overflow-hidden ">
            <img
              src={Profile}
              alt=""
              className="w-full h-auto rounded-full aspect-square object-cover"
            />
          </div>
          <span className="text-sm">Kristy Kamlykova</span>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
