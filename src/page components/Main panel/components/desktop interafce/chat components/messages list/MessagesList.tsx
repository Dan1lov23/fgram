import "./MessagesList.css";

import {useSelector} from "react-redux";

import {useEffect} from "react";

import {useRef} from "react";

import ChatMessage from "../chat message/ChatMessage.tsx";

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
    }, [actualChat]);

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
