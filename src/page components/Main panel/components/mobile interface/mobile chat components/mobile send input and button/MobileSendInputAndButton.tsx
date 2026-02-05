import "./mobileSendInputAndMessageButton.css";

import {useState} from "react";

import MobileMessageInput from "../mobile message input/mobileMessageInput.tsx";
import MobileSendMessageButton from "../mobile send message button/MobileSendMessageButton.tsx";

export default function MobileSendInputAndMessageButton() {

    const [message, setMessage] = useState("");

    return (
        <>
            <div className="mobileSendInputAndMessageButton">
                <MobileMessageInput message={message} setMessage={setMessage} />
                <MobileSendMessageButton message={message} setMessage={setMessage} />
            </div>
        </>
    )
}