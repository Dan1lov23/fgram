import "./mobileChatRecipientMessage.css";

import MobileMessageMenu from "../mobile message menu/MobileMessageMenu.tsx";
import MobileChatMessageTime from "../mobile chat message time/MobileChatMessageTime.tsx";

export default function MobileChatRecipientMessage({messageText, messageTime, messageId, messageSender}:{messageText:string, messageTime:number, messageId:number, messageSender:string}) {
    return (
        <>
            <div className="mobileChatRecipientMessage">
                <div className="recipientMessage">
                    <p>{messageText}</p>
                    <MobileMessageMenu messageText={messageText} messageId={messageId} messageSender={messageSender}/>
                </div>
                <MobileChatMessageTime chatMessageTime={messageTime}/>
            </div>
        </>
    )
}
