import "./loginButton.css";

import {useNavigate} from "react-router-dom";

import {loginFunction} from "../../../../API/auth API functions/authApiFunctions.ts";

export default function LoginButton({username, password, setError}:{username:string, password:string, setError: (error:string) => void}) {

    const navigate = useNavigate();

    return (
        <>
            <div className="loginButton">
                <button onClick={() => loginFunction(username, password, navigate, setError)}>
                    LOG IN
                </button>
            </div>
        </>
    )
}