import "./mobileMessageInput.css";

import {sendMessageFunction} from "../../../../../../API/messages API functions/send message function/sendMessageFunction.ts";

export default function MobileMessageInput({message, setMessage}:{message:string, setMessage: (message:string) => void}) {

    return (
        <>
            <div className="mobileMessageInput">
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
