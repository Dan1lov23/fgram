import "./mobileInterfaceMainPanel.css";

import {useState} from "react";

import MobileHeader from "../mobile header components/mobile header/MobileHeader.tsx";
import MobileChatsList from "../mobile chats list components/moble chats list/MobileChatsList.tsx";
import MobileSearchPanel from "../search panel/mobile search panel/MobileSearchPanel.tsx";
import MobileChat from "../mobile chat components/mobile chat/MobileChat.tsx";
import {useSelector} from "react-redux";

export default function MobileInterfaceMainPanel() {

    const [searchedUser, setSearchedUser] = useState<any>();

    const isOpenChat = useSelector((state:any) => state.isOpenChat.isOpenChat);

    const [isSearchPanelOpen, setIsSearchPanelOpen] = useState<boolean>(false);

    return (
        <>
            <div className="mobileInterfaceMainPanel">
                {isOpenChat ? (
                    <MobileChat/>
                ) : (
                    <div>
                        <MobileHeader setSearchedUser={setSearchedUser} isSearchPanelOpen={isSearchPanelOpen} setIsSearchPanelOpen={setIsSearchPanelOpen}/>
                        {isSearchPanelOpen ? (
                            <MobileSearchPanel searchedUser={searchedUser}/>
                        ) : (
                            <div></div>
                        )}
                        <MobileChatsList/>
                    </div>
                )}
            </div>
        </>
    )
}