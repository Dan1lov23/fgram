import "./desktopInterfaceUserProfileSettings.css";

import DesktopInterfaceUserProfileSettingsLogout from "../components/desktop interface user profile settings logout/DesktopInterfaceUserProfileSettingsLogout.tsx";
import DesktopInterfaceUserProfileSettingsChangeAvatar from "../components/desktop interface user profile settings change avatar/DesktopInterfaceUserProfileSettingsChangeAvatar.tsx";
import DesktopInterfaceUserProfileSettingsChangePassword from "../components/desktop interface user profile settings change password/DesktopInterfaceUserProfileSettingsChangePassword.tsx";
import DesktopInterfaceUserProfileSettingsChangeUsername from "../components/desktop interface user profile settings change username/DesktopInterfaceUserProfileSettingsChangeUsername.tsx";

export default function DesktopInterfaceUserProfileSettings() {
    return (
        <>
            <div className="desktopInterfaceUserProfileSettings">
                <DesktopInterfaceUserProfileSettingsChangeAvatar/>
                <DesktopInterfaceUserProfileSettingsChangeUsername/>
                <DesktopInterfaceUserProfileSettingsChangePassword/>
                <DesktopInterfaceUserProfileSettingsLogout/>
            </div>
        </>
    )
}
