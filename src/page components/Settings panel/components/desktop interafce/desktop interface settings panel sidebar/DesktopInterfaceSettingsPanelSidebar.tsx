import "./desktopInterfaceSettingsPanelSidebar.css";

import NavBar from "../../../../../UI components/nav bar/NavBar.tsx";
import DesktopInterfaceSettingsList from "../desktop interface settings list/DesktopInterfaceSettingsList.tsx";

export default function DesktopInterfaceSettingsPanelSidebar({openSetting, setOpenSetting}:{openSetting:string, setOpenSetting: (openSetting: string) => void}) {
    return (
        <>
            <div className="desktopInterfaceSettingsPanelSidebar">
                <DesktopInterfaceSettingsList openSetting={openSetting} setOpenSetting={setOpenSetting}/>
                <NavBar/>
            </div>
        </>
    )
}