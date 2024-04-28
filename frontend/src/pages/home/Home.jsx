import React from "react";
import Sidebar from "../../components/Sidebar";
import MessageContainer from "../../components/messages/MessageContainer";
import MobileSidebar from "../../components/sidebar/MobileSidebar";

const Home = () => {
  return (
    <div className="flex w-full sm:h-[450px] md:h-[550px] rounded-lg overflow-hidden shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
      <div className="sm:block hidden">
        <Sidebar />
      </div>
      <div className="sm:hidden h-[450px] ">
        <MobileSidebar />
      </div>
      <MessageContainer />
    </div>
  );
};

export default Home;
