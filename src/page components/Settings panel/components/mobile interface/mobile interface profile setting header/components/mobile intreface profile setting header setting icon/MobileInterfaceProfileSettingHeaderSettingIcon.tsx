import "./mobileInterfaceUserProfileSettingHeaderSettingIcon.css";

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGear} from "@fortawesome/free-solid-svg-icons";

export default function MobileInterfaceProfileSettingHeaderSettingIcon() {
    return (
        <>
            <div className="mobileInterfaceUserProfileSettingHeaderSettingIcon">
                <p>
                    <FontAwesomeIcon icon={faGear}/>
                </p>
            </div>
        </>
    )
}