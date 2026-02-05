import "./chatSenderMessage.css";

import ChatMessageTime from "../caht message time/ChatMessageTime.tsx";
import MessageMenu from "../message menu/MessageMenu.tsx";

export default function ChatSenderMessage({messageText, messageTime, messageId, messageSender}:{messageText:string, messageTime:number, messageId:number, messageSender:string}) {
    return (
        <>
            <div className="chatSenderMessage">
                <div className="senderMessage">
                    <p>{messageText}</p>
                    <MessageMenu messageText={messageText} messageId={messageId} messageSender={messageSender}/>
                </div>
                <ChatMessageTime chatMessageTime={messageTime}/>
            </div>
        </>
    )
}
