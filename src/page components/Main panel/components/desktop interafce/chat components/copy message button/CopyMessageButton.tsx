import "./copyMessageButton.css";

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCopy} from "@fortawesome/free-solid-svg-icons";

export default function CopyMessageButton({messageText}:{messageText:string}) {

    return (
        <>
            <div className="copyMessageButton">
                <button onClick={() => navigator.clipboard.writeText(messageText)}>
                    <FontAwesomeIcon icon={faCopy} />
                </button>
            </div>
        </>
    )
}