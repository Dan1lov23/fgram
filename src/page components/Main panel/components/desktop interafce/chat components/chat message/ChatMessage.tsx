import "./chatMessage.css";

import { motion } from "framer-motion";

import ChatSenderMessage from "../chat sender message/ChatSenderMessage.tsx";
import ChatRecipientMessage from "../chat recipient message/ChatRecipientMessage.tsx";
import MessageUserIcon from "../../../../../../UI components/message user icon/MessageUserIcon.tsx";

export default function ChatMessage({messageCreator, chatMessage, messageTime, messageId, messageSender}:{messageCreator:string | null, chatMessage:string, messageTime:number, messageId: number, messageSender:string}) {
    return (
        <>
            <div className="chatMessage">
                <motion.div
                    initial={{opacity: 0, y: 50}}
                    animate={{opacity: 1, y: 0}}
                    transition={{duration: 0.5}}
                >
                    {messageCreator === localStorage.getItem("username") ? (
                        <div className="chatMessageSenderType">
                            <MessageUserIcon iconSrc={localStorage.getItem("iconSrc")}/>
                            <ChatSenderMessage messageText={chatMessage} messageTime={messageTime} messageId={messageId} messageSender={messageSender}/>
                        </div>
                    ) : (
                        <div className="chatMessageRecipientType">
                            <MessageUserIcon iconSrc={localStorage.getItem("companionIconSrc")}/>
                            <ChatRecipientMessage messageText={chatMessage} messageTime={messageTime} messageId={messageId} messageSender={messageSender}/>
                        </div>
                    )}
                </motion.div>
            </div>
        </>
    )
}
