import React, { useState } from "react";
import { IoSearchSharp } from "react-icons/io5";
import useGetConversation from "../hooks/useGetConversation";
import useConversation from "../zustand/useConversation";
import toast from "react-hot-toast";
const SearchInput = () => {
  const [search, setSearch] = useState("");
  const { setSelectedConversation } = useConversation();
  const { conversations } = useGetConversation();
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(search);
    if (!search) return;
    // if (search.trim().length < 3) {
    //   setSearch("");
    //   return toast.error("Search term must be at least 3 character long!");
    // }
    const conversation = conversations.find((c) =>
      c.fullName.toLowerCase().includes(search.trim().toLowerCase())
    );
    console.log(conversation);
    if (conversation) {
      setSelectedConversation(conversation);
      setSearch("");
    } else {
      setSearch("");
      return toast.error("No such user found!");
    }
  };
  return (
    <form className="flex items-center gap-2" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Search..."
        className="input input-bordered rounded-full h-8 text-sm"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button className="btn btn-circle btn-sm bg-sky-500 text-white ">
        <IoSearchSharp className="w-4 h-4 outline-none" />
      </button>
    </form>
  );
};

export default SearchInput;
