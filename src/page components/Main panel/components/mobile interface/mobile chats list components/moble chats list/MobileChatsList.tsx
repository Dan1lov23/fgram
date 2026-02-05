import "./mobileChatsList.css";

import {useSelector} from 'react-redux';

import MobileChatCart from "../mobile chat cart/MobileChatCart.tsx";

export default function MobileChatsList() {

    const chats = useSelector((state:any) => state.chats.chats);

    return (
        <>
            <div className="mobileChatsList">
                {chats.map((chat:any) => (
                    <MobileChatCart username={chat.chatName} iconSrc={chat.iconSrc}/>
                ))}
            </div>
        </>
    )
}