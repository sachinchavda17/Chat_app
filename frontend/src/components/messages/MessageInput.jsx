import React, { useState } from "react";
import { BsSend } from "react-icons/bs";
import useSendMessage from "../../hooks/useSendMessage";
import useColor from "../../hooks/useColor";
const MessageInput = () => {
  const [message, setMessage] = useState("");
  const { loading, sendMessage } = useSendMessage();
  const { textColor, sendBtnBgColor, borderColor } = useColor();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!message) return;

    await sendMessage(message);
    setMessage("");
  };

  return (
    <form className={` relative  px-4 my-3`} onSubmit={handleSubmit}>
      <div className="w-full relative">
        <input
          type="text"
          className={`border text-sm rounded-lg block w-full p-2.5  ${sendBtnBgColor} ${borderColor} ${textColor} `}
          placeholder="Send a message...."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button
          type="submit "
          className=" absolute inset-y-0 end-0 flex flex-center p-3"
        >
          {loading ? (
            <span className="loading loading-spinner"></span>
          ) : (
            <BsSend className={`${textColor}`} />
          )}
        </button>
      </div>
    </form>
  );
};

export default MessageInput;
