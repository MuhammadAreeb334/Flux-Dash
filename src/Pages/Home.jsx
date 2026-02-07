import React from "react";
import Sidebar from "../Components/Sidebar";
import Topbar from "../Components/Topbar";
import Main from "../Components/Main";

const Home = () => {
  return (
    <div className="flex h-screen overflow-hidden">
      <aside className="w-[18%] min-w-[240px] h-full bg-[#1d1d29] text-white">
        <Sidebar />
      </aside>
      <div className="flex flex-col flex-1 bg-[#12121e] text-white">
        <Topbar />
        <main className="flex-1 overflow-y-auto p-6">
          <Main />
        </main>
      </div>
    </div>
  );
};

export default Home;

//#1d1d29 side
// #12121e main
