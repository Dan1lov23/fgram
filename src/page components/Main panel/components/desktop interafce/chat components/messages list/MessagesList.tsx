import "./MessagesList.css";

import { useSelector } from "react-redux";

import { useEffect, useRef } from "react";

import ChatMessage from "../chat message/ChatMessage.tsx";

import { sendMessageFunction } from "../../../../../../API/messages API functions/send message function/sendMessageFunction.ts";

export default function MessagesList() {

    const actualChat = useSelector((state:any) => state.actualChat.actualChat);

    const ref:any = useRef(null);

    const scrollToBottom = () => {
        if (ref.current) {
            ref.current.scrollTo({ top: ref.current.scrollHeight, behavior: 'smooth' });
        }
    };

    useEffect(() => {
        scrollToBottom();
    }, [sendMessageFunction]);

    return (
        <>
            <div className="desktopInterfaceMessagesList" ref={ref}>
                {actualChat.map((message:any) => (
                    <ChatMessage messageCreator={message.sender} chatMessage={message.messageText} messageTime={message.messageTime} messageId={message.id} messageSender={message.sender}/>
                ))}
            </div>
        </>
    )
}
