import "./registerEmailInput.css";

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAt} from "@fortawesome/free-solid-svg-icons";

export default function RegisterEmailInput({setEmail}:{setEmail: (email:string) => void}) {
    return (
        <>
            <div className="registerEmailInput">
                <div className="inputWrapper">
                    <input onChange={(e) => setEmail(e.target.value)} placeholder=" Enter email"/>
                    <FontAwesomeIcon icon={faAt} className="icon-email" fontSize="20px" color="white" />
                </div>
            </div>
        </>
    )
}
