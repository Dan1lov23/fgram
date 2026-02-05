import "./registerUsernameInput.css";

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faUser} from "@fortawesome/free-solid-svg-icons";

export default function RegisterUsernameInput({setUsername}:{setUsername: (username:string) => void}) {
    return (
        <>
            <div className="registerUsernameInput">
                <div className="inputWrapper">
                    <input onChange={(e) => setUsername(e.target.value)} placeholder=" Enter username"/>
                    <FontAwesomeIcon icon={faUser} className="icon-user" fontSize="20px" color="white"/>
                </div>
            </div>
        </>
    )
}