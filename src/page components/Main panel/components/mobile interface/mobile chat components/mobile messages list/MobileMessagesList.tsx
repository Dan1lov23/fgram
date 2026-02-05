import "./mobileMessagesList.css";

import {useSelector} from "react-redux";

import MobileChatMessage from "../mobile chat message/MobileChatMessage.tsx";

export default function MobileMessagesList() {

    const actualChat = useSelector((state:any) => state.actualChat.actualChat);

    return (
        <>
            <div className="mobileMessagesList">
                {actualChat.map((message:any) => (
                    <MobileChatMessage messageCreator={message.sender} chatMessage={message.messageText} messageTime={message.messageTime} messageId={message.id} messageSender={message.sender}/>
                ))}
            </div>
        </>
    )
}