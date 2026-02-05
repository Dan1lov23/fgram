import "./registerButton.css";

import {useNavigate} from "react-router-dom";

import {registerFunction} from "../../../../API/auth API functions/authApiFunctions.ts";

export default function RegisterButton({username, email, password, passwordRepeat, error, setError}:{username:string, email:string, password:string, passwordRepeat:string, error:string, setError: (error:string) => void}) {

    const navigate = useNavigate();

    return (
        <>
            <div className="registerButton">
                <button onClick={() => registerFunction(username, password, passwordRepeat, email, navigate, error, setError)}>
                    REGISTER
                </button>
            </div>
        </>
    )
}