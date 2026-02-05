import "./mobileInterfaceProfileSettingBackPanel.css";

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowLeft} from "@fortawesome/free-solid-svg-icons";
import MobileInterfaceProfileSettingHeaderSettingIcon
    from "../mobile interface profile setting header/components/mobile intreface profile setting header setting icon/MobileInterfaceProfileSettingHeaderSettingIcon.tsx";

export default function MobileInterfaceProfileSettingBackPanel({setOpenSetting}:{setOpenSetting: (openSetting: string) => void}) {
    return (
        <>
            <div className="mobileInterfaceProfileSettingBackPanel">
                <p style={{fontSize: "30px", marginLeft: "15%"}}><FontAwesomeIcon icon={faArrowLeft} onClick={() => setOpenSetting("")}/></p>
                <MobileInterfaceProfileSettingHeaderSettingIcon/>
            </div>
        </>
    )
}