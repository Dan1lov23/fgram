import "./chatRecipientMessage.css";

import ChatMessageTime from "../caht message time/ChatMessageTime.tsx";
import MessageMenu from "../message menu/MessageMenu.tsx";

export default function ChatRecipientMessage({messageText, messageTime, messageId, messageSender}:{messageText:string, messageTime:number, messageId:number, messageSender:string}) {
    return (
        <>
            <div className="chatRecipientMessage">
                <div className="recipientMessage">
                    <p>{messageText}</p>
                    <MessageMenu messageText={messageText} messageId={messageId} messageSender={messageSender}/>
                </div>
                <ChatMessageTime chatMessageTime={messageTime}/>
            </div>
        </>
    )
}
