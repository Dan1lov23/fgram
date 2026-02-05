import "./desktopInterfaceDeleteAccountSettingCart.css";

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTrash} from "@fortawesome/free-solid-svg-icons";

export default function DesktopInterfaceDeleteAccountSettingCart({openSetting, setOpenSetting}:{openSetting:string, setOpenSetting: (openSetting: string) => void}) {
    return (
        <>
            <div className="desktopInterfaceDeleteAccountSettingCart" onClick={() => setOpenSetting("deleteAccount")}>
                {openSetting === "deleteAccount" ? (
                    <div className="desktopInterfaceDeleteAccountSettingCartSelect">
                        <p>Delete account <FontAwesomeIcon icon={faTrash}/></p>
                    </div>
                ) : (
                    <div className="desktopInterfaceDeleteAccountSettingCartDefault">
                        <p>Delete account <FontAwesomeIcon icon={faTrash}/></p>
                    </div>
                )}
            </div>
        </>
    )
}
