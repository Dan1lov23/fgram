import "./mobileBackButton.css";

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCircleArrowLeft} from "@fortawesome/free-solid-svg-icons";

export default function MobileBackButton({setIsSearchPanelOpen}:{setIsSearchPanelOpen: (isOpen:boolean) => void}) {
    return (
        <>
            <div className="mobileBackButton">
                <p  onClick={() => setIsSearchPanelOpen(false)}>
                    <FontAwesomeIcon icon={faCircleArrowLeft} />
                </p>
            </div>
        </>
    )
}