import "./mobileInterfaceDeleteAccountSettings.css";

import MobileInterfaceDeleteAccountTitle from "../components/desktop interface delete account title/MobileInterfaceDeleteAccountTitle.tsx";
import MobileInterfaceDeleteAccountButton from "../components/mobile interface delete account button/MobileInterfaceDeleteAccountButton.tsx";

export default function MobileInterfaceDeleteAccountSettings() {
    return (
        <>
            <div className="mobileInterfaceDeleteAccountSettings">
                <MobileInterfaceDeleteAccountTitle/>
                <MobileInterfaceDeleteAccountButton />
            </div>
        </>
    )
}
