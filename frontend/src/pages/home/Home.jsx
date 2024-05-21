import React from "react";
import MessageContainer from "../../components/messages/MessageContainer";
import useColor from "../../hooks/useColor";
import Sidebar from "../../components/sidebar/Sidebar";
import MobileSidebar from "../../components/sidebar/MobileSidebar";
import useGetConversation from "../../hooks/useGetConversation";
import useConversation from "../../zustand/useConversation";

const Home = () => {
  const { bgColor } = useColor();
  const { selectedConversation, setSelectedConversation } = useConversation();

  return (
    <div
      className={`flex w-full h-full sm:h-[450px] md:h-[550px] rounded-lg overflow-hidden shadow-md ${bgColor} bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0`}
    >
      <div className="flex w-full ">
        <Sidebar />
        <MessageContainer  />

      </div>

       {/* <div className="sm:hidden  w-full  ">
        {!selectedConversation ? <Sidebar /> : <MessageContainer />}
      </div> */}
    </div>
  );
};

export default Home;
