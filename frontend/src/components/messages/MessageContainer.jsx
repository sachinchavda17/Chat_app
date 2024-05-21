import React, { useEffect } from "react";
import Messages from "./Messages";
import MessageInput from "./MessageInput";
import { TiMessages } from "react-icons/ti";
import useConversation from "../../zustand/useConversation";
import { useAuthContext } from "../../contexts/AuthContext";
import { IoVideocam } from "react-icons/io5";
import { MdCall } from "react-icons/md";
import useColor from "../../hooks/useColor";
import { useSocketContext } from "../../contexts/SocketContext";
import { IoMdArrowRoundBack } from "react-icons/io";
import { NavLink } from "react-router-dom";

const MessageContainer = () => {
  const { selectedConversation, setSelectedConversation } = useConversation();
  const {
    bgColor,
    bgColorHover,
    textColor,
    dropdownBgColor,
    dropdownBgColorHover,
    bgSlateColorForHeader,
    fixedColorForHeader,
  } = useColor();

  const { onlineUsers } = useSocketContext();
  const isOnline = onlineUsers.includes(selectedConversation?._id);
  useEffect(() => {
    // cleanup functions  will run when the component unmounts. (when user logout and login again this will not showing )
    return () => setSelectedConversation(null);
  }, [setSelectedConversation]);
  return (
    <div
      className={`w-full ${
        selectedConversation ? "flex " : "hidden sm:flex"
      }  flex-col`}
    >
      {!selectedConversation ? (
        <NoChatSelected />
      ) : (
        <>
          <div
            className={`${bgSlateColorForHeader} px-4 py-2 mb-2 flex items-center gap-3 justify-between `}
          >
            <div className="flex items-center gap-3 ">
              <NavLink to="/" className={`sm:hidden text-2xl rounded-full  `}>
                <IoMdArrowRoundBack
                  className={`${fixedColorForHeader}`}
                  onClick={() => setSelectedConversation(null)}
                />
              </NavLink>
              <div className={`avatar ${isOnline ? "online" : ""}`}>
                <div className="w-12 rounded-full">
                  <img
                    src={selectedConversation.profilePic}
                    alt={selectedConversation.profilePic}
                  />
                </div>
              </div>
              <span className={`${fixedColorForHeader} font-bold text-xl `}>
                {selectedConversation?.fullName}
              </span>
            </div>
            {/* </div> */}
            <div className="flex flex-end items-center gap-3 ">
              <IoVideocam className={`${fixedColorForHeader} w-6 h-6 `} />
              <MdCall className={`${fixedColorForHeader} w-6 h-6 `} />
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
  const { textColor } = useColor();
  const { authUser } = useAuthContext();
  return (
    <div className="flex items-center justify-center w-full h-full">
      <div
        className={`px-4 text-center sm:text-lg md:text-xl ${textColor} font-semibold flex flex-col items-center gap-2`}
      >
        <p>Welome 👋 {authUser.fullName} ❄️ </p>
        <p>Select a chat to start messaging </p>
        <TiMessages className="text-3xl md:text-6xl text-center" />
      </div>
    </div>
  );
};
