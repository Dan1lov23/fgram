import "./desktopInterfaceUserProfileSettingsChangePassword.css";

import {useNavigate} from "react-router-dom";

export default function DesktopInterfaceUserProfileSettingsChangePassword() {

    const navigate = useNavigate();

    return (
        <>
            <div className="userProfileSettingsChangePassword">
                <button onClick={() => navigate("/changePassword")}>
                    Change password
                </button>
            </div>
        </>
    )
}
