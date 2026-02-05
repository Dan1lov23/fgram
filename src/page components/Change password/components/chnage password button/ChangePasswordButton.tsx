import "./changePasswordButton.css";

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPencil} from "@fortawesome/free-solid-svg-icons";

import {useNavigate} from "react-router-dom";

import {changePasswordFunction} from "../../../../API/change profile API functions/changeProfileApiFunctions.ts";

export default function ChangePasswordButton({oldPassword, newPassword, setError}:{oldPassword: string, newPassword: string, setError:(error:string) => void}) {

    const navigate = useNavigate();

    return (
        <>
            <div className="changePasswordButton">
                <button
                    onClick={() => changePasswordFunction(oldPassword, newPassword, localStorage.getItem("username"), localStorage.getItem("token"), setError, navigate)}>
                    Change password <FontAwesomeIcon icon={faPencil}/>
                </button>
            </div>
        </>
    )
}
