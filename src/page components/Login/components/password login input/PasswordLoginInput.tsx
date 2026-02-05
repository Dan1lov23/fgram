import "./passwordLoginInput.css";

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faLock} from "@fortawesome/free-solid-svg-icons";

export default function PasswordLoginInput({setPassword}:{setPassword: (password:string) => void}) {
    return (
        <>
            <div className="passwordLoginInput">
                <div className="inputWrapper">
                    <input onChange={(e) => setPassword(e.target.value)} placeholder=" Enter password"/>
                    <FontAwesomeIcon icon={faLock} className="icon-user" fontSize="20px" color="white"/>
                </div>
            </div>
        </>
    )
}
