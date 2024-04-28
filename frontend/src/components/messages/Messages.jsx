import React, { useEffect, useRef } from "react";
import Message from "./Message";
import useConversation from "../../zustand/useConversation";
import useGetMessages from "../../hooks/useGetMessages";
import MessageSkeletons from "../../skeletons/MessageSkeletons";
import { Toaster } from "react-hot-toast";

const Messages = () => {
  const { loading, messages } = useGetMessages();

  const lastMessageRef = useRef();
  useEffect(() => {
    setTimeout(() => {
      lastMessageRef.current?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  }, [messages]);

  return (
    <div className="px-4 flex-1 overflow-auto">
      {loading && [...Array(3)].map((_, idx) => <MessageSkeletons key={idx} />)}
      {!loading && messages.length === 0 && (
        <p className="text-center pt-3">
          {" "}
          Send a Message to start the conversation
        </p>
      )}
      {!loading &&
        messages.length > 0 &&
        messages?.map((message) => (
          <div key={message?._id} ref={lastMessageRef}>
            <Message message={message} />
          </div>
        ))}
    </div>
  );
};

export default Messages;
