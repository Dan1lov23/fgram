import "./settingsPanel.css";

import DesktopInterfaceSettingsPanel from "../components/desktop interafce/desktop interface settings panel/DesktopInterfaceSettingsPanel.tsx";
import MobileInterfaceSettingsPanel from "../components/mobile interface/mobile interface setttings panel/MobileInterfaceSettingsPanel.tsx";
import DontActivatedAccount from "../../../UI components/dont activated account/DontActivatedAccount.tsx";

export default function SettingsPanel() {

    return (
        <>
            <div className="settingsPanel">
                {localStorage.getItem("isActivated") === "true" ? (
                    <div>
                        <div className="settingsPanelDesktop">
                            <DesktopInterfaceSettingsPanel/>
                        </div>
                        <div className="settingsPanelMobile">
                            <MobileInterfaceSettingsPanel/>
                        </div>
                    </div>
                ) : (
                    <DontActivatedAccount/>
                )}
            </div>
        </>
    )
}