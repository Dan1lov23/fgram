import MobileInterfaceSettingsList from "../mobile interface settings list/MobileInterfaceSettingsList.tsx";
import MobileInterfaceProfileSettingHeader from "../mobile interface profile setting header/mobile interface profile setting header/MobileInterfaceProfileSettingHeader.tsx";
import MobileInterfaceProfileSettingBackPanel from "../mobile interface profile setting back panel/MobileInterfaceProfileSettingBackPanel.tsx";
import MobileInterfaceUserProfileSettings from "../mobile interface user profile settings/desktop interface user profile settings/MobileInterfaceUserProfileSettings.tsx";
import MobileInterfaceDeleteAccountSettings from "../mobile interface delete account settings/mobile interface delete account settings/MobileInterfaceDeleteAccountSettings.tsx";

import {useState} from "react";

export default function MobileInterfaceSettingsPanel() {

    const [openSetting, setOpenSetting] = useState<string>("");

    return (
        <>
            <div className="mobileInterfaceSettingsPanel">
                {openSetting === "userProfile" ? (
                    <div>
                        <MobileInterfaceProfileSettingBackPanel setOpenSetting={setOpenSetting} />
                        <MobileInterfaceUserProfileSettings/>
                    </div>
                ) : openSetting === "deleteAccount" ? (
                    <div>
                        <MobileInterfaceProfileSettingBackPanel setOpenSetting={setOpenSetting} />
                        <MobileInterfaceDeleteAccountSettings/>
                    </div>
                ) :  (
                    <div>
                        <MobileInterfaceProfileSettingHeader/>
                        <MobileInterfaceSettingsList setOpenSetting={setOpenSetting} />
                    </div>
                )}
            </div>
        </>
    )
}