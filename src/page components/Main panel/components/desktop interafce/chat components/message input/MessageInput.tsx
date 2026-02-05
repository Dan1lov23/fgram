import "./messageInput.css";

import {sendMessageFunction} from "../../../../../../API/messages API functions/messagesApiFunctions.ts";

export default function MessageInput({message, setMessage}:{message:string, setMessage: (message:string) => void}) {

    return (
        <>
            <div className="desktopInterfaceMessageInput">
                <input placeholder=" enter your message" onChange={(e) => setMessage(e.target.value)} value={message}
                   onKeyDown={(e) => {
                       if (e.key === 'Enter') {
                           console.log("Sending message:", message);
                           sendMessageFunction(localStorage.getItem("username"), localStorage.getItem("companion"), message, Date.now(), setMessage);
                       }
                   }}
                />
            </div>
        </>
    )
}
