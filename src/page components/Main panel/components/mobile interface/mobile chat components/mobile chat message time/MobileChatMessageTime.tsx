import "./mobileChatMessageTime.css";

import { useState, useEffect } from 'react'

import {formatTime} from "../../../../../../Other functions/convert time function/ConvertTimeFunction.ts";

export default function ChatMessageTime({ chatMessageTime }: { chatMessageTime: number }) {

    const [time, setTime] = useState<string>("");

    useEffect(() => {
        const messageTime = formatTime(chatMessageTime);
        setTime(messageTime);
    }, [chatMessageTime])

    return (
        <div className="mobileChatMessageTime">
            <p>{time}</p>
        </div>
    )
}
