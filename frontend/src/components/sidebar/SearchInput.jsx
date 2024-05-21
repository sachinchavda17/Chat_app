import React, { useState, useEffect } from "react";
import { IoSearchSharp } from "react-icons/io5";
import useGetConversation from "../../hooks/useGetConversation";
import useConversation from "../../zustand/useConversation";
import Conversation from "./conversation/Conversation";
import { getRandomEmoji } from "../../utils/emoji";
import toast from "react-hot-toast";
import useColor from "../../hooks/useColor";

const SearchInput = () => {
  const [search, setSearch] = useState("");
  const [results, setResults] = useState([]);
  const { setSelectedConversation } = useConversation();
  const { conversations } = useGetConversation();
  const { textColor, bgColor, borderColor, mainBgColor, mainBgColorHover } =
    useColor();

  // Function to handle search submission
  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (search.trim() !== "") {
      // const filteredResults = filterConversations(search);
      const filteredResults = conversations.filter((conversation) =>
        conversation.fullName.toLowerCase().includes(search.toLowerCase())
      );
      setResults(filteredResults);
      if (!filteredResults.length > 0) {
        toast.error("No results found for your search ");
        return setSearch("");
      }
    }
  };

  const handleConversationClick = (conversation) => {
    setSelectedConversation(conversation);
    setSearch("");
    setResults([]);
  };

  useEffect(() => {
    // Clear search results when conversations or search input change
    setResults([]);
  }, [conversations, search]);

  return (
    <>
      <form className="flex items-center gap-2 w-full" onSubmit={handleSearchSubmit}>
        <input
          type="text"
          placeholder="Search..."
          className={`input input-bordered w-full rounded-full h-8 text-sm ${bgColor} ${textColor} ${borderColor}`}
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
          }}
        />
        <button
          type="submit"
          className={`btn btn-circle btn-sm ${mainBgColor} ${mainBgColorHover} ${textColor} `}
        >
          <IoSearchSharp className="w-4 h-4 outline-none" />
        </button>
      </form>

      <div className="search-results mt-2">
        {results.map((conversation) => (
          <Conversation
            key={conversation._id}
            conversation={conversation}
            emoji={getRandomEmoji()}
            onClick={() => handleConversationClick(conversation)}
          />
        ))}
      </div>
    </>
  );
};

export default SearchInput;

// import React, { useState } from "react";
// import { IoSearchSharp } from "react-icons/io5";
// import useGetConversation from "../hooks/useGetConversation";
// import useConversation from "../zustand/useConversation";
// import toast from "react-hot-toast";
// import Conversation from "./sidebar/conversation/Conversation";
// import { getRandomEmoji } from "../utils/emoji";
// const SearchInput = () => {
//   const [search, setSearch] = useState("");
//   const { setSelectedConversation } = useConversation();
//   const { conversations } = useGetConversation();
//   const [results, setResults] = useState(null);

//   // const handleSubmit = async (e) => {
//   //   e.preventDefault();
//   //   if (!search) return;
//   //   // if (search.trim().length < 3) {
//   //   //   setSearch("");
//   //   //   return toast.error("Search term must be at least 3 character long!");
//   //   // }
//   //   const conversation = conversations.find((c) =>
//   //     c.fullName.toLowerCase().includes(search.trim().toLowerCase())
//   //   );

//   //   for (let i = 0; i < conversations.length; i++) {
//   //     if (conversation[i].toLowerCase() === search) {
//   //       setResults([conversations[i]]);
//   //       break;
//   //     } else {
//   //       setResults([]);
//   //     }
//   //   }
//   //   console.log(results);

//   //   if (conversation) {
//   //     setSelectedConversation(conversation);
//   //     setSearch("");
//   //   } else {
//   //     setSearch("");
//   //     return toast.error("No such user found!");
//   //   }
//   // };

//   const searchUser = async (e) => {
//     const res = await fetch(`/api/users/search/${search}`);
//     const data = await res.json();
//     console.log(data);
//     setResults(data.users);
//     console.log(conversations);
//   };

//   return (
//     <>
//       <form className="flex items-center gap-2">
//         <input
//           type="text"
//           placeholder="Search..."
//           className="input input-bordered rounded-full h-8 text-sm"
//           value={search}
//           onChange={(e) => {
//             setSearch(e.target.value);
//             searchUser();
//           }}
//         />
//         <button className="btn btn-circle btn-sm bg-sky-500 text-white ">
//           <IoSearchSharp className="w-4 h-4 outline-none" />
//         </button>
//       </form>
//       <div className="dropdown">
//         <div tabIndex={0} role="button" className="btn m-1">
//           close
//         </div>
//         <ul
//           tabIndex={0}
//           className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
//         >
//           {results?.map((conversation, idx) => (
//             <Conversation
//               key={conversation._id}
//               conversation={conversation}
//               emoji={getRandomEmoji()}
//               lastIdx={idx === results.length - 1}
//             />
//           ))}
//         </ul>
//       </div>
//     </>
//   );
// };

// export default SearchInput;
