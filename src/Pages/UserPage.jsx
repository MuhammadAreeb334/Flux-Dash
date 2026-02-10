import Sidebar from "../Components/Sidebar";
import React, { useState } from "react";
import Topbar from "../Components/Topbar";
import UserMain from "../Components/UserMain";

const UserPage = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="flex h-screen overflow-hidden [&::-webkit-scrollbar]:hidden">
      <aside
        className={`fixed md:static top-0 left-0 z-40 w-[90%] md:w-[25%] lg:w-[18%] h-full [&::-webkit-scrollbar]:hidden
       bg-[#1d1d29] text-white transform transition-transform duration-300 
       ${menuOpen ? "translate-x-0" : "-translate-x-full"} md:translate-x-0`}
      >
        <Sidebar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      </aside>

      {menuOpen && <div className="[&::-webkit-scrollbar]:hidden fixed inset-0 bg-black/40 z-30 md:hidden" onClick={() => setMenuOpen(false)} />}
      <div className="flex flex-col flex-1 bg-[#12121e] text-white ">
        <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <main className="flex-1 overflow-y-auto p-6 [&::-webkit-scrollbar]:hidden">
          <UserMain />
        </main>
      </div>
    </div>
  );
};

export default UserPage;
