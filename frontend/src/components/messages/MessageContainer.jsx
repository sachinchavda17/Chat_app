import React, { useEffect } from "react";
import Messages from "./Messages";
import MessageInput from "./MessageInput";
import { TiMessages } from "react-icons/ti";
import useConversation from "../../zustand/useConversation";
import { useAuthContext } from "../../contexts/AuthContext";
import { IoVideocam } from "react-icons/io5";
import { MdCall } from "react-icons/md";

const MessageContainer = () => {
  const { selectedConversation, setSelectedConversation } = useConversation();
  useEffect(() => {
    // cleanup functions  will run when the component unmounts. (when user logout and login again this will not showing )
    return () => setSelectedConversation(null);
  }, [setSelectedConversation]);
  return (
    <div className=" w-full flex flex-col">
      {!selectedConversation ? (
        <NoChatSelected />
      ) : (
        <>
          <div className="bg-slate-500 px-4 py-2 mb-2 flex items-center gap-3 justify-between ">
            <div className="flex items-center gap-3 ">
              <div className="avatar online">
                <div className="w-12 rounded-full">
                  <img
                    src={selectedConversation.profilePic}
                    alt={selectedConversation.profilePic}
                  />
                </div>
              </div>
              <span className="text-gray-900 font-bold text-xl ">
                {selectedConversation?.fullName}
              </span>
            </div>
            {/* </div> */}
            <div className="flex flex-end items-center gap-3 ">
              <IoVideocam className="text-slate-800 w-6 h-6 " />
              <MdCall className="text-slate-800 w-6 h-6 " />
            </div>
          </div>
          <Messages />
          <MessageInput />
        </>
      )}
    </div>
  );
};

export default MessageContainer;

const NoChatSelected = () => {
  const { authUser } = useAuthContext();
  return (
    <div className="flex items-center justify-center w-full h-full">
      <div className="px-4 text-center sm:text-lg md:text-xl text-gray-200 font-semibold flex flex-col items-center gap-2">
        <p>Welome 👋 {authUser.fullName} ❄️ </p>
        <p>Select a chat to start messaging </p>
        <TiMessages className="text-3xl md:text-6xl text-center" />
      </div>
    </div>
  );
};
