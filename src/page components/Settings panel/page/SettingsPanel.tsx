import "./settingsPanel.css";

import {motion} from "framer-motion";

import DesktopInterfaceSettingsPanel from "../components/desktop interafce/desktop interface settings panel/DesktopInterfaceSettingsPanel.tsx";
import MobileInterfaceSettingsPanel from "../components/mobile interface/mobile interface setttings panel/MobileInterfaceSettingsPanel.tsx";
import DontActivatedAccount from "../../../UI components/dont activated account/DontActivatedAccount.tsx";

export default function SettingsPanel() {

    return (
        <>
            <div className="settingsPanel">
                <motion.div
                    initial={{opacity: 0, y: 0}}
                    animate={{opacity: 1, y: 0}}
                    transition={{duration: 0.5}}
                >
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
                </motion.div>
            </div>
        </>
)
}