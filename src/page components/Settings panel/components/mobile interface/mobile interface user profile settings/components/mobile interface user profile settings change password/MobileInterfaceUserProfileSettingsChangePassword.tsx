import "./mobileInterfaceUserProfileSettingsChangePassword.css";

import {useNavigate} from "react-router-dom";

export default function MobileInterfaceUserProfileSettingsChangePassword() {

    const navigate = useNavigate();

    return (
        <>
            <div className="mobileUserProfileSettingsChangePassword">
                <button onClick={() => navigate("/changePassword")}>
                    Change password
                </button>
            </div>
        </>
    )
}
