import "./mobileInterfaceDeleteAccountSettingCart.css";

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTrash} from "@fortawesome/free-solid-svg-icons";

export default function MobileInterfaceDeleteAccountSettingCart({setOpenSetting}:{setOpenSetting: (openSetting: string) => void}) {
    return (
        <>
            <div className="mobileInterfaceDeleteAccountSettingCart" onClick={() => setOpenSetting("deleteAccount")}>
                <div className="mobileInterfaceDeleteAccountSettingCart">
                    <p>Delete account <FontAwesomeIcon icon={faTrash}/></p>
                </div>
            </div>
        </>
    )
}
