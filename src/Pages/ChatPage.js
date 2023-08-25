import React from "react";
import { ChatState } from "../Context/ChatProvider";
import { Box } from "@chakra-ui/react";
import SideDrawer from "../components/miscellaneous/SideDrawer";
import MyChats from "../components/MyChats";
import ChatBox from "../components/ChatBox";

const ChatPage = () => {
  // here we are taking state of a user from context api i.e from chatProvider.js
  // as their their we have exported ChatState in which user state is available
  const { user } = ChatState(); // yahan pe hum chatstate me se user state ko nikal rahe hain usko destructure karne ke liye
  const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;

  return (
    <div style={{ width: "100%" }}>
      {user && <SideDrawer />}
      <Box d="flex" justifyContent="space-between" w="100%" h="91.5vh" p="10px">
        {user && <MyChats />}
        {user && <ChatBox />}
      </Box>
    </div>
  );
};

export default ChatPage;
