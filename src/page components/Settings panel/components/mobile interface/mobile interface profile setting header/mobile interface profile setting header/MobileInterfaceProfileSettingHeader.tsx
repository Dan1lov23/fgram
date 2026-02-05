import "./mobileInterfaceProfileSettingHeader.css";

import MobileInterfaceProfileSettingHeaderMenuButton from "../components/mobile interface profile settting header menu button/MobileInterfaceProfileSettingHeaderMenuButton.tsx";
import MobileInterfaceProfileSettingHeaderSettingIcon
    from "../components/mobile intreface profile setting header setting icon/MobileInterfaceProfileSettingHeaderSettingIcon.tsx";

export default function MobileInterfaceProfileSettingHeader() {
    return (
        <>
            <div className="mobileInterfaceProfileSettingHeader">
                <MobileInterfaceProfileSettingHeaderMenuButton />
                <MobileInterfaceProfileSettingHeaderSettingIcon/>
            </div>
        </>
    )
}