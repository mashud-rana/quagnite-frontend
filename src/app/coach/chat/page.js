import ChatArea from "@/components/Coach/Chat/ChatArea/ChatArea";
import ChatSidebar from "@/components/Coach/Chat/ChatSidebar/ChatSidebar";
import ChatUserProfile from "@/components/Coach/Chat/ChatUserProfile/ChatUserProfile";
import React from "react";

const MessagePage = () => {
  return (
    <div className="chat_container">
      <ChatUserProfile />
      <ChatArea />
      <ChatSidebar />
    </div>
  );
};

export default MessagePage;
