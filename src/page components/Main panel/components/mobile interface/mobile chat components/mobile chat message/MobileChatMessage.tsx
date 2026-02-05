import { motion } from "framer-motion";

import MobileChatSenderMessage from "../mobile chat sender message/MobileChatSenderMessage.tsx";
import MobileChatRecipientMessage from "../mobile chat recipient message/MobileChatRecipientMessage.tsx";

export default function MobileChatMessage({messageCreator, chatMessage, messageTime, messageId, messageSender}:{messageCreator:string | null, chatMessage:string, messageTime:number, messageId: number, messageSender:string}) {
    return (
        <>
            <motion.div
                initial={{opacity: 0, y: 50}}
                animate={{opacity: 1, y: 0}}
                transition={{duration: 0.5}}
            >
                {messageCreator === localStorage.getItem("username") ? (
                    <MobileChatSenderMessage messageText={chatMessage} messageTime={messageTime} messageId={messageId} messageSender={messageSender}/>
                ) : (
                    <MobileChatRecipientMessage messageText={chatMessage} messageTime={messageTime} messageId={messageId} messageSender={messageSender}/>
                )}
            </motion.div>
        </>
    )
}
