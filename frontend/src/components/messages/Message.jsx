import { useAuthContext } from "../../contexts/AuthContext";
import useColor from "../../hooks/useColor";
import { extractTime } from "../../utils/extractTime";
import useConversation from "../../zustand/useConversation";

const Message = ({ message }) => {
  const { authUser } = useAuthContext();
  const { selectedConversation } = useConversation();
  const { bgColor, bgColorHover, textColor, dropdownBgColor } = useColor()

  const fromMe = message.senderId === authUser._id;
  const chatClassName = fromMe ? "chat-end" : "chat-start";
  const profilePic = fromMe
    ? authUser.profilePic
    : selectedConversation.profilePic;
  const bgBubbleColor = fromMe ? " bg-blue-500" : dropdownBgColor;
  const formattedTime = extractTime(message.createdAt);
  const shakeClass = message.shouldShake ? "shake" : "";
  return (
    <div className={`chat ${chatClassName}  `}>
      <div className="sm:chat-image sm:avatar hidden cursor-pointer">
        <div className="w-10 rounded-full">
          <img src={profilePic} alt="Profile Picture" />
        </div>
      </div>
      <div className={`chat-bubble ${textColor} ${bgBubbleColor} ${shakeClass} pb-2 cursor-pointer`}>
        {message?.message}
      </div>
      <div className="chat-footer opacity-50 text-xs flex gap-1 items-center cursor-pointer">
        {formattedTime}
      </div>
    </div>
  );
};

export default Message;
