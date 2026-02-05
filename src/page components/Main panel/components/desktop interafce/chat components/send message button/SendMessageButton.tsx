import "./sendMessageButton.css";

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowRight} from "@fortawesome/free-solid-svg-icons";

import {sendMessageFunction} from "../../../../../../API/messages API functions/messagesApiFunctions.ts";

export default function SendMessageButton({message, setMessage}:{message:string, setMessage: (message:string) => void}) {
    return (
        <>
            <div className="sendMessageButton">
                <button onClick={() => sendMessageFunction(localStorage.getItem("username"), localStorage.getItem("companion"), message, Date.now(), setMessage)}>
                    <FontAwesomeIcon icon={faArrowRight} />
                </button>
            </div>
        </>
    )
}
