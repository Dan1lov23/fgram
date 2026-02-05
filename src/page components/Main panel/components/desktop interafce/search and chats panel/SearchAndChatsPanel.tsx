import "./searchAndChatsPanel.css";

import SearchPanel from "../search panel component/search panel/SearchPanel.tsx";
import UserChats from "../user chats components/user chats/UserChats.tsx";
import NavBar from "../../../../../UI components/nav bar/NavBar.tsx";

export default function SearchAndChatsPanel() {
    return (
        <>
            <div className="searchAndChatsPanel">
                <SearchPanel/>
                <UserChats/>
                <NavBar/>
            </div>
        </>
    )
}
