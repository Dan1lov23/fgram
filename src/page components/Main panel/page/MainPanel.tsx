import "./mainPanel.css";

import DesktopInterfaceMainPanel from "../components/desktop interafce/desktop interface main panel/DesktopInterfaceMainPanel.tsx";
import MobileInterfaceMainPanel from "../components/mobile interface/mobile interface main panel/MobileInterfaceMainPanel.tsx";
import DontActivatedAccount from "../../../UI components/dont activated account/DontActivatedAccount.tsx";

export default function MainPanel() {

    return (
        <>
            <div className="mainPanel">
                {localStorage.getItem("isActivated") === "true" ? (
                    <div>
                        <div className="mobileInterface">
                            <MobileInterfaceMainPanel/>
                        </div>
                        <div className="desktopInterface">
                            <DesktopInterfaceMainPanel/>
                        </div>
                    </div>
                ) : (
                    <DontActivatedAccount/>
                )}
            </div>
        </>
    )
}
