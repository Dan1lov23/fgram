import "./desktopInterfaceDeleteAccountSettings.css";

import DesktopInterfaceDeleteAccountButton from "../components/desktop interface delete account button/DesktopInterfaceDeleteAccountButton.tsx";
import DesktopInterfaceDeleteAccountTitle from "../components/desktop interface delete account title/DesktopInterfaceDeleteAccountTitle.tsx";

export default function DesktopInterfaceDeleteAccountSettings() {
    return (
        <>
            <div className="desktopInterfaceDeleteAccountSettings">
                <DesktopInterfaceDeleteAccountTitle/>
                <DesktopInterfaceDeleteAccountButton />
            </div>
        </>
    )
}
