import React, { useEffect, useState } from "react";
import axios from "axios";

const ChatPage = () => {
  const [chats, setChats] = useState([]);
  const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
  const fetchChats = async () => {
    const { data } = await axios.get(`${BACKEND_URL}/api/chats`);
    setChats(data);
  };
  useEffect(() => {
    fetchChats();
  });
  return (
    <div>
      {chats.map((chat) => (
        <div key={chat._id}>{chat.chatName}</div>
      ))}
    </div>
  );
};

export default ChatPage;
