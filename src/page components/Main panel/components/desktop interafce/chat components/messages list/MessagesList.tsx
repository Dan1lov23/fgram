import "./MessagesList.css";

import {useSelector} from "react-redux";

import ChatMessage from "../chat message/ChatMessage.tsx";

export default function MessagesList() {

    const actualChat = useSelector((state:any) => state.actualChat.actualChat);

    return (
        <>
            <div className="desktopInterfaceMessagesList">
                {actualChat.map((message:any) => (
                    <ChatMessage messageCreator={message.sender} chatMessage={message.messageText} messageTime={message.messageTime} messageId={message.id} messageSender={message.sender}/>
                ))}
            </div>
        </>
    )
}