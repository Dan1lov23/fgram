import "./usernameLoginInput.css";

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faUser} from "@fortawesome/free-solid-svg-icons";

export default function UsernameLoginInput({ setUsername }: { setUsername: (newUsername: string) => void }) {
    return (
        <div className="usernameLoginInput">
            <div className="inputWrapper">
                <input onChange={(e) => setUsername(e.target.value)} placeholder=" Enter username" />
                <FontAwesomeIcon icon={faUser} className="icon-user" fontSize="20px" color="white" />
            </div>
        </div>
    );
}