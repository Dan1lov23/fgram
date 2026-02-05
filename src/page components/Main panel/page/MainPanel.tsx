import "./mainPanel.css";

import {motion} from "framer-motion";

import DesktopInterfaceMainPanel from "../components/desktop interafce/desktop interface main panel/DesktopInterfaceMainPanel.tsx";
import MobileInterfaceMainPanel from "../components/mobile interface/mobile interface main panel/MobileInterfaceMainPanel.tsx";
import DontActivatedAccount from "../../../UI components/dont activated account/DontActivatedAccount.tsx";

export default function MainPanel() {

    return (
        <>
            <div className="mainPanel">
                <motion.div
                    initial={{opacity: 0, y: 0}}
                    animate={{opacity: 1, y: 0}}
                    transition={{duration: 0.5}}
                >
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
                </motion.div>
            </div>
        </>
    )
}
