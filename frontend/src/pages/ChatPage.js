import React, { useEffect, useState } from "react";
import axios from "axios";

// To fetch api, we need to use axios
const ChatPage = () => {

  // We need to store the data produced in fetchChats inside a state, so we use a hook called useState
  const [chats, setChats]= useState([]); //chats will store the data and setchats will set the data into
  

  const fetchChats = async () => {
    const { data } = await axios.get("/api/chats");
    setChats(data);
  };

  // useEffect is a hook in react which runs when a component is rendered for the first time
  useEffect(() => {
    fetchChats(); //When the component ChatPage is rendered the function fetchChats is called
  }, []);

  // If we want to write javascript inside html in react then use {}
  return <div>{chats.map(chat => <div key={chat._id}>   
  {/* Each child in a list should have a unique "key" prop. */}
    {chat.chatName}</div>)}</div>;
};

export default ChatPage;
