import { useSocketContext } from "../../../contexts/SocketContext";
import useColor from "../../../hooks/useColor";
import useConversation from "../../../zustand/useConversation";

const Conversation = ({ conversation, lastIdx, emoji }) => {
  const { selectedConversation, setSelectedConversation } = useConversation();
  const { bgColor, bgColorHover, textColor, dividerColor } = useColor()

  const isSelected = selectedConversation?._id === conversation._id;
  const { onlineUsers } = useSocketContext();
  const isOnline = onlineUsers.includes(conversation._id);

  return (
    <>
      <div
        className={`flex gap-2 items-center ${
          isSelected ? " bg-sky-500 " : ""
        }  hover:bg-sky-500 rounded p-2 py-1 cursor-pointer`}
        onClick={() => setSelectedConversation(conversation)}
      >
        <div className={`avatar ${isOnline ? "online" : ""}`}>
          <div className="w-10 rounded-full">
            <img src={conversation.profilePic} alt={conversation.profilePic} />
          </div>
        </div>
        <div className="flex-flex-col flex-1">
          <div className="flex gap-3 justify-between">
            <p className={`font-bold ${textColor}`}>{conversation.fullName}</p>
            <span className="text-xl">{emoji}</span>
          </div>
        </div>
      </div>
      {!lastIdx && <div className={`divider my-0 py-2 h-1 ${dividerColor}`}></div>}
    </>
  );
};

export default Conversation;
