import "./userChatsList.css";

import {useSelector} from 'react-redux';

import UserChatCart from "../user chat cart/UserChatCart.tsx";

export default function UserChatsList() {

    const chats = useSelector((state:any) => state.chats.chats);

    return (
        <>
            <div className="userChatsList">
                {chats.map((chat:any) => (
                    <UserChatCart username={chat.chatName} iconSrc={chat.iconSrc}/>
                ))}
            </div>
        </>
    )
}