import "./sendInputAndMessageButton.css";

import {useState} from "react";

import MessageInput from "../message input/MessageInput.tsx";
import SendMessageButton from "../send message button/SendMessageButton.tsx";

export default function SendInputAndMessageButton() {

    const [message, setMessage] = useState("");

    return (
        <>
            <div className="sendInputAndMessageButton">
                <MessageInput message={message} setMessage={setMessage} />
                <SendMessageButton message={message} setMessage={setMessage} />
            </div>
        </>
    )
}