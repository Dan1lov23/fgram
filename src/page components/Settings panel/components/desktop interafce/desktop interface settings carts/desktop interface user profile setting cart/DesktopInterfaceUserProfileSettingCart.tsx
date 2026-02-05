import "./desktopInterfaceUserProfileSettingCart.css";

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faUser} from "@fortawesome/free-solid-svg-icons";

export default function DesktopInterfaceUserProfileSettingCart({openSetting, setOpenSetting}:{openSetting:string, setOpenSetting: (openSetting: string) => void}) {
    return (
        <>
            <div className="desktopInterfaceUserProfileSettingCart" onClick={() => setOpenSetting("userProfile")}>
                {openSetting === "userProfile" ? (
                    <div className="desktopInterfaceUserProfileSettingCartSelect">
                        <p>User profile <FontAwesomeIcon icon={faUser}/></p>
                    </div>
                ) : (
                    <div className="desktopInterfaceUserProfileSettingCartDefault">
                        <p>User profile <FontAwesomeIcon icon={faUser}/></p>
                    </div>
                )}
            </div>
        </>
    )
}