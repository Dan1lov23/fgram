import "./registerRepeatPasswordInput.css";

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faLock} from "@fortawesome/free-solid-svg-icons";

export default function RegisterRepeatPasswordInput({setRepeatPassword}:{setRepeatPassword: (password:string) => void}) {
    return (
        <>
            <div className="registerRepeatPasswordInput">
                <div className="inputWrapper">
                    <input onChange={(e) => setRepeatPassword(e.target.value)} type="password" placeholder=" Enter password repeat"/>
                    <FontAwesomeIcon icon={faLock} className="icon-user" fontSize="20px" color="white"/>
                </div>
            </div>
        </>
    )
}
