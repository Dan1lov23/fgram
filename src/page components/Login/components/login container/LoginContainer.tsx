import  "./loginContainer.css";

import {useState} from "react";

import LoginTitle from "../login title/LoginTitle.tsx";
import UsernameLoginInput from "../username login input/UsernameLoginInput.tsx";
import PasswordInput from "../password login input/PasswordLoginInput.tsx";
import LinkToRegister from "../link to register/LinkToRegister.tsx";
import LoginButton from "../login button/LoginButton.tsx";
import LoginError from "../login error/LoginError.tsx";

export default function LoginContainer() {

    const [username, setUsername] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [error, setError] = useState<string>("");

    return (
        <>
            <div className="loginContainer">
                <LoginTitle/>
                <UsernameLoginInput setUsername={setUsername} />
                <PasswordInput setPassword={setPassword} />
                <LinkToRegister/>
                <LoginButton username={username} password={password} setError={setError}/>
                {error.length > 0 ? (
                    <LoginError error={error}/>
                ) : (
                    <p></p>
                )}
            </div>
        </>
    )
}