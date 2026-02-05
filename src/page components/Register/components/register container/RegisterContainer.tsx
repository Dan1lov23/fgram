import "./registerContainer.css";

import {useState} from "react";

import RegisterTitle from "../register title/RegisterTitle.tsx";
import RegisterUsernameInput from "../register username input/RegisterUsernameInput.tsx";
import RegisterPasswordInput from "../register password input/RegisterPasswordInput.tsx";
import RegisterRepeatPasswordInput from "../register repeat password input/RegisterRepeatPasswordInput.tsx";
import RegisterButton from "../register button/RegisterButton.tsx";
import RegisterError from "../register error/RegisterError.tsx";
import RegisterEmailInput from "../register email input/RegisterEmailInput.tsx";

export default function RegisterContainer() {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [repeatPassword, setRepeatPassword] = useState("");
    const [error, setError] = useState("");

    return (
        <>
            <div className="registerContainer">
                <RegisterTitle/>
                <RegisterUsernameInput setUsername={setUsername}/>
                <RegisterEmailInput setEmail={setEmail}/>
                <RegisterPasswordInput setPassword={setPassword}/>
                <RegisterRepeatPasswordInput setRepeatPassword={setRepeatPassword}/>
                <RegisterButton username={username} password={password} email={email} passwordRepeat={repeatPassword} error={error}  setError={setError}/>
                {error.length > 0 ? (
                    <RegisterError error={error}/>
                ) : (
                    <p></p>
                )}
            </div>
        </>
    )
}