import "./mobileChatSenderMessage.css";

import MobileMessageMenu from "../mobile message menu/MobileMessageMenu.tsx";
import MobileChatMessageTime from "../mobile chat message time/MobileChatMessageTime.tsx";

export default function MobileChatSenderMessage({messageText, messageTime, messageId, messageSender}:{messageText:string, messageTime:number, messageId:number, messageSender:string}) {
    return (
        <>
            <div className="mobileChatSenderMessage">
                <div className="senderMessage">
                    <p>{messageText}</p>
                    <MobileMessageMenu messageText={messageText} messageId={messageId} messageSender={messageSender}/>
                </div>
                <MobileChatMessageTime chatMessageTime={messageTime}/>
            </div>
        </>
    )
}
