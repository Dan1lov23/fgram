import "./mobileInterfaceUserProfileSettingsChangeAvatar.css";

import {useRef} from "react";

import UserIcon from "../../../../../../../UI components/user icon/UserIcon.tsx";
import {changeIconFunction} from "../../../../../../../API/change profile API functions/changeProfileApiFunctions.ts";

export default function MobileInterfaceUserProfileSettingsChangeAvatar() {

    const fileInputRef:any = useRef(null);

    const handleButtonClick = () => {
        fileInputRef.current.click();
    };

    const handleFileChange = (event: any) => {
        const file = event.target.files[0];
        const username:any = localStorage.getItem("username");
        if (file) {
            const formData = new FormData();
            formData.append('image', file);
            formData.append('username', username);
            changeIconFunction(formData);
        }
    };

    return (
        <>
            <div className="mobileInterfaceUserProfileSettingsChangeAvatar">
                <div className="inputButtonAndAvatar">
                    <UserIcon userIconSrc={localStorage.getItem("iconSrc")}/>
                    <input
                        type="file"
                        ref={fileInputRef}
                        style={{ display: 'none' }}
                        onChange={handleFileChange}
                    />
                    <button onClick={handleButtonClick}>
                        Change avatar
                    </button>
                </div>
            </div>
        </>
    )
}
