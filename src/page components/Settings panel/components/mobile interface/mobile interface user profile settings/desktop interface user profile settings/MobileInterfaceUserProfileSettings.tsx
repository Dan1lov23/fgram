import "./mobileInterfaceUserProfileSettings.css";

import MobileInterfaceUserProfileSettingsChangePassword from "../components/mobile interface user profile settings change password/MobileInterfaceUserProfileSettingsChangePassword.tsx";
import MobileInterfaceUserProfileSettingsChangeAvatar from "../components/mobile interface user profile settings change avatar/MobileInterfaceUserProfileSettingsChangeAvatar.tsx";
import MobileInterfaceUserProfileSettingsLogout from "../components/mobile interface user profile settings logout/MobileInterfaceUserProfileSettingsLogout.tsx";
import MobileInterfaceUserProfileSettingsChangeUsername from "../components/mobile interface user profile settings change username/MobileInterfaceUserProfileSettingsChangeUsername.tsx";

export default function MobileInterfaceUserProfileSettings() {
    return (
        <>
            <div className="mobileInterfaceUserProfileSettings">
                <MobileInterfaceUserProfileSettingsChangeAvatar/>
                <MobileInterfaceUserProfileSettingsChangeUsername/>
                <MobileInterfaceUserProfileSettingsChangePassword/>
                <MobileInterfaceUserProfileSettingsLogout/>
            </div>
        </>
    )
}
