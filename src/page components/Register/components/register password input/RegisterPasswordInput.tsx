import "./registerPasswordInput.css";

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faLock} from "@fortawesome/free-solid-svg-icons";

export default function RegisterPasswordInput({setPassword}:{setPassword: (password:string) => void}) {
    return (
        <>
            <div className="registerPasswordInput">
                <div className="inputWrapper">
                    <input onChange={(e) => setPassword(e.target.value)} type="password" placeholder=" Enter password"/>
                    <FontAwesomeIcon icon={faLock} className="icon-user" fontSize="20px" color="white"/>
                </div>
            </div>
        </>
    )
}
