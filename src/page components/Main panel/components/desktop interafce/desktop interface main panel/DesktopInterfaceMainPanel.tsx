import "./desktopInterfaceMainPanel.css";

import Chat from "../chat components/chat/Chat.tsx";
import SearchAndChatsPanel from "../search and chats panel/SearchAndChatsPanel.tsx";

export default function DesktopInterfaceMainPanel() {
    return (
        <>
            <div className="desktopInterfaceMainPanel">
                <SearchAndChatsPanel/>
                <Chat/>
            </div>
        </>
    )
}
