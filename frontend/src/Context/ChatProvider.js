//We use context API to keep all of our states at a single place and access them from anywhere in the application
import React, { createContext, useContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

const ChatContext = createContext();

const ChatProvider = ({ children }) => {                                //Wrap whole of our app
  const [selectedChat, setSelectedChat] = useState();                   //Holds the currently selected chat.
  const [user, setUser] = useState();
  const [notification, setNotification] = useState([]);
  const [chats, setChats] = useState();                                //Holds the list of chats.

  const history = useHistory();

  useEffect(() => {
    const userInfo = JSON.parse(localStorage.getItem("userInfo"));   //Getting the currently logged in user from local storage
    setUser(userInfo);

    if (!userInfo) history.push("/");          //If userInfo not found then go to login page
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [history]);

  return (
    <ChatContext.Provider                                   
      value={{                        //To make each state accessible to our app, we define these states in value{]
        selectedChat,
        setSelectedChat,
        user,
        setUser,
        notification,
        setNotification,
        chats,
        setChats,
      }}
    >
      {children}                          
                                       {/* children are the components that will have access to this context. */}
    </ChatContext.Provider>
  );
};

export const ChatState = () => {                //To make state accessible in other parts of the app
  return useContext(ChatContext);
};

export default ChatProvider;