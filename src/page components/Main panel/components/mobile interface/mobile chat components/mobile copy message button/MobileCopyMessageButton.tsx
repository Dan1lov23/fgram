import "./mobileCopyMessageButton.css";

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCopy} from "@fortawesome/free-solid-svg-icons";

export default function MobileCopyMessageButton({messageText}:{messageText:string}) {

    return (
        <>
            <div className="mobileCopyMessageButton">
                <button onClick={() => navigator.clipboard.writeText(messageText)}>
                    <FontAwesomeIcon icon={faCopy} />
                </button>
            </div>
        </>
    )
}