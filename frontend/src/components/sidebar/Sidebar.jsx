import React from "react";
import SearchInput from "./SearchInput";
import Conversations from "./conversation/Conversations";
import LogoutButton from "./LogoutButton";
import Dropdowns from "./Dropdowns";
import { Link } from "react-router-dom";
import useColor from "../../hooks/useColor";
import useConversation from "../../zustand/useConversation";

const Sidebar = () => {
  const { textColor, bgColor, dividerColor } = useColor();
  const { selectedConversation } = useConversation();

  return (
    <div
      className={`${bgColor}  ${
        selectedConversation ? "hidden sm:flex " : "sm-flex "
      } sm:border-r border-slate-500 px-4 py-2 w-full sm:w-auto flex flex-col justify-between h-full`}
    >
      <Link
        to="/"
        className={`text-xl pb-3 ${textColor} cursor-pointer font-bold`}
      >
        Chat App
      </Link>
      <SearchInput />
      <div className={`divider px-2 my-1 ${dividerColor} `}></div>
      <Conversations />
      <Dropdowns />
    </div>
  );
};

export default Sidebar;
