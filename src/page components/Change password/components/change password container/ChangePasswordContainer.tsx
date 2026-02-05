import "./changePasswordContainer.css";

import {useState} from "react";

import ChangePasswordTitle from "../change passwords title/ChangePasswordTitle.tsx";
import ChangePasswordPasswordsInputs from "../change passwords passwords inputs/ChangePasswordPasswrodsInputs.tsx";
import ChangePasswordButton from "../chnage password button/ChangePasswordButton.tsx";
import ChangePasswordError from "../change password error/ChangePasswordError.tsx";


export default function ChangePasswordContainer() {

    const [oldPassword, setOldPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [error, setError] = useState("");

    return (
        <>
            <div className="changePasswordContainer">
                <ChangePasswordTitle/>
                <ChangePasswordPasswordsInputs setOldPassword={setOldPassword} setNewPassword={setNewPassword}/>
                <ChangePasswordButton oldPassword={oldPassword} newPassword={newPassword} setError={setError}/>
                {error.length > 0 ? (
                    <ChangePasswordError error={error}/>
                ) : (
                    <p></p>
                )}
            </div>
        </>
    )
}