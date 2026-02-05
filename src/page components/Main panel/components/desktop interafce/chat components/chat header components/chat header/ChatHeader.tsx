import "./chatHeader.css";

import ChatHeaderBackButton from "../chat header back button/ChatHeaderBackButton.tsx";
import ChatHeaderDeleteChatButton from "../chat header delete chat button/ChatHeaderDeleteChatButton.tsx";

export default function ChatHeader() {
    return (
        <>
            <div className="chatHeader">
                <ChatHeaderBackButton/>
                <ChatHeaderDeleteChatButton/>
            </div>
        </>
    )
}