import "./desktopInterfaceSettingsPanel.css";

import {useState} from "react";

import DesktopInterfaceSettingsPanelSidebar from "../desktop interface settings panel sidebar/DesktopInterfaceSettingsPanelSidebar.tsx";
import DesktopInterfaceUserProfileSettings from "../desktop interface user profile settings/desktop interface user profile settings/DesktopInterfaceUserProfileSettings.tsx";
import DesktopInterfaceDeleteAccountSettings from "../desktop interface delete account settings/desktop interface delete account settings/DesktopInterfaceDeleteAccountSettings.tsx";

export default function DesktopInterfaceSettingsPanel() {

    const [openSetting, setOpenSetting] = useState<string>("userProfile");

    return (
        <>
            <div className="desktopInterfaceSettingsPanel">
                <DesktopInterfaceSettingsPanelSidebar openSetting={openSetting} setOpenSetting={setOpenSetting} />
                {openSetting === "userProfile" ? (
                    <DesktopInterfaceUserProfileSettings/>
                ) : openSetting === "deleteAccount" ? (
                    <DesktopInterfaceDeleteAccountSettings/>
                ) : (
                    <p></p>
                )}
            </div>
        </>
    )
}
