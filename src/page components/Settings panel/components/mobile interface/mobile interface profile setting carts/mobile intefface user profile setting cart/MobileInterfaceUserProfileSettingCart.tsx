import "./mobileInterfaceUserProfileSettingCart.css";

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faUser} from "@fortawesome/free-solid-svg-icons";

export default function MobileInterfaceUserProfileSettingCart({setOpenSetting}:{setOpenSetting: (openSetting: string) => void}) {
    return (
        <>
            <div className="mobileInterfaceUserProfileSettingCart" onClick={() => setOpenSetting("userProfile")}>
                <div className="mobileInterfaceUserProfileSettingCartDefault">
                    <p>User profile <FontAwesomeIcon icon={faUser}/></p>
                </div>
            </div>
        </>
    )
}
