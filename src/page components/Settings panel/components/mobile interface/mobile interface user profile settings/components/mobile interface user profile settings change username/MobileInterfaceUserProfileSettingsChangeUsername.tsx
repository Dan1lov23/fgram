import "./mobileInterfaceUserProfileSettingsChangeUsername.css";

import {useState} from "react";

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPencil} from "@fortawesome/free-solid-svg-icons";

import {changeUsernameFunction} from "../../../../../../../API/change profile API functions/changeProfileApiFunctions.ts";

export default function MobileInterfaceUserProfileSettingsChangeUsername() {

    const [username, setUsername] = useState<any>(localStorage.getItem("username"));

    return (
        <>
            <div className="mobileInterfaceUserProfileSettingsChangeUsername">
                <div className="inputAndButton">
                    <p>Change username</p>
                    <input value={username} placeholder="Old username" onChange={(e) => setUsername(e.target.value)}/>
                    <button onClick={() => changeUsernameFunction(localStorage.getItem("username"), username)}>Change username <FontAwesomeIcon icon={faPencil}/></button>
                </div>
            </div>
        </>
    )
}